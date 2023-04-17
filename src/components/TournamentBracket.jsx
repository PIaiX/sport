import React, {useContext, useEffect, useRef, useState} from 'react'
import BracketItem from './utils/BracketItem'
import {CreateTable, GetAcceptedRequests, GetAllUsersByRound, GetMatchesByRound, GetTable} from "../services/table";
import Select from "react-select";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Controller, useForm} from "react-hook-form";
import ValidateWrapper from "./utils/ValidateWrapper";
import {filterForTable} from "../helpers/filterForTable";
import {EventContext} from "../pages/account/AddEvent";
import {GetOneEvent} from "../services/event";
import {AddNewMatch} from "../helpers/AddNewMatch";

const u = [{
        firstName: "Ramil1",
        lastName: "Zinnatullin",
        gender: true,
        image: null,
        height: '182',
        birthDate: '22.02.2002',
        weight: '100',
        age: 21,
        registrationDate: '13.04.2023',
        id: 1
    },
    {
        firstName: "Ramil2",
        lastName: "Zinnatullin",
        gender: false,
        image: null,
        height: '182',
        isJoin: false,
        birthDate: '22.02.2002',
        weight: '100',
        age: 21,
        registrationDate: '13.04.2023',
        id: 2
    },
    {
        firstName: "Ramil3",
        lastName: "Zinnatullin",
        gender: true,
        image: null,
        height: '182',
        birthDate: '22.02.2002',
        weight: '100',
        age: 21,
        id: 3,
        registrationDate: '13.04.2023'
    },
    {
        firstName: "Ramil4",
        lastName: "Zinnatullin",
        gender: true,
        image: null,
        height: '182',
        birthDate: '22.02.2002',
        weight: '100',
        age: 21,
        registrationDate: '13.04.2023',
        id: 4
    },
    {
        firstName: "Ramil5",
        lastName: "Zinnatullin",
        gender: false,
        image: null,
        height: '182',
        isJoin: false,
        birthDate: '22.02.2002',
        weight: '100',
        age: 21,
        registrationDate: '13.04.2023',
        id: 5
    },
    {
        firstName: "Ramil6",
        lastName: "Zinnatullin",
        gender: true,
        image: null,
        height: '182',
        birthDate: '22.02.2002',
        weight: '100',
        age: 21,
        registrationDate: '13.04.2023',
        id: 6
    }]
const tableOptions=[{
        label:'8 участников',
        value: 8
    },
    {
        label:'16 участников',
        value: 16
    },
    {
        label:'32 участникa',
        value: 32
    }]

const TournamentBracket = (props) => {
    const {acceptUsers, tab, tournamentTableId} = props
    const [users, setUsers] = useState(u)
    const {setEvent, event} = useContext(EventContext);
    const [table, setTable] = useState()

    const {handleSubmit, formState: {errors}, control} = useForm()

    useEffect(() => {
        if (tab) {
            GetAcceptedRequests(tab).then(res => {
                if (res?.length>0) {
                    setUsers(res?.map(element=>element.user))
                }
                else setUsers(null)
            })
            if (tournamentTableId) {
                GetTable(tournamentTableId).then(res => {
                    if(res){
                        setTable(filterForTable(res))
                    }
                })
                GetAllUsersByRound({tournamentTableId:tab, round:0}).then(res=>{
                    // console.log(res)
                })
            }
        }
    }, [acceptUsers, tournamentTableId])

    const CreateTableFunc = ({count:{value}}) => {
        CreateTable({size:value, categoryId:tab})
            .then(res=>{
                if(res) {
                    GetOneEvent(event?.id).then(res => {
                        if (res)
                            setEvent(res)
                    })
                }
            })
    }
    const [scrollX, setScrollX] = useState(0);
    const bracket = useRef(null)
    const scrollBracket = (event) => {
        event.preventDefault()
        const startX = event.pageX
        moveAt(event)

        function moveAt(event) {
            setScrollX(startX - event.pageX)
        }

        document.onmousemove = function (e) {
            moveAt(e);
        }
    }
    const stopScroll = () => {
        document.onmousemove = null;
        bracket.onmouseup = null
    }
    useEffect(() => {
        bracket.current.scrollLeft = scrollX
    })

    if (tournamentTableId)
        return (
            <div
                className="wrap"
                ref={bracket}
                onMouseUp={() => stopScroll()}
                onMouseDown={(event) => scrollBracket(event)}
            >
                <div className="bracket" id="id-1">
                    {table?.matches?.map((match, index) =>
                        <div className="tour" key={index}>
                            {
                                match.map((obj, i) =>
                                    <BracketItem
                                        tournamentTableId={tournamentTableId}
                                        users={users}
                                        {...obj}
                                        key={i}
                                        ICanGetRound={match=>setTable(AddNewMatch(table?.matches, match))}
                                        ordinal={i}
                                    />
                                )}
                        </div>
                    )}
                </div>
            </div>
        )

    else return (
        <form onSubmit={handleSubmit(CreateTableFunc)}>
            <Row xs={4} ref={bracket}>
                <Col xs={6} sm={3}>
                    <ValidateWrapper error={errors.count}>
                        <Controller
                            name={`count`}
                            control={control}
                            rules={{
                                required: 'Выберите значение',
                            }}
                            render={({field}) => (
                                <Select
                                    classNamePrefix="simple-select"
                                    className="simple-select-container borderless w-100 mb-3 validate-select"
                                    options={tableOptions}
                                    placeholder="Кол-во участников"
                                    {...field}
                                />
                            )}
                        />
                    </ValidateWrapper>
                </Col>
                <Col xs={6}>
                    <button type='submit' className='btn-4'>
                        Сформировать
                    </button>
                </Col>
            </Row>

        </form>
)
}

export default TournamentBracket