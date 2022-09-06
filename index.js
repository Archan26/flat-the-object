let flattenObject = {}
getFlattenObject = (object, name) => {
    for (const key in object) {
        if (typeof object[key] === 'object') {
            getFlattenObject(object[key], name + "_" + key);
        } else {
            flattenObject[name + "_" + key] = object[key]
        }
    }
    return flattenObject;
};


module.exports = getFlattenObject;