import { useEffect, useState } from 'react';

const useFetch = () => {
    const [fitss, setFits] = useState([])

    useEffect(() => {
        fetch('/fitness.json')
            .then(res => res.json())
            .then(data => setFits(data))
    }, [])
    return [fitss]
}

export default useFetch
