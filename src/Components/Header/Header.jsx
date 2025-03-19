import { Moon, Sun } from "lucide-react"
import { useContext, useState } from "react"
import { Link, useOutletContext } from "react-router-dom"
import { themeContext } from "../../Contexts/ThemeContext"



const Header = () => {

    const [isDark, setIsDark] = useContext(themeContext)


    if (isDark) {
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
    }


    return (
        <>

            <div className={`bg-white sticky top-0 shadow-lg header flex gap-4 justify-between pt-6 pb-6 pl-5 pr-6 ${isDark ? 'dark' : ''}`}>
                <div className="text-2xl">
                    <Link to={"/"}>LOGO</Link>
                </div>
                {/* <div className="flex gap-4 text-lg">

                    <Link to={"/"} className="text-red">Home</Link>
                    <Link to={"/aboutUs"}>About</Link>
                    <Link to={"/ContactUs"}>Contact</Link>
                </div> */}
                <div className="cursor-pointer" onClick={() => {

                    setIsDark(!isDark)
                    localStorage.setItem('isDark', !isDark)
                }}>
                    {
                        isDark ? <span className="text-xl flex gap-2 items-center">{<Sun />} Light</span> : <span className="text-xl flex gap-2 items-center">{<Moon />} Dark</span>
                    }



                </div>
            </div >

        </>
    )
}
export default Header