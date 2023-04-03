import { createAsyncThunk } from '@reduxjs/toolkit'
import { getChatList, getMessages } from '../../api/chat'

export const fetchChatsList = createAsyncThunk(
    'fetchChatsList',
    async (_, thunkAPI) => {
        try {
            const data = await getChatList()
            return data.response
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка загрузки')
        }
    }
)

export const fetchMessages = createAsyncThunk(
    'fetchMessages',
    async (chatId: string, thunkAPI) => {
        try {
            const data = await getMessages(chatId)
            return data.response
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка загрузки')
        }
    }
)