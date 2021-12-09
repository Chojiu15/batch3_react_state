import {useState} from 'react'
import './Ternary.css'

const Example = () =>{
    const [bool, setBool] = useState(true)

    return(
        <div style={{textAlign : 'center'}}>
            <h1 className={bool ? 'blue' : 'red'}>Hello world</h1>
            <button onClick={() => setBool(!bool)} >
            Change the boolean value
            </button>
            {bool && <p>My boolean is set to true</p>}
        </div>
    )

}

export default Example