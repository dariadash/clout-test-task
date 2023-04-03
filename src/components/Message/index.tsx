import React, { FC } from "react";
import { toNormalTime } from "../../model/helpers";
import { Avatar } from "../Avatar";
import { Time } from "../Time";
import { IMessage } from "./interfase";
import './message.scss'

export const Message: FC<IMessage> = (props: IMessage) => {
    const { main, user, message, created_at } = props
    return (
        <div className={main ? "message-wrapper" : "message-wrapper-me "}>
            {main &&
                <Avatar
                    src={user.avatar}
                    size='sm'
                />
            }
            <div className="message-content">
                {main &&
                    <div className="user-name">
                        {user.name} {user.surname}
                    </div>
                }
                <div className={main ? "message" : "message-me"}>
                    <div className="message-text">
                        {message}
                    </div>
                    <div className="message-date-wrapper">
                        {main ?
                            <div className="message-date">
                                {toNormalTime(created_at)}
                            </div>
                            :
                            <Time
                                my={!main}
                                time={toNormalTime(created_at)}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}