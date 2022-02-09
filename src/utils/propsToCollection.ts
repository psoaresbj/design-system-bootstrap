import camelCase from 'lodash/camelCase';

const propsToCollection = array =>
    array.reduce(value => ({ ...result, [camelCase(value)]: value }), {});

export default propsToCollection;
