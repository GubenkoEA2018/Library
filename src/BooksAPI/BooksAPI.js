import tileData from '../Data/tileData';
const api = "http://jsonapiplayground.reyesoft.com"

const headers = {
    'Accept': 'application/json'
}

export const get = () =>
    fetch(`http://jsonapiplayground.reyesoft.com/v2/hbooks`, { headers })
        .then(res => res.json())
        .then(tileData => tileData.img)

export const update = (book, shelf) =>
    fetch(`${api}/books/${book.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ shelf })
    }).then(res => res.json())

export const search = (query, maxResults) =>
    fetch(`${api}/search`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query, maxResults })
    }).then(res => res.json())
        .then(data => data.books)
