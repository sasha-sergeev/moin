import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { fetchWeatherData } from "../api/OpenWeather/OpenWeather.tsx"
import { CurrentWeatherData } from "../api/OpenWeather/Model.tsx"

function kelvinToCelsiusString(kelvin: number): string {
    return Math.round(kelvin - 273.15) + "°C"
}

function titleCase(str: string) {
    const splitStr = str.toLowerCase().split(' ')
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
    }
    return splitStr.join(' ')
}

const WeatherWidget = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [weatherData, setWeatherData] = useState<CurrentWeatherData | null>(null)

    useEffect(() => {
        const getWeatherData = async (position: GeolocationPosition) => {
            try {
                const currentWeatherData = await fetchWeatherData(position)
                setWeatherData(currentWeatherData)
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message)
                } else {
                    setError("Unknown error fetching weather data")
                }
            } finally {
                setLoading(false)
            }
        }

        navigator.geolocation.getCurrentPosition(getWeatherData)
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Box display="flex" alignItems="center">
                    {weatherData ? (
                        <>
                            <Box component="img"
                                 src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                                 alt={weatherData.weather[0].main}
                                 sx={{ width: 48, height: 48 }} />
                            <Box ml={2}>
                                <Typography variant="h4" component="div">
                                    {weatherData.name}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {kelvinToCelsiusString(weatherData.main.temp)}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {titleCase(weatherData.weather[0].description)}
                                </Typography>
                            </Box>
                        </>
                    ) : (
                        <Typography>
                            Could not fetch weather data :(
                        </Typography>
                    )}
                </Box>
            </CardContent>
        </Card>
    )
}

export default WeatherWidget
