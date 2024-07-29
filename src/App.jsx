import Navbar from "./Components/Navbar"
import Herosection from "./Components/Herosection"
import Featuresection from "./Components/Featuresection"
import Workflow from "./Components/Workflow"
import Pricing from "./Components/Pricing"
import Testimonials from "./Components/Testimonials"
import Footer from "./Components/Footer"


function App() {

  return (
    <div className="">
     <Navbar/> 
     <div className="">
     <Herosection/>  
     <Featuresection/>    
     <Workflow/>
     <Pricing/>
     <Testimonials/>
     </div>
     <Footer/>
    </div>
  )
}

export default App
