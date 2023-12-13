import { CurrentWeatherData } from "./Model.tsx"

export async function fetchWeatherData(position: GeolocationPosition): Promise<CurrentWeatherData> {
    const url = `https://api.openweathermap.org/data/2.5/weather?` +
        `lat=${position.coords.latitude}&` +
        `lon=${position.coords.longitude}&` +
        `appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`

    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`Error fetching weather data, status: ${response.status}`)
    }
    return await response.json() as CurrentWeatherData
}
