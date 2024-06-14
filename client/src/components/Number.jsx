import {useParams} from 'react-router-dom'
import Word from './Word'

const Number = (props) => {
    
    
    let {Number} = props
    const {number} = useParams()
    
    
    if(isNaN(number) && isNaN(Number)){
        return <Word Word={number}/>
    }


    return (
        <>
            {
                !isNaN(number)?  `The number is ${number}`: `The number is ${Number}`
            }
        </>
    )
}

export default Number