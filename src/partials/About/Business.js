

function Business() {
    return (
        <section class="xl:py-[120px] ">
            <div class="container ">
                <div class=" lg:mt-0 pl-64">
                    <div class="flex justify-center gap-16 items-center  lg:col-2 lg:order-2">
                        <div className="shadow-2xl bg-white text-left p-16 w-3/6">
                            <h2 className=" lg:text-2xl text-orange-200 font-bold md:tracking-widest">
                                ATTICA INTERIO</h2>
                            <h3 class="h4 text-xl p-2 lg:text-4xl font-bold">BUSINESS APPROACH</h3>
                            <p className="p-2">We intend to be a B2B supplier of home furnishing and décor accents to the Retailers, 
                                Architects in global market. We are present in various ecommerce platform with an intent to create
                                awareness of Attica Interio. To increase the usage of handloom and handicraft products, 
                            we curate a range of products suitable for corporate gifts and market as gifts through corporate houses.</p>
                        </div>
                        <div className="text-left text-gray-500 text-sm p-4" >
                            <span >
                                <img class="objec-contain h-auto w-1/2 " src="/images/About/yarn.jpg" />
                                <p className="  pl-16">Yarn Drying Process</p>
                                <img class="objec-contain h-auto pt-8" src="/images/About/handloom.jpg" />
                                <p className="pl-16">Handloom Sector</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start gap-32 pl-64">
                <div className="pt-8">
                    <h2 className="lg:text-4xl font-bold">50 +</h2>
                    <p className="text-gray-500">Happy Employees</p>
                </div>
                <div className="pt-8">
                    <h2 className="lg:text-4xl font-bold">150 +</h2>
                    <p className="text-gray-500">Satisfied Customers</p>
                </div>
                </div>
                

            </div>
        </section>
    );
}
export default Business;