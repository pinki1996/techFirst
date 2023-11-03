
import React from 'react'

const Rugs = () => {
    return (
        <section class="xl:py-[120px] ">
            <div class="container ">
                <div class=" lg:mt-0 ">
                    <h2 className=" lg:text-4xl  font-bold">RUGS WEAVERS PARTNERS</h2>
                    <div class="flex justify-center gap-8 lg:col-2 lg:order-2">
                        <div className=" bg-white text-left w-1/4">
                            <p className="pt-8 text-gray-500">Exquisite Indian Handmade Carpets depicts a rich way of life
                                in present-day time. Also it reflects an ageless blend of nature, culture, and craftsmanship
                                from the world over. We have our partners of weaver clusters for Rugs n Carpets in Bhadohi,
                                Panipat, Agra. These partners work with us closely and we together build up the capability
                                to provide thousands of pieces in the shortest time span with finest quality.
                            </p>
                        </div>
                        <div class="video-thumbnail overflow-hidden">
                            <div class="lg:col-7 lg:order-2">
                                <div class="video p-4 pb-5 pr-9">
                                    <div class="video-thumbnail overflow-hidden ">
                                        <figure className="wp-block-vedio">
                                            <video autoPlay loop muted className=" object-contain w-full h-auto" controls>
                                                <source src="images/Infrastructure/rugs.mp4" type="video/mp4" />
                                            </video>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Rugs