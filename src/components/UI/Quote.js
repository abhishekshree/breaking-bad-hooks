import axios from 'axios'
import React, {useState, useEffect} from 'react'

const Quote = () => {
    const [Quote, setQuote] = useState('')
    // const [Name, setName] = useState('')
    useEffect(() => {
            const getQuote = async () => {
                const quote = await axios(`https://www.breakingbadapi.com/api/quote/random`)
                // console.log(quote.data[0])
                setQuote(quote.data[0].quote)
                // setName(quote.data[0].author)
            }
            getQuote()
        },[])

    return (
        <figure>
            <blockquote>
                <p style={{display:'flex', justifyContent:'center',alignItems:'center' ,marginBottom:'10px'}} >{Quote}</p>
            </blockquote>
        </figure>

        
    )
}

export default Quote
