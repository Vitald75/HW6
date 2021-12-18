//const { Select } = require('./select');
const { Field } = require('./field');
//const { Checkbox } = require('./checkbox');
const { Textarea } = require('./textarea');

const model = [
    { name: 'email', type: Field, selector: '#email' },
    { name: 'password', type: Field, selector: '#password' },
    { name: 'address1', type: Field, selector: '#address1' },
    { name: 'address2', type: Field, selector: '#address2' },
    { name: 'city', type: Field, selector: '#city' },
    { name: 'zip', type: Field, selector: '#zip' },
    { name: 'anual', type: Field, selector: '#anual' },
    { name: 'description', type: Field, selector: '#description' },
]
module.exports = { model };
