export interface AudioStreamConfig {
    sampleRate: number;
    channelCount: number; // usually 1 for speech
}

export class AudioStreamManager {
    private mediaStream: MediaStream | null = null;
    private mediaRecorder: MediaRecorder | null = null;
    private audioContext: AudioContext | null = null;

    constructor(private config: AudioStreamConfig = { sampleRate: 16000, channelCount: 1 }) { }

    async requestMicrophone(): Promise<void> {
        // Phase 3 implementation
        throw new Error("Not implemented");
    }

    startRecording(onDataAvailable: (data: Blob) => void): void {
        // Phase 3 implementation
    }

    stopRecording(): void {
        // Phase 3 implementation
    }

    playAudio(blob: Blob): Promise<void> {
        // Phase 3 implementation
        return Promise.resolve();
    }
}
