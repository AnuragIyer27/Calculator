import { useState } from "react"
import Buttons from "./Buttons";
import Heading from './Heading'

const AppContent = ()=> {
    let [currentValue, setCurrentValue] = useState(0);

    const ClickOnEqual = ()=> {
        setCurrentValue(eval(currentValue));
    }
  
    const ClickOnC = ()=> {
      setCurrentValue(0)
    }
  
    const handleOnClick = (event, items)=> {
      if (currentValue===0) {
        setCurrentValue(items)
      } else {
        setCurrentValue(currentValue+items);
      }
    }
    return (
        <>
            <Heading/>
            <input className="display" type="text" id="display" value={currentValue} readOnly/>
            <div className="botton-container">
            <button onClick={ClickOnC} className="button Cbtn">C</button>
            <Buttons handleOnClick={handleOnClick}/> 
            <button onClick={ClickOnEqual} className="button equalBtn">=</button>
      </div>
        </>
    )
}

export default AppContent