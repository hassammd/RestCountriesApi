import { useContext } from "react"
import { themeContext } from "../../Contexts/ThemeContext"





const ShimmerEffect = Array.from({ length: "10" }).map((items, index) => {




    return (
        <>
            <div key={index} className="cursor-pointer shadow-md hover:shadow-2xl bg-gray-100">
                <div className="h-52 w-full bg-gray-200 p-3 mb-4">

                </div>
                <div className="p-4 flex flex-col items-start">
                    <h2 className="font-bold text-xl"></h2>
                    <p className="w-full bg-gray-200 p-2 mb-3"><span> </span></p>
                    <p className="w-full bg-gray-200 p-2 mb-3"><span className="font-bold"> </span></p>
                    <p className="w-60 bg-gray-200 p-2 mb-3"><span className="font-bold"> </span></p>
                    <p className="w-60 bg-gray-200 p-2 mb-3"><span className="font-bold"> </span></p>


                </div>
            </div>

        </>
    )

})


const Shimmer = () => {


    return (
        <>

            {ShimmerEffect}
        </>
    )
}
export default Shimmer