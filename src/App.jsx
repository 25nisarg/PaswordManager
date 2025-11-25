import Footer from "./components/Footer"
import Manager from "./components/manager"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <div className="">
        <Navbar/>
        <div className="min-h-[85vh] [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] p-2">
        <Manager/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
