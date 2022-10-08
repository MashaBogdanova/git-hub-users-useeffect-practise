import React, {FC, useEffect, useState} from "react";
import {Progress} from "antd";
import {SearchUserType} from "../App";

type PropsType = {
    selectedUser: SearchUserType | null
    onTimeOut: () => void
}

export const Timer: FC<PropsType> = ({selectedUser, onTimeOut}) => {
    const [percents, setPercents] = useState<number>(0);

    useEffect(() => {
        setPercents(0);
        let intervalId = setInterval(() => {
            setPercents(actualValue => actualValue + 1)
        }, 1000);
        return (() => {
            clearInterval(intervalId)
        });
    }, [selectedUser]);

    useEffect(() => {
        if(percents > 99) {
            onTimeOut()
        }
    }, [percents])

    return <div>
                <h2>Watching time</h2>
                <Progress
                    type="circle"
                    strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    }}
                    percent={percents}
                />
            </div>
        }
