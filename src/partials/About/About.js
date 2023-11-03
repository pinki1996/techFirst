

function About() {
    return (
        <section class="xl:py-[120px] ">
            <div class="container px-32">
                <div class=" lg:mt-0 pl-32">
                    <div class="flex justify-center gap-8 lg:col-2 lg:order-2">
                        <div>
                            <span class="">
                                <img class="objec-contain h-auto w-full " src="/images/About/rural.jpg" />
                            </span>
                        </div>
                        <div className=" bg-white text-left w-1/2">
                            <h2 className=" lg:text-2xl text-orange-200 font-bold md:tracking-widest">ABOUT</h2>
                            <h3 class="h4 text-xl p-2 lg:text-4xl font-bold">WHO WE ARE</h3>
                            <p className="p-2">We are a team with diverse industry experience in leadership roles,
                                with accomplished strategic acumen and learning agility. We love to connect with our heritage and
                                remain excited to take our rich craftsmanship to global forum for economic growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;