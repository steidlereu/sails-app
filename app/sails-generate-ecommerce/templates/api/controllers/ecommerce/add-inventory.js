module.exports = {


  friendlyName: 'Add inventory',


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

    await Inventory.updateOne({ id: inventory.id })
      .set({
        quantity: (inventory.quantity + inputs.quantity),
        lastInsert: Date.now()
      });

    await InventoryHistory.create({
      quantity: inputs.quantity,
      input: true,
      note: inputs.note,
      confirmation: inputs.confirmation,
      inventory: inventory.id,
      booker: this.req.me.id
    }).fetch();

    // All done.
    return;

  }


};
