import { useState, useEffect } from 'react';

import { Button, Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../css/main.css";
import { randomNumber, twitterURL, colorList } from '../services/util';


export default function QuoteViewer() {
    const [quotes, setQuotes] = useState([]);
    const [quoteId, setQuoteId] = useState(0);
    const [color, setColor] = useState(colorList[randomNumber(0, colorList.length - 1)]);

    useEffect(() => {
        const fetchQuotes = async () => {
            const URL = 'https://type.fit/api/quotes';
            try {
                const response = await fetch(URL);
                const quotesList = await response.json();
                setQuotes(quotesList);
                setQuoteId(randomNumber(0, quotes.length - 1));
            } catch (error) {
                console.log(error);
            }
        }
        fetchQuotes();
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    function handleNextQuoteClick() {
        const index = randomNumber(0, quotes.length - 1);
        setQuoteId(quoteId == index ? randomNumber(0, quotes.length - 1) : index);
        setColor(colorList[randomNumber(0, colorList.length - 1)]);
    }
    
    return (
        <>
            <Quote quote={{...quotes[randomNumber(0, quotes.length - 1)]}} btnColor={color} onClick={handleNextQuoteClick} />
        </>
    );
}

function Quote({quote, btnColor, onClick}) {
    const author = quote.author == undefined ? 'Unknown' : quote.author.split(',')[0];
    return (
        <Container id="quote-box" >
            <Row>
                <Col>
                    <div className='header'>
                        <p id="text" style={{fontSize: '2em', lineHeight: '1.2em', color: btnColor}}>
                            <FontAwesomeIcon icon="fa-solid fa-quote-left " size='lg' style={{color: btnColor, margin: '0 10px'}} />
                        {quote.text}</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <p id="author" style={{color: btnColor}}>{`- ${author}`}</p>
                </Col>
            </Row>
            <Row xs={3}>
                <Col xs={1}>
                    <a id='tweet-quote' href={twitterURL} title='Tweet this quote!' target='_blank'>
                        <FontAwesomeIcon icon="fa-brands fa-square-twitter" size='2xl' style={{color: btnColor, text: 'white'}}/>
                    </a>
                </Col>
                <Col xs={'auto'}/>
                <Col xs={3}>
                    <Button id="new-quote" onClick={onClick} size={'sm'} style={{background: btnColor, border: '0'}} >
                        New quote
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}