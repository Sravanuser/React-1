import React from 'react'

export default function Key() {

    const items = [
        {id: 1, name: 'Item 1'},
        {id: 2, name: 'Item 2'},
        {id: 3, name: 'Item 3'},
    ];

  return (
    <div>
      <ul>
        {items.map((item) =>
        <li key={item.id}>{item.name}</li>
        )}
      </ul>
    </div>
  )
}
