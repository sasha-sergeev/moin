import { create } from 'zustand'

interface YouTubeState {
    videos: never[]
    loading: boolean
    error: string | null
}

const useYouTubeStore = create<YouTubeState>(() => ({
    videos: [],
    loading: false,
    error: null,
}))

export default useYouTubeStore
