import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 style={{textAlign:'center'}} className='p-4 font-bold text-white text-2xl	bg-green-600'>This is the React Router Application...!</h1> */}
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App