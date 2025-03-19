import { useContext } from "react";
import { Link } from "react-router-dom";
import { themeContext } from "../../Contexts/ThemeContext";


const NotFound = () => {
    const [isDark] = useContext(themeContext)
    return (
        <div className={`flex items-center justify-center min-h-[calc(100vh_-_80px)] bg-gray-100 ${isDark ? 'bg-gray-600' : ''}`}>
            <div className="text-center">
                <h1 className={`text-6xl font-bold text-gray-800 ${isDark ? 'text-white' : ''}`}>404</h1>
                <p className={`text-xl text-gray-600 mt-4 ${isDark ? 'text-white' : ''}`}>Oops! The page you are looking for does not exist.</p>
                <Link
                    className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
                    to="/"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
