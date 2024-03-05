import Nav from "./component/nav"
import Footer from "./component/footer"
import Main from "./component/main"
import Profile from "./component/profile"
import Navprof from "./component/navprof"
import Footfile from "./component/footfile"
import Marq from "./component/marquee"
// import Marque from "./component/marquee"

function App() {
  return (
     <div>

        <div className="text text-base flex flex-col h-screen justify-between">     
            <Nav/>
            <Main/>
             <Footer/>
        </div>  

        <div className="bag2 text-base flex flex-col h-screen justify-between bg-yellow-300">   
            <Navprof/>
            <Profile/>
            {/* <Footfile/> */}
            
            <Marq/>
        </div>

     </div> 

     
  )  
}

export default App