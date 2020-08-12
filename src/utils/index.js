export const truncate = (str, symbols) => str.length > 10 ? str.substring(0, symbols) + "..." : str;

export const convert = (array, key) => array.reduce((result, item,) => {
    result[item[key]] = item;
    return result
}, {});

export const merge = (state, newState) => {
    return {...state, ...newState}
};

export const concat = (a, b) => a.concat(b);

export const arrayOfIdsValues = (array, key) => array.map(item => item[key]);

export const findObjBy = (id, array) => array.filter(item => item.id === id)[0];

export const createObjWithKey = (key, values) => {
    return {[key]: values};
};

export const newObj = array => obj => array.reduce((acc, elem) => {
    acc[elem] = obj[elem];
    return acc;
}, {});

export const sorObj = obj => Object.entries(obj);

export const compose = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args);

export const mergeIdToArr = (array, id) => [...array, id];

export const arrayObjectsByKeys = key => array => array.map(item => {
    console.log(item[key])
    return item[key]
});

export const sumValuesArray = arr => +arr.reduce((a, b) => Number(a) + Number(b), 0).toFixed(2);

export const unique = (arr) => {
    const result = [];
    arr.map(str => {
        return (!result.includes(str)) && result.push(str);
    });
    return result;
};

export const arrayIdenticalValues = id => array => array.filter(item => item === id);

export const arrayLength = array => array.length;

export const findValInKeyOfObj = (object, key, value) => object[key] === value;

export const isNull = x => x == null;

export const removeUniqueArray = (array, value) => array.filter(item => item !== value);

export const isArrayEmpty = array => array.length === 0;

export const addFieldToObj = (obj, field, value) => Object.assign(obj, {[field]: +value});


export const findIdArray = (array, obj) => array.find(item => item.id === obj.id);

export const updateFieldItem = (array, obj, num) => array.map(item =>
    (item.id === obj.id)
        ? {
            ...obj,
            quantity: item.quantity + num
        }
        : item);

export const updateItem = (array, obj, num) => {
    if (findIdArray(array, obj)) {
        return updateFieldItem(array, obj, num)
    }
    return [...array, {...obj, quantity: 1}];
}

export const replaceFieldItem = (array, obj) => array.map(item => (item.id === obj.id) ? {...obj} : item)


export const replaceItem = (array, obj) => {
    if (findIdArray(array, obj)) {
        return replaceFieldItem(array, obj)
    }
}

export const multiplyInItem = (a, b) => arr => arr.map(item => item[a] * item[b])
