import React, { useState } from 'react'

const Search = ({getQuery}) => {

    const [text, settext] = useState('')

    const onChange = (q) => {
        settext(q)
        getQuery(q)
    }

    return (
        <section className="search">
            <form action="">
                <input type="text" className='form-control' 
                placeholder='Search characters' autoFocus 
                value={ text } onChange={ (e) => onChange(e.target.value) } />
            </form>
        </section>
    )
}

export default Search
