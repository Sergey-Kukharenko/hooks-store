import {
    addFieldToObj,
    arrayIdenticalValues,
    arrayLength,
    arrayObjectsByKeys,
    compose,
    multiplyInItem,
    sumValuesArray,
    unique
} from "./utils";
import * as R from "ramda";

export const getById = (state, id, keyName) => state[keyName][id];

export const getActiveCategoryId = ownProps => ownProps.match.params.id;

// const filter = (state, key) => array => array.filter(item => item[key].toLocaleLowerCase().indexOf(state.phonesPage.search.toLocaleLowerCase()) > -1);

export const getRenderedPhonesLength = state => state.phonesPage.ids.length;

export const getTotalBasketCount = state => compose(
    sumValuesArray,
    arrayObjectsByKeys('quantity'),
)(state.basket)

export const arrayOfValues = state => arrIds => arrIds.map(id => getById(state, id, 'carts'));

// export const getTotalBasketPrice = state =>
//     compose(
//         sumValuesArray,
//         arrayObjectsByKeys('price'),
//         arrayOfValues(state))
//     (state.basket);


export const getTotalBasketPrice = state =>
    compose(
        sumValuesArray,
        multiplyInItem('price', 'quantity')
    )(state.basket)

export const getCategories = state => R.values(state.categories) // получаем массив объектов categories

// const always = val => () => val;

// const when = (fn, fn2) => array => fn() ? fn2(array) : array;

// const filterByKey = (key, category) => array => array.filter(item => item[key] === category);



// export const getPhones = (state, ownProps) => compose(
//     filter(state, 'name'),
//     when(always(getActiveCategoryId(ownProps)), filterByKey('categoryId', getActiveCategoryId(ownProps))),
//     arrayOfValues(state)
// )(state.phonesPage.ids);

const mapItemsWithNewField = func => array => array.map(item => func(item))

export const getBasketItemsWithCount = state => {

    const itemCount = id => compose(
        arrayLength,
        arrayIdenticalValues(id)
    )(state.basket);

    const itemWithCount = item => addFieldToObj(item, 'quantity', itemCount(item.id));

    const uniqueIds = unique(state.basket);

    const items = compose(
        mapItemsWithNewField(itemWithCount),
        arrayOfValues(state)
    )(uniqueIds);

    return items
};
