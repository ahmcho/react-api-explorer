import React,{Fragment, useState, useEffect} from 'react';

const Numbers = () => {
    const [fact,setFact] = useState('');
    const [number, setNumber] = useState('');

    const fetchData = ( number = 'random') => {
        fetch(`http://numbersapi.com/${number}?json`)
        .then((resp) => {
            return resp.json()
        })
        .then(({number, text}) => {
            setNumber(number);
            setFact(text);
        })
    }

    useEffect(() => {
        fetchData();
    },[]);
    
    const onChange = (e) => {
        document.querySelector('p').classList.remove('hidden');
        fetchData(e.target.value);
    }
    return(
        <Fragment>
            <h1>Enter a number</h1>
            <input type="number" onChange={onChange}/>
             { !fact ? 
             <p className="hidden">Loading...</p> 
             :
            <div>
                <p>Here is a random fact about {number} </p>
                <span>{fact}</span>
            </div> } 
            
        </Fragment>
    )
}

export default Numbers;