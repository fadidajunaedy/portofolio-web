import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex justify-center items-center flex-col md:flex-row bg-base-100 max-w-lg mx-auto py-6">
            <div className="flex-1">
                <NavLink to="/" className="btn btn-ghost normal-case text-xl">fadidajunaedy</NavLink>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/about">about</NavLink></li>
                    <li><NavLink to="/project">project</NavLink></li>
                    <li>
                        <div className="tooltip tooltip-bottom" data-tip="coming soon">
                            <a disabled>blog</a>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;