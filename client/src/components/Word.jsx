import {useParams} from 'react-router-dom'

const Word = () => {
const {word} = useParams()

    return(
        <>
            <p >The word is: {isNaN(word)? word : "Not a word"}</p>
        </>
    )
}

export default Word