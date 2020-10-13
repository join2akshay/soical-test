import React from 'react'
import Stepper from '../Component/Stepper/Stepper'
import DataContextProvider from '../ContextAPI/DataContext'
import { Container, Row, Col } from 'react-bootstrap'
export default function Home() {
    return (
        <div>
        <DataContextProvider>
        <Container>
  <Row className='mt-5'>
    <Col>  <Stepper/></Col>
  </Row>
</Container>
          
        </DataContextProvider>
        </div>
    )
}
