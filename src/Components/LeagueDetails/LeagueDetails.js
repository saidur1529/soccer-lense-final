import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import DHeader from '../Dheader/DHeader';
import './LeagueDetails.css';

const LeagueDetails = () => {
    const [leagueDetails, setLeagueDetails] = useState('');
    const params = useParams()
    console.log(params)
    useEffect(() => {
        const id = params.id;
        let url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.leagues[0])
                setLeagueDetails(data.leagues[0])
            })
    }, []);
    console.log(leagueDetails);
    return (
        <div>
            <DHeader image={leagueDetails.strBadge} />
            <Container>
                <div className='middle-card'>
                    <Row className='justify-content-between p-2 m-2 d-flex'>
                        <Col className='col-sm-12 col-md-6 col-xs-12 col-xl-6 p-2'>
                            <h1>{leagueDetails.strLeague}</h1>
                            <br />
                            <h5>
                                <i class='fas fa-map-marker-alt'></i> Founded: {leagueDetails.intFormedYear}
                            </h5>
                            <h5>
                                <i class='fas fa-flag'></i> Country: {leagueDetails.strCountry}
                            </h5>
                            <h5>
                                <i class='fas fa-futbol'></i> Sport Type: {leagueDetails.strSport}
                            </h5>
                            <h5>
                                <i class='fas fa-mars'></i> Gender: {leagueDetails.strGender}
                            </h5>
                        </Col>
                        <Col className='col-sm-12 col-md-6 col-xs-12 col-xl-6 p-4'>
                                {leagueDetails.anchorstrGender === 'Male' ? (
                                    <img style={{ width: '400px' }} src={leagueDetails.strFanart2} alt='' />
                                ) : (
                                    <img style={{ width: '400px' }} src={leagueDetails.strFanart1} alt='' />
                                )}
                            </Col>
                    </Row>
                </div>
                <p className='text-center'>{leagueDetails.strDescriptionEN}</p>
                <div className='text-center'>
                    <a href={`https://${leagueDetails.strFacebook}`} target='__blank'>
                        <i class='fab fa-facebook brand-icon facebook'></i>
                    </a>
                    <a href={`https://${leagueDetails.strTwitter}`} target='__blank'>
                        <i class='fab fa-twitter brand-icon twitter'></i>
                    </a>
                    <a href={`https://${leagueDetails.strYoutube}`} target='__blank'>
                        <i class='fab fa-youtube brand-icon youtube'></i>
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default LeagueDetails;