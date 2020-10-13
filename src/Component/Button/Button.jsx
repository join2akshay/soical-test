import React from 'react'
import {Button} from 'react-bootstrap'

export default function ButtonCom({name,handleClick}) {
    return (
        <div>

            <Button onClick={handleClick}>{name}</Button>
            
        </div>
    )
}
