module.exports = {


  friendlyName: 'Product price',


  description: '',


  inputs: {

    price: {
      type: 'number',
      required: true
    },

    tax: {
      type: 'number',
      required: true
    }

  },



  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {

    let tax = inputs.tax;
    let price = inputs.price;

    let floatingTax = tax / 100;
    let totalPrice = price * (1 + floatingTax);

    return (+(Math.round(10 * totalPrice + "e+2")  + "e-2")).toFixed(2);
  }


};

