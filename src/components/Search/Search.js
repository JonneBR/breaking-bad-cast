import React, {useState} from 'react'
import CharacterGrid from '../Characters/characterGrid'

const Search = ({items, isLoading, getQuery }) => {
  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }
  return(
    <div className="container">
      <div className="cards-container">
        <div className="center">
          <div className="search">
            <input type="text" className='form-control' placeholder='Search characters' value={text} onChange={(e) => onChange(e.target.value)}/>
          </div>
          <CharacterGrid isLoading={isLoading} items={items}/>
        </div>
        </div>
      </div>
  )
}

export default Search