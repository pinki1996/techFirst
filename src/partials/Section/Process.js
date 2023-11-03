
function Process() {
    return (
        <section class="section services xl:py-[120px]">
            <div class="container">
                <div class=" flex gap-16 p-16  justify-center row gx-5 mt-12 bg-gray-100 items-center lg:mt-0">
                    <div class="lg:col-7 lg:order-2">
                        <div class="video p-4 pb-5 pr-9">
                            <div class="video-thumbnail overflow-hidden ">
                                <figure className="wp-block-vedio">
                                    <video autoPlay loop muted className=" object-contain w-full h-96" controls>
                                        <source src="images/process.mp4"  type="video/mp4" />
                                    </video>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 lg:col-5 lg:order-1 lg:mt-0">
                        <div class="text-container text-left">
                            <h2 class="lg:text-2xl font-bold text-orange-900 ">
                            PROCESS</h2>
                            <h2 class="lg:text-3xl py-4 font-bold">
                            OUR PROCESS</h2>
                                
                            <button className="border p-4 bg-black text-white hover:border-black hover:text-black hover:bg-white">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Process;