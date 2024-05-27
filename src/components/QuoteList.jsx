import { useState, useEffect } from 'react';

export default function QuoteList() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const fetchQuotes = async () => {
            const URL = 'https://type.fit/api/quotes';
            try {
                const response = await fetch(URL);
                const quotes = await response.json();
                setQuotes(quotes);
            } catch (error) {
                console.log(error);
            }
        }
        fetchQuotes();
    }, []);
    return (
        <ul>
            {quotes.map((quote, index) => (
                <li key={index}>{quote.text}</li>
            ))}
        </ul>
    );
}