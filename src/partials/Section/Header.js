import Navbar from "../NavBar";



function Header() {
    return (
        <section class="section services ">
            <div class="container">
                <div className="bg-[url('/images/banner.jpg')]  ">
                    <Navbar/>
                    <h1 className="lg:text-6xl text-yellow-400 tracking-widest font-bold md:tracking-widest">ATTICA INTERIO</h1>
                    <h2 className="lg:text-6xl py-4 tracking-widest text-white">TRUE TO HERITAGE</h2>
                    <button className="text-white  p-4 hover:text-black hover:bg-white">VIEW PRODUCTS</button>
                    <div class="flex justify-center mt-10 gap-7 ">
                        <div class="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
                            <div className="w-80">
                                <span class="flex justify-center items-center">
                                    <img class="objec-contain h-auto rounded-full w-1/2 " src="images/clock.png" alt="" />
                                </span>
                                <h3 class="h4 text-xl p-4 lg:text-2xl font-bold">True to Heritage</h3>
                                <p className="p-4">Our defense is in the preservation of the spirit which prizes
                                    liberty as a heritage of all men, in all lands, everywhere.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
                            <div className="w-80">
                                <span class="flex justify-center items-center">
                                    <img class="objec-contain h-auto rounded-full w-1/2 " src="images/bulb.png" alt="" />
                                </span>
                                <h3 class="h4 text-xl p-4 lg:text-2xl font-bold">Smartly Execution</h3>
                                <p className="p-4">Being in execution and strategy for decades, we champion the methods of smart
                                    execution to ensure delivery to the delight of our customers.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
                            <div className="w-72 mt-4">
                                <span class="flex justify-center items-center">
                                    <img class="objec-contain h-auto rounded-full w-1/2 " src="images/clock.png" alt="" />
                                </span>
                                <h3 class="h4 text-xl p-4 lg:text-2xl font-bold">Patronage To Artisans</h3>
                                <p className="p-4">Our sincere engagement with weavers n artisan community truly brings out the best
                                    craft for our customer while giving sustainable living to the artisans.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;