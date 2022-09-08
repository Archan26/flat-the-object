## Flat the object 
#### The purpose of the package is to convert the nested object into faltten object


### Installation
```js
$ npm install flat-the-object
```

### Example
This is the practical example of how to use 
```js
const getFlattenObject = require('flat-the-object')

const user = {
    name: "Your Name",
    address: {
        personal: {
            city: "NY",
            state: "WX",
            coordinates: {
                x: 35.12,
                y: -21.49,
            },
        },
    },
    contact: {
        phone: {
            home: "xxx",
            office: "yyy",
        },
        email: {
            home: "xxx",
            office: "yyy"
        },
    },
};

//convert the object by passing the object in the function
//there are 2 parameters 
//1. the actual object
//2. give the name and object key will start with that name

console.log(getFlattenObject(user, "data"));

// result will be like this:
// {
//   data_name: 'Your Name',
//   data_address_personal_city: 'NY',
//   data_address_personal_state: 'WX',
//   data_address_personal_coordinates_x: 35.12,
//   data_address_personal_coordinates_y: -21.49,
//   data_contact_phone_home: 'xxx',
//   data_contact_phone_office: 'yyy',
//   data_contact_email_home: 'xxx',
//   data_contact_email_office: 'yyy'
// }
```