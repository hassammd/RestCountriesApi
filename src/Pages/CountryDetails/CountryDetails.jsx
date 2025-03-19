import { ArrowLeft } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { themeContext } from "../../Contexts/ThemeContext";
import NotFound from "../404/NotFound";

const CountryDetails = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const [isDark] = useContext(themeContext);
    const [countryData, setCountryData] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then((res) => res.json())
            .then(([data]) => {
                setCountryData({
                    name: data.name.common,
                    flags: data.flags.svg,
                    officialName: data.name.common,
                    population: data.population,
                    region: data.region,
                    subregion: data.subregion,
                    capital: data.capital,
                    currencies: data.currencies,
                    languages: data.languages,
                    borders: [],
                });

                data.borders?.map((border) => {
                    fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                        .then((res) => res.json())
                        .then(([data]) => {
                            setCountryData((prevState) => ({
                                ...prevState,
                                borders: [...prevState.borders, data.name.common],
                            }));
                        });
                });
            })
            .catch(() => setError(true));
    }, [name]);

    if (error || !countryData) {
        return <NotFound />;
    }

    return (
        <main className={`min-h-screen ${isDark ? "dark" : ""} py-6`}>
            {countryData.name ? (
                <div className="container w-full mx-auto px-4 md:px-10">
                    {/* Back Button */}
                    <div className="pt-4 pb-6">
                        <button
                            className="flex items-center gap-2 text-lg md:text-2xl p-3 shadow-md rounded-md w-fit"
                            onClick={() => navigate("/")}
                        >
                            <ArrowLeft /> Back
                        </button>
                    </div>

                    {/* Country Details Section */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                        {/* Country Flag */}
                        <div className="w-full max-w-lg">
                            <img
                                src={countryData.flags}
                                alt={countryData.name}
                                className="w-full h-auto object-cover rounded-lg shadow-md"
                            />
                        </div>

                        {/* Country Info */}
                        <div className="text-left">
                            <h1 className="text-2xl font-bold mb-4">{countryData.name}</h1>

                            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                                {/* Left Column */}
                                <div>
                                    <p><span className="font-semibold">Official Name:</span> {countryData.officialName}</p>
                                    <p><span className="font-semibold">Population:</span> {countryData.population}</p>
                                    <p><span className="font-semibold">Region:</span> {countryData.region}</p>
                                    <p><span className="font-semibold">Subregion:</span> {countryData.subregion}</p>
                                </div>

                                {/* Right Column */}
                                <div>
                                    <p>
                                        <span className="font-semibold">Currencies:</span>{" "}
                                        {countryData.currencies ? Object.values(countryData.currencies)
                                            .map((items) => `${items.name} (${items.symbol})`)
                                            .join(", ") : "N/A"}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Languages:</span>{" "}
                                        {countryData.languages ? Object.values(countryData.languages)
                                            .join(", ") : "N/A"}
                                    </p>
                                </div>
                            </div>

                            {/* Borders Section */}
                            <div className="mt-6 flex items-center gap-3 flex-wrap">
                                <span className="font-semibold">Borders:</span>
                                <div className="flex flex-wrap gap-2">
                                    {countryData.borders.length > 0 ? (
                                        countryData.borders.map((border) => (
                                            <Link
                                                key={border}
                                                className={`pt-1 pb-1 pl-3 pr-3 rounded-md ${isDark
                                                        ? "border border-gray-700 bg-gray-700"
                                                        : "border border-gray-300 bg-gray-50"
                                                    }`}
                                                to={`/${border}`}
                                            >
                                                {border}
                                            </Link>
                                        ))
                                    ) : (
                                        "N/A"
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="min-h-[calc(100vh_-_80px)] flex items-center justify-center">
                    <h2 className="text-5xl">Loading...</h2>
                </div>
            )}
        </main>
    );
};

export default CountryDetails;
