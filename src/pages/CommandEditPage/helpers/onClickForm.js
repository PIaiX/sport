import {createTeam, updateTeam} from "../../../services/team";
import {useAppAction} from "../../../store";
import {useNavigate, useParams} from "react-router-dom";
import {useUserAction} from "../../../store/slices/user/actions";
import {useCallback} from "react";

export const OnClickForm = (avatar, setImageToNull)=>{
    const {setAlert} = useAppAction()
    const navigate = useNavigate()
    const {id} = useParams()
    const {getMyOwnCommands} = useUserAction()

    const SubmitUserClick = useCallback((data) => {
            const {name, disciplineId: {value}} =data
            let request = {name, disciplineId: value}
            const formData = new FormData()
            for (const key in request) {
                formData.append(key, request[key])
            }
            if (avatar?.image)
                formData.append('image', avatar?.image)

            if (setImageToNull)
                formData.append('setImageToNull', true)

            if (id)
                updateTeam(id, formData)
                    .then(res => {
                        navigate(`/commands`)
                        setAlert({message: 'Команда отредактирована', typeAlert: 'good'})
                    })
                    .catch(() => setAlert({message: 'Произошла ошибка', typeAlert: 'bad'}))
            else
                createTeam(formData)
                    .then(res => {
                        getMyOwnCommands()
                        navigate(`/commands/${res?.id}`)
                        setAlert({message: 'Команда создана', typeAlert: 'good'})
                    })
                    .catch(() => setAlert({message: 'Произошла ошибка', typeAlert: 'bad'}))
        }, [id])
    return [SubmitUserClick]
}