import DaisyNav from "./Components/DaisyNav/DaisyNav"
import NavBar from "./Components/NavBar.jsx/NavBar"

import PriceOption from "./Components/PriceOptions/PriceOption";

function App() {


  return (
    <>
      <DaisyNav></DaisyNav>
      <NavBar></NavBar>
      <h1 className='text-xl bg-red-600'>Vite + React</h1>
      <PriceOption></PriceOption>
    

    </>
  )
}

export default App
