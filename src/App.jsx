import Buttons from "./componenets/Buttons"
import Heading from "./componenets/Heading"

const App = ()=> {
  return (
    <div className="container text-center" id="calucaltor">
      <Heading/>
      <input className="display" type="text" id="display" />
      <div className="botton-container">
        <Buttons/>
      </div>
    </div>
  )
}

export default App
