let flattenObject = {}

let getFlattenObject = (object, name) => {
    if (typeof object === 'object') {
        if (name === undefined) {
            return "Please pass the second parameter - any string"
        }
        return convertObject(object, name)
    } else {
        return "Please pass the valid object"
    }
}

convertObject = (object, name) => {
    for (const key in object) {
        if (typeof object[key] === 'object') {
            convertObject(object[key], name + "_" + key);
        } else {
            flattenObject[name + "_" + key] = object[key]
        }
    }
    return flattenObject;
};

module.exports = getFlattenObject;