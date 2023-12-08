// TODO: swap .env.development for env var script
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY as string

const API_URL = "https://www.googleapis.com/youtube/v3"
const AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth"

export const getSubscriptions = async () => {}
