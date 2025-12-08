# Data Model

## Entities

### ConversationSession
- **id**: string (UUID)
- **startedAt**: DateTime
- **status**: 'connected' | 'disconnected'
- **socketId**: string

### StreamEvent
- **type**: 'audio_input' | 'audio_output' | 'transcription' | 'signal'
- **payload**: Buffer | string
- **timestamp**: number

## State Management (Redux)

### `conversation` slice
- **connectionStatus**: 'disconnected' | 'connecting' | 'connected' | 'error'
- **isUserSpeaking**: boolean
- **isModelSpeaking**: boolean
- **audioQueue**: Blob[] // Queue of audio chunks to play
- **lastError**: string | null
