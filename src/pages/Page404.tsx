import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export function ErrorBoundary() {
    return (
        <div className="bg-blue-600 border-blue-300 py-1 px-2 rounded hover:bg-blue-800 cursor-pointer">
            <Link to={"/"} >
                <p className="text-sm font-medium text-white">Go to Home</p>
            </Link>
        </div>
    )
}