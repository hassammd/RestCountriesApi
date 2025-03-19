import { useContext, useEffect, useState } from "react";
import CountriesCard from "../../Components/ProductsCard/CountriesCard";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Filter from "../../Components/Filter/Filter";
import { themeContext } from "../../Contexts/ThemeContext";
import Shimmer from "../../Components/Shimmer/Shimmer";

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [searchCountry, setSearchedCountry] = useState("");
    const [isDark] = useContext(themeContext);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);

    // Search filter
    const searchHandler = countries.filter((items) => {
        return (
            items.name.common.toLowerCase().includes(searchCountry.toLowerCase()) ||
            items.region.toLowerCase().includes(searchCountry.toLowerCase())
        );
    });

    return (

        <main className={`${isDark ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen p-4`}>

            {/* Search and Filter section */}
            <div className="container w-full mx-auto pt-10 pb-10 flex flex-col md:flex-row justify-between items-center gap-4">
                <SearchBar setSearchedCountry={setSearchedCountry} />
                <Filter setSearchedCountry={setSearchedCountry} />
            </div>

            {/* Countries Grid */}
            {countries.length > 0 ? (
                <div className="container w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {(searchHandler.length ? searchHandler : countries).map((items) => (
                        <CountriesCard
                            key={items.name.common}
                            name={items.name.common}
                            flags={items.flags.svg}
                            population={items.population}
                            region={items.region}
                            capital={items.capital}
                        />
                    ))}
                </div>
            ) : (
                <div className="container w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Shimmer />
                </div>
            )}
        </main>
    );
};

export default Home;
