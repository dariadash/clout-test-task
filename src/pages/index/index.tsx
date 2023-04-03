import React, { FC } from "react";
import { Chat } from "../../components/Chat";
import { ChatList } from "../../components/ChatList";
import { Header } from "../../components/Header";
import { IPage } from "../../interface/page";
import { getSelectedChat } from "../../model/chat/chatSlice";
import { fetchChatsList } from "../../model/chat/thunk";
import { useAppDispatch, useAppSelector } from "../../model/hooks";
import './pageIndex.scss'

export const PageIndex: FC<IPage> = (props: IPage) => {
    const { title } = props;

    const chatSelectedId = useAppSelector(state => state.chatReducer.selectedId)
    const chatSelected = useAppSelector(state => state.chatReducer.selectedChat)

    const dispatch = useAppDispatch()
    React.useEffect(() => {
        dispatch(fetchChatsList())
        dispatch(getSelectedChat(chatSelectedId))
    }, [chatSelectedId])


    return (
        <>
            <div className="plug">
                <h2>ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ</h2>
            </div>
            <div className="page-wrapper">
                <ChatList />
                <div className="chat-wrapper">
                    <Header label={chatSelected[0]?.title} />
                    <Chat />
                </div>
            </div>
        </>
    )
}