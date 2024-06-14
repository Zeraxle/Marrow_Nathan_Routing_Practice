import {useParams} from 'react-router-dom'
import Number from './Number'


const Word = (props) => {

    let {Word} = props
    const {word} = useParams()


    if(!isNaN(word)){
        return <Number Number={word}/>
    }
    return(
        <>
            {
                isNaN(Word)? `The word is - ${Word}`: `The word is - ${word}`
            }
        </>
    )
}

export default Word