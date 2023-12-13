import React, { useState } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import Button from '@mui/material/Button'

import WeatherWidget from "../components/WeatherWidget.tsx"

const ResponsiveGridLayout = WidthProvider(Responsive)

interface Widget {
    i: string
    x: number
    y: number
    w: number
    h: number
}

const Home: React.FC = () => {
    const [widgets, setWidgets] = useState<Widget[]>([])
    const addWidget = () => {
        const newWidget: Widget = {
            i: `widget-${widgets.length}`,
            x: (widgets.length * 2) % (12 / 2),
            y: Infinity,
            w: 2,
            h: 2,
        };
        setWidgets([...widgets, newWidget]);
    };

    return (
        <div>
            <Button variant="contained" onClick={addWidget}>
                Add Weather Widget
            </Button>
            <ResponsiveGridLayout
                className="layout"
                layouts={{ lg: widgets }}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                rowHeight={100}
            >
                {widgets.map((widget) => (
                    <div key={widget.i} data-grid={{ x: widget.x, y: widget.y, w: widget.w, h: widget.h }}>
                        <WeatherWidget />
                    </div>
                ))}
            </ResponsiveGridLayout>
        </div>
    )
}

export default Home
