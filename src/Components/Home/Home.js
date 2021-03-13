import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import League from '../League/League';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setLeagues(data.leagues.slice(0,18));
        })
    }, []);
    return (
        <div>
            <Container>
                <Row>
                    {
                        leagues.map(league => <League league={league}></League>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Home;