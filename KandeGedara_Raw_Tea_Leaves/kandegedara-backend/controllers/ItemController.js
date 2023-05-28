const ItemModel = require("../models/ItemModels");

//add new item
const addItem = async (req, res) => {
    const {
        itemID,
        itemName,
        itemRate,
        reduceAmountForWater,
        reduceAmountForBag,
        description,
        itemImg,
    } = req.body;

    const result = await ItemModel.find();
    const itemCount = result.length;

    //generate new custom id for item
    const autoGenerateItemId = `ITM${itemCount + 1}`;

    const mongooseRes = new ItemModel({
        itemID: autoGenerateItemId,
        itemName,
        itemRate,
        reduceAmountForWater,
        reduceAmountForBag,
        description,
        itemImg,
    })

    mongooseRes.save().then((result) => {
        res
            .status(200)
            .json({
                message: "Item added successfully",
                result: {
                    data: result,
                    response: true,
                },
            })
    });
}
// Read all items in the system
const getAllItems = async (req, res) => {
    let results = await ItemModel.find();
    if (!(results)) {
        res.status(500).json({
            message: "Error while getting all items",
            error: "Something went wrong",
        });
    } else {
        res.status(200).json({
            message: "All item details",
            data: results,
        });
    }
};
// update item details

const updateItem = async (req, res) => {
    const {
        itemID, itemName, itemRate, reduceAmountForWater, reduceAmountForBag, description, itemImg
    } = req.body;
    try {
        const result = await ItemModel.findOneAndUpdate({itemID: itemID}, {
            itemID, itemName, itemRate, reduceAmountForWater, reduceAmountForBag, description, itemImg
        });
        res.status(200).send({message: "Item updated successfully", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
};
//delete item
const deleteItem = async (req, res) => {
    const response = await ItemModel.findByIdAndDelete(req.params.id);
    if (!(response)) {
        res.status(500).send(err);
    } else {
        res.status(200).json({
            message: "Item Deleted successfully",
            result: {
                data: response,
                response: true,
            },
        });
    }
};
// search item
const getItemByID = async (req, res) => {
    const response = await ItemModel.findOne({itemID: req.params.id});
    if (!(response)) {
        res.status(500).send(err);
    } else {
        res.status(200).json({
            result: {
                data: response,
                response: true,
            },
        });
    }
};

module.exports = {
    addItem,
    getAllItems,
    updateItem,
    deleteItem,
    getItemByID,
};