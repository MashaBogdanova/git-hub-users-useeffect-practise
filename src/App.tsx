import React, {FC, useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {Header} from "./components/Header";
import {UsersList} from "./components/UsersList";
import {UserDetails} from "./components/UserDetails";
import {Col, Row} from "antd";

export type SearchUserType = {
    login: string
    id: number
}

// Поиск по нажатию кнопки

const App: FC = () => {

    const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
    const [searchTerm, setSearchTerm] = useState<string>("lollipop")


    useEffect(() => {
        if (selectedUser) {
            document.title = selectedUser.login
        }
    }, [selectedUser])

    return <div>
        <Row justify={"center"}>
            <Col span={10}>
                <Header onSubmit={setSearchTerm} />
            </Col>
        </Row>
        <Row>
            <Col offset={1} span={4}>
                <UsersList term={searchTerm} selectedUser={selectedUser} onUserChosen={setSelectedUser}/>
            </Col>
            <Col offset={4} span={15}>
                <UserDetails selectedUser={selectedUser}/>
            </Col>
        </Row>
    </div>

}

export default App;


// поиск посимвольно

//
// export type SearchUserType = {
//     login: string
//     id: number
// }
//
// export type UserType = {
//     login: string
//     id: number
//     name: string
//     avatar_url: string
//     followers: number
// }

// const App: FC = () => {
//
//     const [users, setUsers] = useState<SearchUserType[]>([])
//     const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
//
//
//     useEffect(() => {
//         if (selectedUser) {
//             document.title = selectedUser.login
//         }
//     }, [selectedUser]) // title changing
//
//     // перенести [users, setUsers] в UsersList ?
//     // const onSearch = (usersList) = setUsers(usersList); type --> (value: string) => void
//     // const onSearch = (usersList) = {
//     // return usersList;
//     // }
//     // <Header onSearch={onSearch}/>
//     // в Header:  .then(response => {onSearch(response.data.items)})
//     // в UsersList:
//     // Зачем создавать callback функцию onSearch, если можно передать setUsers?
//
//     return <div>
//         <Row justify={"center"}>
//             <Col span={7}>
//                 <Header setUsers={setUsers}/>
//             </Col>
//         </Row>
//         <Row>
//             <Col offset={1} span={4}>
//                 <UsersList users={users} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
//             </Col>
//             <Col offset={4} span={15}>
//                 <UserDetails selectedUser={selectedUser}/>
//             </Col>
//         </Row>
//     </div>
// }
//
// export default App;
