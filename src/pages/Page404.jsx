import { NavLink } from "react-router-dom";

const Page404 = () => {
    return (
        <div className="flex justify-center items-center h-96 container max-w-lg mx-auto">
            <div className="text-center">
                <h1 className="text-4xl font-medium">404</h1>
                <p className="text-xl font-medium m-6">sorry, the page you're looking for can't be found.</p>
                <NavLink to="/" className="btn btn-primary py-2 px-4">Go Home</NavLink>
            </div>
        </div>
    )
}
export default Page404;