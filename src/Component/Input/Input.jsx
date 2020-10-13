import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

export default function Input({type,handleClick,placeholder,value,required}) {
    return (
        <div>
         <InputGroup size="sm" className="mb-3">
    
    <FormControl className='mt-2 ' type={type} required={required} value={value} onChange={handleClick} placeholder={placeholder} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
        
        </div>
    )
}
