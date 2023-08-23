import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { InputContext } from "../App"
import MeaningList from "./MeaningList"
import Example from "./Example"
import Antonym from "./Antonym"
import Synonym from "./Synonym"

axios.defaults.baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en"

const ResultList = () => {
  const { inputValue } = useContext(InputContext)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const fetchData = async (param) => {
    try {
      setLoading(true)
      const res = await axios(`/${param}`)
      setResponse(res.data)
      setError(null)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (inputValue.length) {
      fetchData(inputValue)
    }
  }, [inputValue])

  if (loading) {
    return (
      <div className=" flex flex-col space-y-3 animate-pulse p-4 container mx-auto max-w-2xl">
        <div className="h-6 bg-purple-200 mt-5 rounded-md"></div>
        <div className="h-40 bg-purple-300 mt-5 rounded-md"></div>
        <div className="h-8 bg-purple-200 mt-5 rounded-md"></div>
        <div className="h-40 bg-purple-300 mt-5 rounded-md"></div>
      </div>
    )
  }
  if (error) {
    return (
      <h4 className="text-center mt-11 font-serif font-semibold text-purple-400 text-lg">
        No Definitions Found🫣
      </h4>
    )
  }
  return (
    <div className="container mx-auto p-4 max-w-2xl bg-slate-50 font-serif">
      { response && (
        <div>
          <h3 className="text-2xl font-bold mt-4 font-serif">
            Meaning & Definition:
          </h3>
          <MeaningList mean={ response } />
          <h3 className="text-2xl font-bold mt- font-serif">Example:</h3>
          <Example mean={ response } />
          <h3 className="text-2xl font-bold mt- font-serif">Synonyms:</h3>
          <Synonym mean={ response } />
          <h3 className="text-2xl font-bold mt- font-serif">Antonyms:</h3>
          <Antonym mean={ response } />
        </div>
      ) }
    </div>
  )
}
export default ResultList
