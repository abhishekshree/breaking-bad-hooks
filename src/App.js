import './App.css'
import Header from './components/UI/Header'
import {useState, useEffect} from 'react'
import axios from 'axios'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/UI/Search'
import Quote from './components/UI/Quote'

const App = () => {
  
  const [items, setitems] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [query, setquery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      // console.log(result.data)
      setitems(result.data)
      setisLoading(false)
    }

    fetchItems()
  }, [query])
  
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Quote />
        <Search getQuery={ (q)=> setquery(q) } />      
        <CharacterGrid isLoading={isLoading} items={items} />
      </div>
    </div>
  );
}

export default App;
