import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import { useContext, useState } from "react"
import { themeContext } from "../../Contexts/ThemeContext"

const AppLayout = () => {
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDark')))

   




    return (
        <themeContext.Provider value={[isDark, setIsDark]}>
            <Header />
            <Outlet context={[isDark, setIsDark]} />


        </themeContext.Provider>
    )
}
export default AppLayout