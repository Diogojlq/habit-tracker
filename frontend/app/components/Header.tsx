import Logo from "./Logo";

export default function Header() {
    return (
        <header className="bg-customColor3" >
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
            <a className="block text-teal-600" href="#">
            <span className="sr-only">Home</span>
            <Logo />
            </a>
            <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                <li>
                    <a className="text-customColor1 transition hover:text-gray-500/75" href="#"> About </a>
                </li>

                <li>
                    <a className="text-customColor1 transition hover:text-gray-500/75" href="#"> Careers </a>
                </li>

                <li>
                    <a className="text-customColor1 transition hover:text-gray-500/75" href="#"> History </a>
                </li>

                <li>
                    <a className="text-customColor1 transition hover:text-gray-500/75" href="#"> Services </a>
                </li>

                <li>
                    <a className="text-customColor1 transition hover:text-gray-500/75" href="#"> Projects </a>
                </li>

                <li>
                    <a className="text-customColor1 transition hover:text-gray-500/75" href="#"> Blog </a>
                </li>
                </ul>
            </nav>

            <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                <a
                    className="block rounded-md bg-customColor1 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                    href="/login"
                >
                    Login
                </a>

                <a
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                    href="/register"
                >
                    Register
                </a>
                </div>

                <button
                className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                >
                <span className="sr-only">Toggle menu</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>
            </div>
            </div>
        </div>
        </header>
    );
}