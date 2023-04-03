import { IUserMessage } from "../../interface/userMessage";

export interface IChatItem extends IUserMessage {
    onClick: () => void,
}