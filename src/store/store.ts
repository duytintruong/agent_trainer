import { configureStore } from '@reduxjs/toolkit';
import conversationReducer from './conversationSlice';

export const store = configureStore({
    reducer: {
        conversation: conversationReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['conversation/addAudioQueue'],
                // Ignore these field paths in all actions
                ignoredActionPaths: ['payload.blob'],
                // Ignore these paths in the state
                ignoredPaths: ['conversation.audioQueue'],
            },
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
