module.exports = {


  friendlyName: 'View list product',


  description: 'Display "List product" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/ecommerce/list-product'
    }

  },


  fn: async function () {

    // eslint-disable-next-line no-undef
    var products = await Product.find();

    // Respond with view.
    return {
      products: products
    };

  }


};
