import React from "react"
import { SvgIconProps } from '@mui/material/SvgIcon'
import HomeIcon from '@mui/icons-material/Home'
import StickyNote2Icon from '@mui/icons-material/StickyNote2'
import Home from "./pages/Home.tsx"
import Orga from "./pages/Orga.tsx"

export interface Page {
    id: string
    title: string;
    urlPath: string;
    icon: React.ElementType<SvgIconProps>
    element: React.ElementType
}

interface PagesMap {
    [key: string]: Page
}

export const pages: PagesMap = {
    home: {
        id: 'home',
        title: 'Home',
        urlPath: '/home',
        icon: HomeIcon,
        element: Home
    },
    orga: {
        id: 'orga',
        title: 'Orga',
        urlPath: '/orga',
        icon: StickyNote2Icon,
        element: Orga
    }
}
