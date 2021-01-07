import React from 'react'

const characterGrid = ({items, isLoading}) => {
  return ( isLoading ? (<h1>Loading</h1>) : (
    <div className="cards">
            {items.map(item => (
              <div key={item['char_id']} className="card">
                <img  src={item['img']} alt=""/>
              </div>
            ))}            
    </div>
    )
  )
}

export default characterGrid
