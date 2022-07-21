module.exports = {


  friendlyName: 'Remove inventory',


  description: '',


  inputs: {
    id: {
      type: 'number',
      required: true,
    },
    quantity: {
      type: 'number',
      required: true,
    },
    note: {
      type: 'string',
      maxLength: 255,
      required: true,
    },
    confirmation: {
      type: 'string',
      maxLength: 255,
      required: true,
    },
  },

  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: '/'
    },
    notFound: {
      description: 'No entry for ID was found in the database.',
      responseType: 'notFound'
    },
    serverError: {
      description: 'Error creating new product.',
      responseType: 'notFound'
    }
  },


  fn: async function (inputs) {

    // eslint-disable-next-line no-undef
    var inventory = await Inventory.findOne({ id: inputs.id });

    if (!inventory) { throw 'notFound'; }


    if (inputs.quantity > inventory.quantity) {
      throw 'serverError';
    }

    await Inventory.updateOne({ id: inventory.id })
      .set({
        quantity: (inventory.quantity - inputs.quantity),
        lastRemovel: Date.now()
      });

    await Product.create({
      quantity: inputs.quantity,
      input: false,
      note: inputs.note,
      confirmation: inputs.confirmation,
      inventory: inventory.id,
      booker: this.req.me.id
    }).fetch();

    // All done.
    return;

  }


};
