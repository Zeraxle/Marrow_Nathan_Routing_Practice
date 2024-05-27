import {useParams} from 'react-router-dom'

const WordColor = () => {
    const {word, color, background} = useParams()
    

    return(
        <>
            <p style={{color:color, background:background}}>The customized word is: {isNaN(word)? word: "Not a word"}</p>    
        </>
    )
}

export default WordColor