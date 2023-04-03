import React, { FC } from "react";
import { Avatar } from "../Avatar";
import { IChatItem } from "./interface";
import './chatItem.scss'
import { toNormalTime } from "../../model/helpers";

export const ChatItem: FC<IChatItem> = (props: IChatItem) => {
    const { onClick, user, created_at, message } = props
    return (
        <div className="chat-item" onClick={onClick}>
            <Avatar
                src={user.avatar}
                size='md'
            />
            <div className="chat-item-content">
                <div className="chat-item-header">
                    <div className="user-name">
                        {user.name} {user.surname}
                    </div>
                    <div className="chat-item-date">
                        {toNormalTime(created_at)}
                    </div>
                </div>
                <div className="last-message">
                    {message}
                </div>
            </div>
        </div>
    )
}