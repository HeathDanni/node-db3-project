// scheme-model
const db = require('../../data/db-config')

module.exports = {
    find,
    findById,
    findSteps,
    add
};

function find() {
    return db('schemes');
}

function findById(id) {
    if (!db('schemes')) 
        return Promise.resolve(null)

    return db('schemes')
    .where ({id})
    .first()
}

function findSteps(id) {
    return db(`schemes`)
        .innerJoin(`steps`, `steps.scheme_id`, 'schemes.id')
        .where(`schemes.id`, id)
        //need to put steps in order
}

function add(scheme) {
    return db('schemes')
        .insert(scheme)
        .then(id => {
            return findById(id[0]);
        });
}

function update(changes, id) {

}

function remove(id) {

}
