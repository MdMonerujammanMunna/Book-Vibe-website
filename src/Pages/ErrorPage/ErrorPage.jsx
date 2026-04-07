import React from "react";
import { Links } from "react-router";
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 max-w-md w-full text-center border border-white/20">

                <h1 className="text-8xl font-extrabold text-white drop-shadow-lg">
                    404
                </h1>

                <h2 className="text-2xl font-semibold text-white mt-2">
                    Page Not Found
                </h2>

                <p className="text-gray-200 mt-4">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>

                <div className="mt-8 flex justify-center gap-4">
                    <Link
                        to="/"
                        className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300"
                    >
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition duration-300"
                    >
                        Go Back
                    </button>
                </div>

                <div className="mt-6">
                    <span className="inline-block px-3 py-1 text-sm bg-white/20 text-white rounded-full animate-pulse">
                        Something went wrong
                    </span>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;