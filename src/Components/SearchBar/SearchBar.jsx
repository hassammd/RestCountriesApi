import { useOutletContext } from "react-router-dom";

const SearchBar = ({ setSearchedCountry }) => {
    const [isDark] = useOutletContext();

    return (
        <input
            type="text"
            className={`w-full sm:w-96 border border-gray-600 rounded-md focus:outline-none shadow-md h-10 p-3 placeholder-gray-400 dark:placeholder-gray-50`}
            placeholder="Search..."
            onChange={(e) => setSearchedCountry(e.target.value)}
        />
    );
};

export default SearchBar;
