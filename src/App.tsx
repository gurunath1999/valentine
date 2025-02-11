import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoveProposal from "./components/LoveProposal"
import Success from "./components/Success"

const App:React.FC=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoveProposal />}/>
      <Route path="/success" element={<Success />}/>
    </Routes>
    </BrowserRouter>

    </>

  )
}
export default App