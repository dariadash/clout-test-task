import React from "react";
import { useAppSelector } from "../../model/hooks";
import { Input } from "../Input";
import { Message } from "../Message";
import { SystemMessage } from "../SystemMessage";
import './chat.scss'


export const Chat = () => {
    const chatMessages = useAppSelector(state => state.chatReducer.chatMessages)
    const chatSelected = useAppSelector(state => state.chatReducer.selectedChat)

    const newMessages: any[] = Object.values(chatMessages.reduce((acc, message) => {
        acc[message.is_new] = acc[message.is_new] ?? [];
        acc[message.is_new].push(message);
        return acc;
    }, {}));

    const renderNewMessages = React.useMemo(() => {
        if (newMessages.length > 1) {
            return (
                <>
                    {newMessages[0]?.map((item: any) =>
                        <Message
                            key={item.id}
                            id={item.id}
                            created_at={item.created_at}
                            message={item.message}
                            user={{
                                id: item.user.id,
                                name: item.user.name,
                                surname: item.user.surname,
                                avatar: item.user.avatar,
                                you: false
                            }}
                            main={!item.user.you}
                            isNew={item.is_new}
                        />
                    )}
                    <SystemMessage isNew />
                    {newMessages[1]?.map((item: any) =>
                        <Message
                            key={item.id}
                            id={item.id}
                            created_at={item.created_at}
                            message={item.message}
                            user={{
                                id: item.user.id,
                                name: item.user.name,
                                surname: item.user.surname,
                                avatar: item.user.avatar,
                                you: false
                            }}
                            main={!item.user.you}
                            isNew={item.is_new}
                        />
                    )}

                    <SystemMessage time={chatSelected[0].created_at * 1000} />
                </>
            )
        }
        return (
            <>
                {chatMessages?.map((item: any) =>
                    <Message
                        key={item.id}
                        id={item.id}
                        created_at={item.created_at}
                        message={item.message}
                        user={{
                            id: item.user.id,
                            name: item.user.name,
                            surname: item.user.surname,
                            avatar: item.user.avatar,
                            you: false
                        }}
                        main={!item.user.you}
                        isNew={item.is_new}
                    />
                )}
                {chatSelected[0]?.created_at && <SystemMessage time={chatSelected[0]?.created_at * 1000} />}
            </>
        )
    }, [chatMessages, newMessages])

    return <div className="chat-wrapper">
        <div className="chat">
            {renderNewMessages}
        </div>
        <div className="chat-input">
            <Input />
        </div>
    </div>
}