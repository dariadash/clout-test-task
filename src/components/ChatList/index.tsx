import React from "react";
import { setSelectedChat } from "../../model/chat/chatSlice";
import { fetchMessages } from "../../model/chat/thunk";
import { useAppDispatch, useAppSelector } from "../../model/hooks";
import { ChatItem } from "../ChatItem";
import './chatList.scss'

export const ChatList = () => {
    const chatsList = useAppSelector(state => state.chatReducer.chatsList)
    const dispatch = useAppDispatch()

    return (
        <div className="chat-list-wrapper">
            <div className="chat-list-header">
                All Chats
            </div>
            <div className="chat-list">
                {chatsList.map(item =>
                    <ChatItem
                        key={item.id}
                        id={item.id}
                        user={{
                            id: item.last_message.user_id,
                            name: item.last_message.user_name,
                            surname: item.last_message.user_surname,
                            avatar: item.avatar,
                            you: item.last_message.you,
                        }}
                        message={item.last_message.message}
                        created_at={item.last_message.created_at}
                        onClick={() => {
                            dispatch(fetchMessages(item.id))
                            dispatch(setSelectedChat(item.id))
                        }}
                    />
                )}
            </div>
        </div>
    )
}