
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {

  const [value,setValue] = useState(0);
  const [sum,setSum] = useState(0);
  
const handleChange = (e)=>{
       setValue(parseInt(e.target.value));
          const read = sum+parseInt(e.target.value);
          setSum(read);
           
}

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Sum Calculator</h1>
       
        <input className="input"  type="number"  value={value} min='-100' max='100' onChange={handleChange}
     />

           
            <div>
              <p>Sum: {sum}</p>
            </div>
        
    </div>
  )
}


export default App
