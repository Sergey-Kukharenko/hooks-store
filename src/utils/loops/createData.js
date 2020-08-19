import {LoremIpsum} from "lorem-ipsum";

const lorem = new LoremIpsum()

export const arrData = (count) => {

    const randomBetween = (min = 30, max = 1000) => Math.round((Math.random() * (Math.abs(max - min))) + min);

    return new Array(count).fill().map((e, i) => {
        return {
            id: i,
            img: `/images/${i}.jpg`,
            price: randomBetween(30, 1000),
            quantity: 0,
            title: lorem.generateWords(randomBetween(1, 3)),
            info: lorem.generateWords(randomBetween(4, 10)),
        }
    })
}
