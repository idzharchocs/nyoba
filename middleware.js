// const cars = require('./feeds')
const { cars } = require('./models')

const findAndSetFeedById = async (req, res, next) => {
    const id = req.params.id;
    const cars = await cars.findByPK(id);

    if (!cars) {
        res.status(404).json({
            message: 'Feed not found!'
        })
    }

    req.cars = cars;
    next();
}

module.exports = {
    findAndSetFeedById
}