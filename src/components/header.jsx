import { useContext, useState } from "react"
import { InputContext } from "../App"

const Header = () => {
  const [value, setValue] = useState("")
  const { inputValue, setInputValue } = useContext(InputContext)

  const handleInputChange = (e) => setValue(e.target.value)

  const handleSubmit = () => {
    setInputValue(value)
    setValue("")
  }
  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      setInputValue(value)
      setValue("")
    }
  }
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 font-serif">
      <div className="container mx-auto py-2">
        <h1 className="text-3xl font-serif font-bold text-center text-white">
          Lucid Dictionary
        </h1>
        <p className="text-center font-serif mb-10 mt-2 text-slate-300 text-lg font-semibold">
          Find Definition for Word
        </p>
        <div className="flex items-center justify-center mt-7">
          <div className="flex border-2 border-gray-100 rounded">
            <input
              className="px-4 py-2 md:w-80 font-serif text-lg font-semibold "
              type="text"
              placeholder="Search..."
              onChange={handleInputChange}
              value={value}
              onKeyDown={handleInputKeyDown}
            />
            <button
              className="bg-gray-400 border-l px-4 py-3 text-white font-serif font-semibold text-lg italic"
              onClick={handleSubmit}
            >
              Click Me!
            </button>
          </div>
        </div>
        {inputValue && (
          <h3 className="text-slate-100 font-serif text-center mt-4 text-lg capitalize font-semibold">
            Result for:
            <span className="text-white font-bold font-serif uppercase">
              {" "}
              {inputValue}{" "}
            </span>
          </h3>
        )}
      </div>
    </div>
  )
}

export default Header
