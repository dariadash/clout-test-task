import { IUserMessage } from "../../interface/userMessage";

export interface IMessage extends IUserMessage {
    main: boolean,
    isNew?: boolean,
}