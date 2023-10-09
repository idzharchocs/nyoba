// const cars = require('./cars')
const { cars } = require('./models');

const handleListcars = async (req, res) => {
    const { category } = req.query
    
    if (category) {
        const filtered = cars.findAll({ where: { category } });
        res.status(200).json(filtered)
    }

    const result = await cars.findAll();
    res.status(200).json(result);
}
module.exports = {
    handleListcars
}