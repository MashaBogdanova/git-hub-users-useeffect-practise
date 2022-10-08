import React, {FC, useEffect, useState} from "react";
import styles from "../App.module.css";
import {SearchUserType} from "../App";
import axios from "axios";
import {Col, Row} from "antd";
import {Timer} from "./Timer";

type PropsType = {
    selectedUser: SearchUserType | null
}
export type UserType = {
    login: string
    id: number
    name: string
    avatar_url: string
    followers: number
}

export const UserDetails: FC<PropsType> = ({selectedUser}) => {

    const [userDetails, setUserDetails] = useState<null | UserType>(null)

    useEffect(() => {
        if (!!selectedUser) {
            axios
                .get<UserType>(`https://api.github.com/users/${selectedUser.login}`)
                .then(response => {
                    setUserDetails(response.data)
                })
        }
    }, [selectedUser])

    return <div className={styles.block}>
        <h2>Choose user</h2>
        {userDetails &&
        <Row>
            <Col span={10}>
            <h1>{userDetails.login}</h1>
            <div>
                <img src={userDetails.avatar_url}/>
                <div>name: {userDetails.name}</div>
                <div>followers: {userDetails.followers}</div>
            </div>
            </Col>
            <Col offset={4} span={5}>
                <Timer selectedUser={selectedUser} onTimeOut={() => setUserDetails(null)}/>
            </Col>
        </Row>
        }
    </div>
}

