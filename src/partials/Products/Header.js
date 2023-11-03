import Navbar from "../NavBar";


function Header() {
    return (
        <section class="section services ">
            <div class="container">
                <div className="bg-[url('/images/ProductImage/bg.webp')]  ">
                    <Navbar />
                    <div className="flex justify-between px-32 p-8">
                        <h1 className="lg:text-4xl text-white tracking-widest font-bold md:tracking-widest">PRODUCT RANGES</h1>
                        <p className="text-white flex flex-row-reverse">Product Ranges
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-orange-500 w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                            Home
                            </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;