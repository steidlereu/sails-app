module.exports = {


  friendlyName: 'View details product',


  description: 'Display "Details product" page.',

  inputs: {
    productId: {
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
      viewTemplatePath: 'pages/ecommerce/details-product'
    }

  },


  fn: async function ({productId}) {

    sails.log("productId");
    sails.log(productId);

    // eslint-disable-next-line no-undef
    var product = await Product.findOne({ id: productId });

    // If no entry was found, respond "notFound" (like calling `res.notFound()`)
    if (!product) { throw 'notFound'; }

    // Display a view.
    return {
      product: product
    };

  }


};
