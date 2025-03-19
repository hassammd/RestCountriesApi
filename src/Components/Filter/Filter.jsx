import { useContext } from "react"
import { themeContext } from "../../Contexts/ThemeContext"

const Filter = ({ setSearchedCountry }) => {

    const [isDark] = useContext(themeContext)
    return (

        <>

            <div className="relative">

                <select className={` appearance-none border border-black-600 p-2 pr-8  rounded-md focus:outline-none ${isDark ? ` bg-gray-600 text-white  pl-4 rounded-md border border-gray-600` : ''}`} name="" id="" onChange={(e) => setSearchedCountry(e.target.value)} >
                    <option hidden>Filter by Region</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
                <div className="absolute top-3 right-2">
                    <svg className={`lucide lucide-chevron-down  h-4 w-4 ${isDark ? `text-amber-50` : ``}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </div>
            </div>



        </>
    )
}

export default Filter