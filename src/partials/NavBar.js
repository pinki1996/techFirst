import { useState } from "react";


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="flex flex-wrap px-32 p-6">
            <div className="flex gap-4">
                <p className=" text-yellow-400 text-left gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                </p>
                <p className="text-white gap-2">Pimpri Colony, PUNE 411018</p>
                <p  className="text-yellow-400 text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                </p>
                <p className="text-white">(+91) 9960922299</p>
            </div>
            <div className="flex items-center gap-8 flex-shrink-0 text-white mr-6 lg:mr-72">
                <img src="images/Logo-1.png" className="w-200 h-16 mr-2" alt="Logo" />
                <a href='/' className="tracking-widest hover:text-yellow-500">HOME</a>
                <a href="/about" className="tracking-widest hover:text-yellow-500">ABOUT</a>
                <a href="/infrastructure" className="tracking-widest hover:text-yellow-500">INFRASTRUCTURE</a>
                <a href="/sustainability" className="tracking-widest hover:text-yellow-500">SUSTAINABILITY</a>
                <a href="/product" className="tracking-widest hover:text-yellow-500">PRODUCT</a>
                <a className="tracking-widest hover:text-yellow-500">PEOPLE POLICY</a>
                <a className="tracking-widest hover:text-yellow-500">CONTACT</a>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                >
                    <svg
                        className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg
                        className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
            </div>
            <div
                className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
            >
                <div className="text-sm lg:flex-grow">
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                        First Link
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                        Second Link
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                        Third Link
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                        Fourth Link
                    </a>
                </div>

            </div>
        </nav>
    );
}
export default Navbar;