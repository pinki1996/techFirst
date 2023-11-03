

function Services() {
    return (
        <section class="xl:py-[120px]">
            <div class="container">
                <div className="bg-[url('/images/services/bg.webp')]  ">
                    <h3 className="lg:text-2xl text-orange-900 font-bold md:tracking-widest">SERVICES</h3>
                    <h2 className="lg:text-2xl py-4 font-bold text-white">WHAT WE OFFER</h2>
                    <p className="p-4 text-white">The modern textile industry offers a broad range of career opportunities <br /> from raw materials processing to the
                        design of apparel and furnishings.</p>
                    <div class="flex justify-center mt-10 gap-7 ">
                        <div class="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
                            <div className="w-80">
                                <span class="icon mt-4">
                                    <img class="objec-contain h-64 w-full" src="images/services/services-3.jpg" alt="" />
                                </span>
                                <h3 class="h4 text-xl p-4 lg:text-2xl font-bold">Handwoven Home Furnishing</h3>
                                <p className="p-4">Recreate your house into the home you always dreamt of with artistic collection of cushions
                                    handwoven upholstery by different to provide the most amazing aesthetics for your home.
                                </p>
                                <button className="border p-4 bg-theme-dark text-white hover:border-black hover:text-black hover:bg-white">LEARN MORE</button>
                            </div>
                        </div>
                        <div class="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
                            <div className="w-80">
                                <span class="icon mt-4">
                                    <img class="objec-contain h-64 w-full" src="images/services/services-2.jpg" alt="" />
                                </span>
                                <h3 class="h4 text-xl p-4 lg:text-2xl font-bold">Rugs</h3>
                                <p className="p-4">Handmade rugs are constructed from wool, silk, cotton, goat hair or a combination of these fibers.
                                    In modern rugs, cotton is often the foundation of the rug.
                                </p>
                                <button className="border p-4 bg-theme-dark text-white hover:border-black hover:text-black hover:bg-white">LEARN MORE</button>
                            </div>
                        </div>
                        <div class="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
                            <div className="w-72 mt-4">
                                <span class="icon">
                                    <img class="objec-contain h-64 w-full " src="images/services/5.2.jpg" alt="" />
                                </span>
                                <h3 class="h4 text-xl p-4 lg:text-2xl font-bold">Handcrafted Décor</h3>
                                <p className="p-4">Home decor is inclusive of physical items and objects (furniture, art, and accessories),
                                    placement of physical items and objects, and room colors and materials
                                </p>
                                <button className="border p-4 bg-theme-dark text-white hover:border-black hover:text-black hover:bg-white ">LEARN MORE</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
export default Services;
