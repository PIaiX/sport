import React from 'react';
import {RiCloseLine} from "react-icons/ri";
import {Link} from "react-router-dom";
import useCommands from "./hooks/useCommands";

const Commands = () => {
    const [commands, leftTeam] = useCommands()

    return (
        <fieldset>
            <legend>Вы участник команд</legend>
            <ul className='list-info mb-4'>
                {commands?.map(element=>
                    <li key={element?.id}>
                        <h6><Link to={`/commands/${element?.id}`}>{element?.name}</Link></h6>
                        <button type='button' onClick={()=>leftTeam(element?.id)} className='red fs-11'><RiCloseLine/></button>
                    </li>
                )}
            </ul>

            <div className="d-flex mt-3">
                <Link to={'/account/command/add'}>
                    <button type='button' className='btn-4'>
                        Создать
                    </button>
                </Link>
            </div>

        </fieldset>
    );
};

export default Commands;