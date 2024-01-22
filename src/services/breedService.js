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

exports.create = (breed) => {
    breeds.push(breed);
};