import React from 'react';
import quotes from '../quotes.json';
import {useState} from 'react';

const getRandom=() => Math.floor(Math.random()*quotes.length)

const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871"
  ]

const Quotes = () => {

    const[quote,setQuote]=useState(quotes[getRandom()])
    
    const changeQuote=() => {
        const random=getRandom()
        setQuote(quotes[random])
    }
    const color = colors[Math.floor(Math.random() * 6)]

    document.body.style=`background:${color}`
    console.log(quote)
    return (
        <div className="quote" style={{color:color}}>
            <div>
                <i className="fa-solid fa-quote-left fa-3x"></i>
                <p>{quote.quote}</p>
            </div>
            <h2>{quote.author}</h2>
            <button onClick={changeQuote} style={{backgroundColor:color}}>
                <i className="fa-solid fa-angle-right " ></i>
            </button>
        </div>
    );
};

export default Quotes;