import React from 'react'

const CharacterItem = ({item}) => {
  console.log(item);
  return (
      <div className="card">
        {/* <img  src={item['img']} alt=""/> */}
        <div className="card-back">
          <h1>{item['name']}</h1>
          <ul>
            <li>
              <strong>Actor Name: {item['portrayed']}</strong>
            </li>
            <li>
              <strong>Actor Nickname: {item['nickname']}</strong>
            </li>
            <li>
              <strong>Status: {item['status']}</strong>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default CharacterItem
