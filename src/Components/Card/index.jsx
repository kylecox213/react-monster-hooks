import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export default function Card({ handleClick, id, flipped, back, front, height, width }) {
    return <div
        className={`flip-container ${flipped ? 'flipped' : ''}`}
        style={{
            width, height
        }}
        onClick={() => handleClick(id)}
    >
        <div className="flipper">
            <img 
            style={{
                height, weight
            }}
            className={flipped ? 'front' : 'back'}
            src={flipped ? front : back}
            />
        </div>
    </div>
}

Card.PropTypes = {
    handleClick: PropTypesfunc.isRequired,
    id: PropTypes.number,isRequired,
    flipped: PropTypes.bool.isRequired,
    back: PropTypes.string.isRequired,
    front: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
}