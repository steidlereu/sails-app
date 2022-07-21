const Inventory = require("../../models/ecommerce/Inventory");

module.exports = {


  friendlyName: 'View list inventory',


  description: 'Display "List inventory" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/ecommerce/list-inventory'
    }

  },


  fn: async function () {

    // eslint-disable-next-line no-undef
    var inventories = await Inventory.find().populate('product');

    // Respond with view.
    return {
      inventories: inventories
    };

  }


};
