import { ReactElement, useState } from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import './App.css'
import Header from "./layout/Header.tsx"
import Sidebar from "./layout/Sidebar.tsx"
import { CustomThemeProvider } from "./layout/Theme.tsx"
import { pages } from "./Config.tsx"


export const Content = (): ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            {Object.entries(pages).map(([key, page]) => (
                <Route key={key} path={page.urlPath} element={<page.element />}></Route>
            ))}
        </Routes>
    )
}


function App() {
    const [sidebarOpen, setSidebarOpen] = useState(true)

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <CustomThemeProvider>
            <Router>
                <Header toggleSidebar={toggleSidebar}/>
                <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
                <Content />
            </Router>
        </CustomThemeProvider>
      )
}

export default App
