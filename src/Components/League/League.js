import React,{useEffect,useState} from 'react';
import { Card, Col, Button} from 'react-bootstrap';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const League = (props) => {
    const [leagues,setLeagues]=useState([]);
   
    const {idLeague, strLeague, strSport} = props.league;
    useEffect(()=>{
        let url=`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data.leagues[0])
            setLeagues(data.leagues[0])
        })
    },[]);
    const {strLogo} = leagues;
    const history = useHistory();
    const leagueDetails=(id)=>{
      history.push('/league_detail/'+id)
    }

    return (
      <Col className='col-md-6 col-sm-12 col-xl-4 p-4 justify-content-center'>
      <Card className='rounded shadow p-3 bg-info' style={{ width: '18rem' }}>
        <Card.Img variant='top' src={strLogo} />
        <Card.Body className='text-center text-white'>
          <Card.Title>{strLeague}</Card.Title>
          <Card.Text>Sports Type: {strSport}</Card.Text>
          <Button
            // className='btn btn-primary'
           onClick={() => leagueDetails(idLeague)}
          >
            Explore <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Card.Body>
      </Card>
    </Col>

    );
};

export default League;