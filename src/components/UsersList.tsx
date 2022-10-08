import React, {FC, useEffect, useState} from "react";
import style from "../App.module.css";
import {SearchUserType} from "../App";
import styles from "../App.module.css";
import axios from "axios";

type PropsType = {
    term: string
    selectedUser: SearchUserType | null
    onUserChosen: (user: SearchUserType) => void
}

type ResponseType = {
    items: SearchUserType[]
}

export const UsersList: FC<PropsType> = ({term, selectedUser, onUserChosen}) => {

    const [users, setUsers] = useState<SearchUserType[]>([])

    useEffect(() => {
        axios
            .get<ResponseType>(`https://api.github.com/search/users?q=${term}`)
            .then(response => {
                setUsers(response.data.items)
            })
    }, [term])

    return <div className={styles.block}>
        <h2>GitHub users list</h2>
        {users.map(u =>
            <div key={u.id}
                 onClick={() => {
                     onUserChosen(u)
                 }}
                 className={selectedUser === u ? style.selected : ""}>
                {u.login}
            </div>)}
    </div>
}

