import {Button} from "./button";
import { NavLink } from "react-router-dom";
import logoIcon from "../../assets/icon.webp";

const links = [
    { to: "/explore", label: "Course" },
    { to: "/about-us", label: "About Us" },
];

function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                <NavLink to="/" end className="flex items-center gap-3">
                    <img
                        src={logoIcon}
                        alt="EduStream Pro logo"
                        className="h-9 w-9 rounded-lg object-cover"
                    />
                    <span className="text-lg font-semibold tracking-tight text-slate-900">
                        EduStream Pro
                    </span>
                </NavLink>

                <div className="flex items-center gap-3 sm:gap-5">
                    <nav className="hidden items-center gap-2 text-sm font-medium text-slate-600 md:flex">
                        {links.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    [
                                        "px-4 py-2 transition-colors font-[600]",
                                        isActive
                                            ? " text-blue-600 underline underline-blue-500 underline-offset-4"
                                            : "text-slate-600 ",
                                    ].join(" ")
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                        <Button text="Login" link="/login" />
                </div>
            </div>
        </header>
    );
}

export default Navbar;