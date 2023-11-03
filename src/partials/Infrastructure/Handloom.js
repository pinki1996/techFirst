import React, { useState } from 'react'

const Handloom = () => {

    const [open, setOpen] = useState(false)
    const [ikkat, setIkkat] = useState(false)
    const [silk, setSilk] = useState(false)
    const [weavers, setWeavers] = useState(false)
    const [sambhal, setSambhal] = useState(false)

    const handleHandloom = () => {

        setOpen(!open)
    }

    const handleIkkat = () => {

        setIkkat(!ikkat)
    }

    const handleSilk = () => {
        setSilk(!silk)
    }
    const handleWeavers = () =>{
        setWeavers(!weavers)
    }
    const handleSambhal = () =>{
        setSambhal(!sambhal)
    }

    return (
        <section class="xl:py-[120px] ">
            <div class="container ">
                <div class=" lg:mt-0 px-32">
                    <h2 className=" lg:text-4xl md:tracking-wide font-bold">HANDLOOM CLUSTER CONNECT</h2>
                    <div class="text-left lg:col-2 lg:order-2">
                        <h2 className="p-4 italic lg:text-2xl md:tracking-wide ">Our connect with Handloom Clusters ranges in every corners of India.</h2>
                        <div className='flex gap-4 font-bold text-gray-500 border p-4'>
                            {
                                open ? (<a type="button" onClick={handleHandloom} className='font-bold '>-</a>)
                                    : <a type="button" onClick={handleHandloom} className='font-bold '>+</a>
                            }
                            <p>Kantha Stitch Weavers in Shanti Niketan</p>
                        </div>
                        {
                            open ? (
                                <div className='flex justify-between gap-4 border p-4'>
                                    <div className='w-2/3'>
                                        <p className='text-xl'>Kantha work involves complex artistic work done by the weavers with the blend of
                                            exquisite embroidery in ornamental running stitch. Originated from eastern part of India
                                            and championed by rural women. This craft provides livelihood to 8000 weavers in the
                                            country.</p>
                                        <span class="flex gap-4">
                                            <img class="objec-contain pt-2 h-auto w-1/2 " src="/images/Infrastructure/kanta-1.jpg" />
                                            <img class="objec-contain pt-2 h-auto w-1/2 " src="/images/Infrastructure/kanta-2.png" />

                                        </span>
                                    </div>
                                    <div class="video-thumbnail overflow-hidden">
                                        <div class="lg:col-7 lg:order-2">
                                            <div class="video pl-4 pb-5 pr-9">
                                                <div class="video-thumbnail overflow-hidden ">
                                                    <figure className="wp-block-vedio">
                                                        <video autoPlay loop muted className=" object-contain w-full h-auto" controls>
                                                            <source src="images/Infrastructure/kanta.mp4" type="video/mp4" />
                                                        </video>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        }



                        <div className='flex gap-4 font-bold text-gray-500 border p-4'>
                            {
                                ikkat ? (<a type="button" onClick={handleIkkat} className='font-bold '>-</a>)
                                    : (<a type="button" onClick={handleIkkat} className='font-bold '>+</a>)
                            }
                            <p>Ikkat Handloom Weavers in South India</p>
                        </div>

                        {
                            ikkat ? (
                                <div className='flex justify-between gap-4 border p-4'>
                                    <div className='w-2/4'>
                                        <p className='text-xl'>Ikat is a method of resist-dye technique, ultimately
                                            used to pattern textiles. A common method of resist-dyeing involves covering areas
                                            of fabric to shield specific parts from penetration of the dye. Then, bunches of
                                            several threads are grouped to be tied at once, creating knot units building an
                                            overall pattern. This handloom craft is a bread earner in hundreds of villages in
                                            southern part of India.
                                        </p>
                                        <span class="flex gap-4">
                                            <img class="objec-contain pt-2 h-auto w-1/4 " src="/images/Infrastructure/ikkat-1.jpg" />
                                            <img class="objec-contain pt-2 h-auto w-1/4 " src="/images/Infrastructure/ikkat-2.jpg" />
                                            <img class="objec-contain pt-2 h-auto w-1/4 " src="/images/Infrastructure/ikkat-3.png" />
                                        </span>
                                    </div>
                                    <div class="video-thumbnail overflow-hidden">
                                        <div class="lg:col-7 lg:order-2">
                                            <div class="video pl-4 pb-5 pr-9">
                                                <div class="video-thumbnail overflow-hidden ">
                                                    <figure className="wp-block-vedio">
                                                        <video autoPlay loop muted className=" object-contain w-full h-auto" controls>
                                                            <source src="images/Infrastructure/ikkat.mp4" type="video/mp4" />
                                                        </video>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        }





                        <div className='flex gap-4 font-bold text-gray-500 border p-4'>
                            {
                                silk ? (<a type="button" onClick={handleSilk} className='font-bold '>-</a>)
                                    : (<a type="button" onClick={handleSilk} className='font-bold '>+</a>)
                            }
                            <p>Mulberry Silk weavers in Bhagalpur</p>
                        </div>

                        {
                            silk ? (
                                <div className='flex justify-between gap-4 border p-4'>
                                    <div className='w-2/4'>
                                        <p className='text-xl'></p>
                                    </div>

                                </div>
                            ) : null
                        }




                        <div className='flex gap-4 font-bold text-gray-500 border p-4'>
                            {
                                sambhal ? (<a type="button" onClick={handleSambhal} className='font-bold '>-</a>)
                                    : (<a type="button" onClick={handleSambhal} className='font-bold '>+</a>)
                            }
                            <p>Sambalpuri Handloom weavers in Odisha</p>
                        </div>

                        {
                            sambhal ? (
                                <div className='flex justify-between gap-4 border p-4'>
                                    <div className='w-2/4'>
                                        <p className='text-xl'></p>
                                    </div>

                                </div>
                            ) : null
                        }


                        <div className='flex gap-4 font-bold text-gray-500 border p-4'>
                            {
                                weavers ? (<a type="button" onClick={handleWeavers} className='font-bold '>-</a>)
                                    : (<a type="button" onClick={handleWeavers} className='font-bold '>+</a>)
                            }
                            <p>Handloom Weavers in Cuttack (Nua-Patna)</p>
                        </div>

                        {
                            weavers ? (
                                <div className='flex justify-between gap-4 border p-4'>
                                    <div className='w-2/4'>
                                        <p className='text-xl'></p>
                                    </div>

                                </div>
                            ) : null
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Handloom