import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Main = () => {
    return (


        <section class="section services xl:py-[120px]">
            <div class="container">
                <h2 class="lg:text-4xl font-bold  ">OUR PRODUCTS</h2>
                <p className='text-gray-500 py-8'>We provide wide range of products and customized artifacts.</p>
                <div className='flex justify-start gap-8 font-bold  p-8 border-b-2 border-yellow-900'>
                    <NavLink className=' border-yellow-900 hover:border-t-2'>BEDDING</NavLink>
                    <NavLink>DINING</NavLink>
                    <NavLink>LIVING</NavLink>
                    <NavLink>FLOORING</NavLink>
                    <NavLink>KIDS FURNISHING</NavLink>
                    <NavLink>HANDCRAFTED DÉCOR ACCENTS</NavLink>
                </div>
                <div class=" flex row p-16 justify-center gx-5 mt-12  items-center lg:mt-0">

                    <div class="mt-6 lg:col-5 lg:order-1 lg:mt-0">
                        <div class="text-container text-left">
                            <h2 class="lg:text-2xl font-bold text-orange-900 ">
                                ABOUT US</h2>
                            <h2 class="lg:text-3xl py-4 font-bold">
                                WHO WE ARE</h2>
                            <p className="p-4">We are a team with diverse industry experience in leadership roles,<br /> with accomplished
                                strategic acumen and learning agility.</p>
                            <h3 class="h4 p-2 text-xl lg:text-2xl">CEO</h3>
                            <button className="border p-4 bg-black text-white hover:border-black hover:text-black hover:bg-white">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Main