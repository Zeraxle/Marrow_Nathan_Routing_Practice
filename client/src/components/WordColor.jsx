import {useParams} from 'react-router-dom'
import Number from './Number'

const WordColor = () => {
    
    const {word, color, background} = useParams()

    console.log(word)

    if(!isNaN(word)){
        return <Number Number={word}/>
    }
    

    return(
        <>  
            <p style={{color:color, background:background}}>The customized word is: {word}</p>    
        </>
    )
}

export default WordColor