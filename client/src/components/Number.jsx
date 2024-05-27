import {useParams} from 'react-router-dom'

const Number = () => {
const {number} = useParams()
    return (
        <>
            <p>The number is: {isNaN(number)? "Not a number": number}</p>
        </>
    )
}

export default Number