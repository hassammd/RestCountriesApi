import { useNavigate } from "react-router-dom";

const CountriesCard = ({ name, flags, population, region, capital }) => {
    const navigate = useNavigate();

    return (
        <div
            className="cursor-pointer shadow-md hover:shadow-2xl rounded-lg overflow-hidden"
            onClick={() => navigate(`/${name}`)}
        >
            <figure className="w-full">
                <img
                    src={flags}
                    alt={name}
                    className="w-full h-53 object-cover rounded-t-md"
                />
            </figure>
            <div className=" flex flex-col text-left sm:p-2 md:p-6">
                <h2 className="font-bold text-xl">{name}</h2>
                <p><span className="font-bold">Population: </span>{population}</p>
                <p><span className="font-bold">Region: </span>{region}</p>
                <p><span className="font-bold">Capital: </span>{capital}</p>
            </div>
        </div>
    );
};

export default CountriesCard;
