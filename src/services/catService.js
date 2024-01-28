const cats = [
    {
        _id: 1,
        name: 'Whity',
        imageUrl: 'https://vetworld.bg/wp-content/uploads/2023/02/%D0%91%D0%B5%D0%BD%D0%B3%D0%B0%D0%BB%D1%81%D0%BA%D0%B0-%D0%BA%D0%BE%D1%82%D0%BA%D0%B0-%D0%9F%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D1%8F-3.jpg',
        description: 'Angry cat',
        breed: 'Bengal',
    }
];

exports.getAll = () => {
    return cats.slice();
};

exports.getOne = (id) => {
    return cats.find(cat => cat._id == id);
};

exports.create = (catData) => {
    catData._id = cats[cats.length - 1]._id + 1;
    cats.push(catData);
};

exports.update = (id, editedCat) => {
    const cat = cats.find(cat => cat._id == id);
    const index = cats.indexOf(cat);
    return cats.splice(index, 1, editedCat);
};

exports.del = (id) => {
    const cat = cats.find(cat => cat._id == id);
    const index = cats.indexOf(cat);
    return cats.splice(index, 1);
};

exports.search = (search) => {
    let result = cats.slice();

    if (search) {
        result = result.filter(cat => cat.breed.toLocaleLowerCase() === search.toLocaleLowerCase());
    }

    return result;
};