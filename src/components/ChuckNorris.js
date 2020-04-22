import React, {useState, useEffect} from 'react';

const ChuckNorris = () => { 
    const [url,setUrl] = useState('');
    const [value, setValue] = useState(''); 
    
    const fetchData = () => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then((resp) => {
            return resp.json();
        })
        .then(({icon_url, value}) => {
            setUrl(icon_url);
            setValue(value);
        })
    };

    useEffect(() => {
        fetchData();
    },[])
    
    return(
        <div className="container">
            <h1>Random fact about Chuck Norris:</h1>
            <p>{value}</p>
            <img src={url} alt="chuck"/>
        </div>
    )   
}

export default ChuckNorris;