const db = require('../models');

const Product = db.products

const addProduct = async (req, res) => {
    let infoProduct = {
        
        name: req.body.name,
        qty: req.body.qty,
        picture: req.body.picture,
        expiredAt: req.body.expiredAt,
        isActive: true,
    }
    const product = await Product.create(infoProduct)
    res.status(200).send(product)
}

const getAllProducts = async (req, res) => {
    let products = await Product.findAll(
        // {attributes: [
        //     'id',
        //     'name',
        //     'qty',
        //     'picture',
        //     'expiredAt',
        //     'isActive',
        // ]},
    {where: {isActive: true}})
    res.status(200).send(products)
}

const getOneProduct = async (req, res) => {
    let id = req.params.id
    let product = await Product.findOne({ where: { id: id } })

    if (product === null) {
        res.status(200).send({message: `Product with id: ${id} was not found`})
    } else if (product.isActive === false) { 

        res.status(200).send({message: `Product with id: ${id} was soft deleted`})
    } else {

        res.status(200).send(product)
    }
    
}

const updateProduct = async (req, res) => {
    let id = req.params.id
    let updateInfo = {
        name: req.body.name,
        qty: req.body.qty,
        picture: req.body.picture,
        expiredAt: req.body.expiredAt,
        updatedAt: new Date(),
    }
    console.log(id)
    console.log(updateInfo)
    
    
    var product = await Product.findOne({ where: { id: id } })
    
    product = await product.update(updateInfo)
    

    // let product = await Product.update( updateInfo, { where: { id: id }})
    // console.log(req.body)
    // console.log(product)
    res.status(200).send(product)
}

const deleteProduct = async (req, res) => {
    let id = req.params.id
    
    let product = await Product.findOne({ where: { id: id } })

    if (product === null) {
        res.status(200).send({message: `Product with id: ${id} was not found`})
    } else {

        product.update({isActive: false})
        
        res.status(200).send({message: `Product with id: ${id} was soft deleted`})
    }

}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
}