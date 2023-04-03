import { wrapper } from "../../utils/wrapper";
import { URLS } from "../../constants/urls";

export const getChatList = () => {
    return wrapper("get", URLS.LIST, {}, {
        offset: 0,
        limit: 20
    })
}

export const getMessages = (chat_id: string) => {
    return wrapper("get", URLS.MESSAGES, {}, {
        chat_id: chat_id,
        offset: 0,
        limit: 20
    })
}