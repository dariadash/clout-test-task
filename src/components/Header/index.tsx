import React, { FC } from "react";
import logo from '../../assets/icons/MessageLogo.svg'
import './header.scss'
import { IHeader } from "./interface";

export const Header: FC<IHeader> = (props: IHeader) => {
    const { label } = props
    return (
        <header>
            <img src={logo} />
            <label className='header-label'>{label ? label : 'Great Chat'}</label>
        </header>
    )
}