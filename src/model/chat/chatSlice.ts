import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchChatsList, fetchMessages } from './thunk'

type ChatsState = {
    chatsList: any[],
    chatMessages: any[],
    selectedId: number,
    selectedChat: any[],
    error: null,
    loading: boolean,
}

const initialState: ChatsState = {
    chatsList: [],
    chatMessages: [],
    selectedId: 0,
    selectedChat: [],
    error: null,
    loading: false,
}

export const chatSlice = createSlice({
    name: 'chatSlice',
    initialState,
    reducers: {
        setSelectedChat: (state, action) => {
            state.selectedId = action.payload
        },
        getSelectedChat: (state, action) => {
            state.selectedChat = state.chatsList.filter(item => item.id === action.payload)
        }
    },
    extraReducers: {
        [fetchChatsList.fulfilled.type]: (state, action) => {
            state.loading = false
            state.error = null
            state.chatsList = action.payload
        },
        [fetchChatsList.pending.type]: (state) => {
            state.loading = true
        },
        [fetchChatsList.rejected.type]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [fetchMessages.fulfilled.type]: (state, action) => {
            state.loading = false
            state.error = null
            state.chatMessages = action.payload
        },
        [fetchMessages.pending.type]: (state) => {
            state.loading = true
        },
        [fetchMessages.rejected.type]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export const { setSelectedChat, getSelectedChat } = chatSlice.actions

export default chatSlice.reducer