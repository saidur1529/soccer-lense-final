import React from 'react'
import './DHeader.css'
import { Jumbotron, Container, Image } from 'react-bootstrap';

const DHeader = props => {
  return (
    <Jumbotron className='main-header' fluid>
      <Container className='text-center'>
        <Image src={props.image} style={{ height: '200px' }} fluid />
      </Container>
    </Jumbotron>
  )
}

export default DHeader
