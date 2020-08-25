import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyCmWqkVmFxjaQjwDDgVHpuVcciOsvhMfwg';

const useVideos = (defaultTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultTerm);
    }, [defaultTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: KEY,
                q: term
            }
        });

        setVideos(response.data.items);
    };

    return [videos, search]; // OR
    // return { videos, onTermSubmit };
};

export default useVideos;