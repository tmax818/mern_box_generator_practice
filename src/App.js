import logo from './logo.svg';
import './App.css';
import {Box} from "./Components/Box";
import {useState} from "react";

function App() {
    const [color, setColor] = useState("")
    const [colors, setColors] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        console.log(colors, color)
        setColors([...colors, color])
    }
  return (
    <div className="App">
        <div>
        <form onSubmit={ e => handleSubmit(e) }>
            <label htmlFor="">Color</label>
            <input type="color" onChange={e => setColor(e.target.value)}/>
            <input type="submit" value="add"/>
        </form>
        </div>
        <div className="container">
        {colors.map(color => {
            return (
                <Box color={color}/>
            )
        })}
        </div>
    </div>
  );
}

export default App;
