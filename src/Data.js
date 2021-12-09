import {useState} from 'react'
import data from './data.json'
import Card from './Card'

const Example = () => {

    // const [data, setData] = useState([])

    console.log(data)

    return(
        <div style={{textAlign :'center'}}>
            {data.map(element => {
                return <Card {...element} />
            
            })}
        </div>
    )
}

export default Example