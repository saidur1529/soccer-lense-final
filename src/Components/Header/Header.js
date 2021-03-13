import React from 'react'
import './Header.css'
import {Card} from 'react-bootstrap';
import HeaderImg from '../../Images/Header.png'

const Header = props => {
  return (
    <Card className="bg-dark text-white main-header">
      <Card.Img src={HeaderImg} alt="Header image"/>
      <Card.ImgOverlay>
        <h1><strong>Soccer Lense</strong></h1>
      </Card.ImgOverlay>
    </Card>
  )
}

export default Header
