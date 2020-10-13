import React, { useState, useContext } from 'react'
import Button from '../Button/Button'
import AddDetails from '../Step2/AddDetails'
import Addcsv from '../AddCSV/Addcsv'
import {DataContext} from '../../ContextAPI/DataContext'
import { Col, Row } from 'react-bootstrap'

export default function Stepper() {
    let {initialState}=useContext(DataContext)
   
  
    const[step,setStep]=useState('')
    

    return (
        <div className='stepper'>
       <Row>
           <Col>
           <Button handleClick={()=>{setStep('scratch');initialState()}} name='Add from scratch'/>
           </Col>
           <Col>    

                    <Button handleClick={()=>{setStep('csv');initialState()}} name='Add from CSV'/>
           </Col>
       </Row>


            

{
    step !=='' ? step ==='scratch' ? <AddDetails/> : <Addcsv setStep={setStep}/>  :''
}


        </div>
    )
}
