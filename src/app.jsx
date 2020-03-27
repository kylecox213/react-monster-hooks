import React, { useState } from 'react'
import Card from './components/card'

export default function App() {
    const [flipped, setFlipped] = useState([])

    const handleClick = (id) => setFlipped([id])
    
    return (
        <div>
            <h2>Can you member where dem cards be at?!</h2>
            <Card  
                id={1}
                width={100}
                height={100}
                back={`/img/back.png`}
                font={`/img/react.png`}
                flipped={flipped.includes(1)}
                handleClick={() => handleClick(1)}
            />
        </div>
    )
}