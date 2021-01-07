import React from 'react'
import CharacterItem from './CharacterItem'

const characterGrid = ({items, isLoading}) => {
  return ( isLoading ? (<h1>Loading</h1>) : (
    <div className="cards">
            {items.map(item => (
              <CharacterItem key={item['char_id']} item={item} />
            ))}            
    </div>
    )
  )
}

export default characterGrid
