import {findObjBy} from "../utils";
import {arrData} from "../utils/loops/createData";
const carts = arrData(3)

export const fetchApi = async () => {
    // return await superagent.get('/api') // => в реальном приложении
    return new Promise((resolve, reject) => {
        resolve(carts)
        // reject('error')
    })
}

export const fetchByIdApi = async (id) => {
    return new Promise(resolve => {
        const cart = findObjBy(carts, id);
        resolve(cart);
    })
};

export const loadMoreApi = async ({offset}) => {
    // fetch.get(`http://google.com/api/phones?offset=${offset}`) // => в реальном приложении
    return new Promise((resolve, reject) => {
        resolve(carts)
    })
}
