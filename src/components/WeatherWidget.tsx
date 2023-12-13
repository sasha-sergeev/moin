import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import WbSunnyIcon from '@mui/icons-material/WbSunny'

const WeatherWidget = () => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Box display="flex" alignItems="center">
                    <Box fontSize={48} color="info.main">
                        <WbSunnyIcon />
                    </Box>
                    <Box ml={2}>
                        <Typography variant="h5" component="div">
                            25°C
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Sunny
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default WeatherWidget
