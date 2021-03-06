const db = require('../models');

const Product = db.products;

const addProduct = async (req, res) => {
    let infoProduct = {

        name: req.body.name,
        qty: req.body.qty,
        picture: req.body.picture,
        expiredAt: req.body.expiredAt,
        isActive: true,
    };
    const product = await Product.create(infoProduct);
    res.status(200).send(product);
}

const getAllProducts = async (req, res) => {
    await Product.findAll(
        // {attributes: [
        //     'id',
        //     'name',
        //     'qty',
        //     'picture',
        //     'expiredAt',
        //     'isActive',
        // ]},
        { where: { isActive: true } }).then((products) => {

            // sort products by its name
            products = products.sort((a, b) => {
                if (a.name < b.name) return -1
                return a.name > b.name ? 1 : 0
            })

            data = {
                message: `Success loading all products`,
                products: products,

            }
            res.status(200).send(data)
        }).catch((err) => {
            console.log("error" + err)
        });
}

const getOneProduct = async (req, res) => {
    let id = req.params.id;
    await Product.findOne({ where: { id: id } }).then((product) => {
        if (product === null) {
            res.status(200).send({ message: `Product with id: ${id} was not found` });
        } else if (product.isActive === false) {

            res.status(200).send({ message: `Product with id: ${id} was soft deleted` });
        } else {

            data = {
                message: `Success loading product with id: ${id}`,
                products: product,

            };
            res.status(200).send(data);
        }
    }).catch((err) => {
        console.log("error" + err)
    });



}

const updateProduct = async (req, res) => {
    let id = req.params.id;

    await Product.findOne({ where: { id: id } }).then(async (product) => {
        if (product === null) {
            res.status(200).send({ message: `Product with id: ${id} was not found` });
        } else if (product.isActive === false) {

            res.status(200).send({ message: `Fail to update product with id: ${id} was soft deleted` });
        } else {

            let updateInfo = {
                name: req.body.name,
                qty: req.body.qty,
                picture: req.body.picture,
                expiredAt: req.body.expiredAt,
                updatedAt: new Date(),
            };

            await product.update(updateInfo);

            data = {
                message: `Success updating product with id: ${id}`,
                products: product,

            };

            res.status(200).send(data);
        }
    }).catch((err) => {
        console.log("error" + err)
    });




}

const deleteProduct = async (req, res) => {
    let id = req.params.id;


    await Product.findOne({ where: { id: id } }).then(async (product) => {
        if (product === null) {
            res.status(200).send({ message: `Product with id: ${id} was not found` });
        } else if (product.isActive === false) {

            res.status(200).send({ message: `Fail to soft delete product with id: ${id} had been soft deleted` });
        } else {

            await product.update({ isActive: false });

            data = {
                message: `Success soft deleting product with id: ${id}`,

            };

            res.status(200).send(data);
        }
    }).catch((err) => {
        console.log("error" + err)
    });

}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
};