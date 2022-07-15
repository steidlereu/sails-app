module.exports = {


  friendlyName: 'Add product',


  description: 'Adding new product',


  inputs: {
    itemName: {
      type: 'string',
      maxLength: 255,
      required: true,
    },

    itemDescription: {
      type: 'string',
      maxLength: 255,
      required: true,
    },

    itemNumber: {
      type: 'string',
      maxLength: 255,
      required: true,
    },

    manufacturer: {
      type: 'string',
      maxLength: 255,
      required: true,
    },

    unit: {
      type: 'string',
      maxLength: 255,
      required: true,
    },

    packageSize: {
      type: 'number',
      required: true,
    },

    category: {
      type: 'string',
      maxLength: 255,
      required: true,
    },

    restriction: {
      type: 'string',
      maxLength: 255,
      required: true,
    },

    ageRestriction: {
      type: 'string',
      maxLength: 255,
      required: true,
    },

    price: {
      type: 'number',
      required: true,
    },

    currency: {
      type: 'string',
      maxLength: 255,
      required: true,
    },

    tax: {
      type: 'number',
      required: true,
    },

    taxCategory: {
      type: 'string',
      maxLength: 255,
      required: true,
    },

    isbn: {
      type: 'number',
      minLength: 13,
      maxLength: 13,
    },

    upc: {
      type: 'number',
      minLength: 12,
      maxLength: 12
    },

    ean: {
      type: 'number',
      minLength: 8,
      maxLength: 13
    },

    gtin: {
      type: 'number',
      minLength: 13,
      maxLength: 13
    },

    productLink: {
      type: 'string',
      maxLength: 255,
      isURL: true
    },

    productImageLink: {
      type: 'string',
      maxLength: 255,
      isURL: true
    },

    note: {
      type: 'string',
    },
  },

  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: '/'
    },
    serverError: {
      description: 'Error creating new product.',
      responseType: 'notFound'
    }
  },


  fn: async function (inputs) {

    // eslint-disable-next-line no-undef
    var createdProduct = await Product.create(inputs).fetch();

    if (!createdProduct) { throw 'serverError'; }

    sails.log('created Product ID is:', createdProduct.id);

    return;

  }

};
