import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import {useState} from "react";
import Results from "./components/Results.jsx";

function App() {
  const [ userInput, setUserInput ] = useState({
    initialInvestment: 100,
    annualInvestment: 1200,
    expectedReturn: 110,
    duration: 12
  });

  const isValidInput = userInput.duration > 0;
  function handleChange(inputIdentifier, value) {
    setUserInput(prevState => {
      return {
        ...prevState,
        [inputIdentifier]: +value
      }
    })
  }
  return (
      <>
        <Header/>
        <UserInput onChangeInput={handleChange} userInput={userInput} />
        {!isValidInput && <p className='center'>Enter duration greater than zero</p>}
        {isValidInput && <Results userInput={userInput} />}
      </>
  )
}

export default App