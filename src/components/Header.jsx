import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

const Header = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "black"
    );

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("lofi");
        } else {
            setTheme("black");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

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
                    <li>
                        <label className="swap swap-rotate py-0 h-full">
                            <input
                                type="checkbox"
                                onChange={handleToggle}
                                checked={theme === "black" ? false : true}
                            />
                            <BsFillMoonFill size={16} className="swap-on" />
                            <BsSunFill size={16} className="swap-off" />
                        </label>
                    </li>
                </ul>

            </div>
        </header>
    )
}

export default Header;