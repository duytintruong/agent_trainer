import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ConversationState {
    connectionStatus: 'disconnected' | 'connecting' | 'connected' | 'error';
    isUserSpeaking: boolean;
    isModelSpeaking: boolean;
    audioQueue: Blob[]; // We might need to store non-serializable blobs temporarily or handle this outside redux proper
    lastError: string | null;
}

const initialState: ConversationState = {
    connectionStatus: 'disconnected',
    isUserSpeaking: false,
    isModelSpeaking: false,
    audioQueue: [],
    lastError: null,
};

export const conversationSlice = createSlice({
    name: 'conversation',
    initialState,
    reducers: {
        setConnectionStatus: (state, action: PayloadAction<ConversationState['connectionStatus']>) => {
            state.connectionStatus = action.payload;
        },
        setIsUserSpeaking: (state, action: PayloadAction<boolean>) => {
            state.isUserSpeaking = action.payload;
        },
        setIsModelSpeaking: (state, action: PayloadAction<boolean>) => {
            state.isModelSpeaking = action.payload;
        },
        addAudioChunk: (state, action: PayloadAction<Blob>) => {
            // Warning: Storing Blobs in Redux is generally discouraged due to serializability checks.
            // We disabled the check in store.ts middleware for this path.
            state.audioQueue.push(action.payload);
        },
        clearAudioQueue: (state) => {
            state.audioQueue = [];
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.lastError = action.payload;
            if (action.payload) {
                state.connectionStatus = 'error';
            }
        },
    },
});

export const {
    setConnectionStatus,
    setIsUserSpeaking,
    setIsModelSpeaking,
    addAudioChunk,
    clearAudioQueue,
    setError
} = conversationSlice.actions;

export default conversationSlice.reducer;
