
import { createContext, useState } from "react"
import Header from "./components/header"
import ResultList from "./components/ResultList"
import MeaningList from "./components/MeaningList"
// import axios from "axios"

export const InputContext = createContext()
function App() {
  const [inputValue, setInputValue] = useState("")

  const value = {
    inputValue,
    setInputValue,
  }
  return (
    <InputContext.Provider value={ value }>
      <div className="App">
        <Header />
        <ResultList />
        <MeaningList />

        {/* <axios /> */ }
      </div>
    </InputContext.Provider>
  )
}

export default App
