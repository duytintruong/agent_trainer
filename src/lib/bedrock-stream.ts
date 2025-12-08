import { BedrockRuntimeClient } from "@aws-sdk/client-bedrock-runtime";

export interface BedrockStreamConfig {
    region: string;
    credentials?: {
        accessKeyId: string;
        secretAccessKey: string;
    };
    modelId: string;
}

export interface StreamCallbacks {
    onAudioOutput: (audioData: Uint8Array) => void;
    onTranscript?: (text: string, source: 'user' | 'model') => void; // Optional per spec FR-009 (not displayed but might flow through)
    onError: (error: Error) => void;
    onEnd: () => void;
}

export class BedrockStreamClient {
    private client: BedrockRuntimeClient;
    private config: BedrockStreamConfig;

    constructor(config: BedrockStreamConfig) {
        this.config = config;
        this.client = new BedrockRuntimeClient({
            region: config.region,
            credentials: config.credentials,
        });
    }

    async startStream(callbacks: StreamCallbacks): Promise<void> {
        // Phase 3 implementation
        throw new Error("Not implemented yet");
    }

    sendAudioChunk(chunk: Uint8Array): void {
        // Phase 3 implementation
        console.log("Sending chunk size:", chunk.length);
    }

    endStream(): void {
        // Phase 3 implementation
    }
}
