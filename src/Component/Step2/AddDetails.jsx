import React, { useState,useContext, useEffect } from 'react'
import Input from '../Input/Input'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import UploadImage from '../UploadImage/UploadImage';
import {DataContext} from '../../ContextAPI/DataContext'
import { Row, Col } from 'react-bootstrap';

export default function AddDetails() {
    
    let {state,setState}=useContext(DataContext)
    const[address,setAddress]=useState(state.address)
   useEffect(()=>{
            updateState()
   },[address])

   const updateState=()=>{
    setState({...state,address:address.label})
   }
   
    const[uploadImage,setUploadImage]=useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(address!==''){
           
            if(parseInt(state.bedroom)>10 || parseInt(state.bedroom)===0 || state.bedroom===''){
                    alert('Enter right Bedroom value')
            }else if(parseInt(state.bathroom)>5 || parseInt(state.bathroom)===0 || state.bathroom===''){
                alert('Enter right Bathroom value')
        }else{
            setUploadImage(true)
        }

            

        }else{
            alert('Enter address')
        }


    }

    return (
        <div>
        <Row className='mt-5'>
            <Col xs={6}>
           
            {
            !uploadImage ? <>
                                Add Details

                                <form>
            <GooglePlacesAutocomplete
            
            selectProps={{
                defaultInputValue:address,
    onChange: setAddress,
  }}
  required
      apiKey="AIzaSyCq4VOXZwHHfrJcH0FW5C7-PWTcVJwLgLA"
    />

           
            <Input type='number' required={true}  value={state.bedroom} handleClick={(e)=>setState({...state,bedroom:e.target.value})} placeholder='Enter Bedroom'/>
            <Input type='number' required={true} value={state.bathroom} handleClick={(e)=>setState({...state,bathroom:e.target.value})} placeholder='Enter Bathroom'/>
            <Input type='text' required={false} value={state.description} handleClick={(e)=>setState({...state,description:e.target.value})} placeholder='Enter Description'/>
            <input type='submit' value='submit' name='submit' onClick={handleSubmit}/>
            </form>
            </> :<UploadImage/>
        }
            </Col>
        </Row>
      
            

        

        </div>
    )
}
