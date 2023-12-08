import React from 'react'
import Drawer from '@mui/material/Drawer'
import { Link } from 'react-router-dom'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'

import { pages, Page } from "../Config.tsx"

interface SidebarItemProps {
    page: Page
    toggleSidebar: () => void
}

const SidebarItem: React.FC<SidebarItemProps> = ({ page, toggleSidebar }) => {
    return (
        <ListItemButton component={Link} to={page.urlPath} onClick={toggleSidebar}>
            <ListItemIcon>
                <page.icon />
            </ListItemIcon>
            <ListItemText primary={page.title} />
        </ListItemButton>
    )
}

interface SidebarProps {
    open: boolean;
    toggleSidebar: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ open, toggleSidebar }) => {
    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={toggleSidebar}
            sx={{
                '& .MuiDrawer-paper': {
                    backgroundColor: 'secondary.main',
                },
            }}
        >
            <Toolbar />
            <Divider />
            <List>
                {Object.entries(pages).map(([key, page]) => (
                    <SidebarItem key={key} toggleSidebar={toggleSidebar} page={page} />
                ))}
            </List>
        </Drawer>
    )
}

export default Sidebar
