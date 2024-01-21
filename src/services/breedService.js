const breeds = [
    {
        breed: 'Bengal'
    },
    {
        breed: 'Persian'
    }
];

exports.getAll = () => {
    return breeds.slice();
};