module.exports = {


  friendlyName: 'View add inventory',


  description: 'Display "Add inventory" page.',

  inputs: {
    inventoryId: {
      description: '',
      // By declaring a numeric example, Sails will automatically respond with `res.badRequest`
      // if the `userId` parameter is not a number.
      type: 'number',
      // By making the `userId` parameter required, Sails will automatically respond with
      // `res.badRequest` if it's left out.
      required: true
    }
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/ecommerce/add-inventory'
    }

  },


  fn: async function ({inventoryId}) {

    sails.log("inventoryId");
    sails.log(inventoryId);

    // eslint-disable-next-line no-undef
    var inventory = await Inventory.findOne({ id: inventoryId }).populate('product');

    // If no entry was found, respond "notFound" (like calling `res.notFound()`)
    if (!inventory) { throw 'notFound'; }

    // Display a view.
    return {
      inventory: inventory
    };

  }


};
