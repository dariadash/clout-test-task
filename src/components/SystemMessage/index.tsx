import React, { FC } from "react";
import { toNormalDate } from "../../model/helpers";
import { ISystemMessage } from "./interface";
import './systemMessage.scss'

export const SystemMessage: FC<ISystemMessage> = (props: ISystemMessage) => {
    const { isNew, time } = props
    return (
        <div className={isNew ? 'new-messages' : 'system-message'}>
            {isNew ? "Новые сообщения" :
                <div className="current-date">
                    {time && toNormalDate(time)}
                </div>
            }
        </div>
    )
}