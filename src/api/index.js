import cards from './mocksCards'

export const fetchApi = async () => {
    // return await superagent.get('/api') // => в реальном приложении
    return new Promise((resolve, reject) => {
        resolve(cards)
        // reject('error')
    })
}

export const loadMoreApi = async ({offset}) => {
    // fetch.get(`http://google.com/api/phones?offset=${offset}`) // => в реальном приложении
    return new Promise((resolve, reject) => {
        resolve(cards)
    })
}
