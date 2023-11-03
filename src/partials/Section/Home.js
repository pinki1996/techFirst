import About from "./About";
import Counting from "./Counting";
import Expertise from "./Expertise";
import Header from "./Header";
import Partners from "./Partners";
import Process from "./Process";
import Services from "./Services";
import Testimonial from "./Testinomials";


function Home(){
    return(
        <>
            <Header/>
   
   <About/>
   <Services/>
   <Process/>
   <Expertise/>
   <Testimonial/>
   <Counting/>
   <Partners/>
        </>
    )
}
export default Home;