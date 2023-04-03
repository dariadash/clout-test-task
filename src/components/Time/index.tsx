import React, { FC } from "react";
import { ITime } from "./interface";
import read from '../../assets/icons/Read.svg';
import './time.scss'

export const Time: FC<ITime> = (props: ITime) => {
    const { time, my } = props
    return (
        <div className="time">
            {time}
            {my && <img src={read} />}
        </div>
    )
}