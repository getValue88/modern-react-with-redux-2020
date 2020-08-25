import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => { //param fn cant be async
        const timer = setTimeout(() => {
            if (term) {
                (async () => {
                    const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                        params: {
                            action: 'query',
                            list: 'search',
                            origin: '*',
                            format: 'json',
                            srsearch: term
                        }
                    });

                    setResults(data.query.search);
                })();
            }
        }, 500);

        return () => { //cleanup function called befor each render except on first
            clearTimeout(timer);
        }
    }, [term]); //2nd parameter ->
    // [] = run at initial render
    // nothing = run at initial render and after every rerender
    // [data1,data2] = run at initial render and after any data has changed

    const renderedResults = results.map(result => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        );
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        className="input"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;