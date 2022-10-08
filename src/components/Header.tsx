import React, {FC, useState} from "react";
import styles from "../App.module.css";
// import Search from "antd/es/input/Search";
// import {SearchUserType} from "../App";
// import axios from "axios";
import {Button, Col, Input, Row} from "antd";


type PropsType = {
    onSubmit: (term: string) => void
}

export const Header: FC<PropsType> = ({onSubmit}) => {

    const [tempSearch, setTempSearch] = useState<string>("")


    return <Row justify={"center"} className={styles.block}>
        <Col span={10}>
            <Input placeholder="Who are you searching for..."
                   value={tempSearch}
                   onChange={(e) => setTempSearch(e.currentTarget.value)}
                   allowClear/>
        </Col>
        <Col offset={1} span={3}>
            <Button type="primary"
                    onClick={() => onSubmit(tempSearch)}>
                Search
            </Button>
        </Col>
    </Row>
}




// type PropsType = {
//     setUsers: (users: SearchUserType[]) => void
// }
// type ResponseType = {
//     items: SearchUserType[]
// }


// export const Header: FC<PropsType> = ({setUsers}) => {
//
//     const [tempSearch, setTempSearch] = useState<string>("")

// useEffect(() => {
//     axios
//         .get<ResponseType>(`https://api.github.com/search/users?q=${tempSearch}`)
//         .then(response => {
//             debugger
//             setUsers(response.data.items)
//         })
// }, [tempSearch])  // getting users and setting users

// return <div className={styles.block}>
//     <Search
//             placeholder="Who are you searching for..."
//             value={tempSearch}
//             onChange={(e) => setTempSearch(e.currentTarget.value)}
//             allowClear
//             enterButton="Search"
//             size="large"
//         />
//     </div>
// }



