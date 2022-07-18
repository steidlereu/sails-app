/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

 module.exports = {

    attributes: {
  
      //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
      //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
      //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
  
      id: {
        type: 'number',
        autoIncrement: true,
        unique: true,
      },
  
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
        isIn: sails.config.ecommerce.units,
        maxLength: 255,
        required: true,
      },
  
      packageSize: {
        type: 'number',
        required: true,
      },
  
      category: {
        type: 'string',
        isIn: sails.config.ecommerce.categories,
        maxLength: 255,
        required: true,
      },
  
      restriction: {
        type: 'string',
        isIn: sails.config.ecommerce.restrictions,
        maxLength: 255,
        required: true,
      },
  
      ageRestriction: {
        type: 'string',
        isIn: sails.config.ecommerce.ageRestrictions,
        maxLength: 255,
        required: true,
      },
  
      price: {
        type: 'number',
        required: true,
      },
  
      currency: {
        type: 'string',
        isIn: sails.config.ecommerce.currencies,
        maxLength: 255,
        required: true,
      },
  
      tax: {
        type: 'number',
        required: true,
      },
  
      taxCategory: {
        type: 'string',
        isIn: sails.config.ecommerce.taxCategories,
        maxLength: 255,
        required: true,
      },
  
      isbn: {
        type: 'string',
        minLength: 13,
        maxLength: 13,
      },
  
      upc: {
        type: 'string',
        minLength: 12,
        maxLength: 12
      },
  
      ean: {
        type: 'string',
        minLength: 8,
        maxLength: 13
      },
  
      gtin: {
        type: 'string',
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
  
      createdAt: { type: 'number', autoCreatedAt: true, },
  
      updatedAt: { type: 'number', autoUpdatedAt: true, },
  
      //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
      //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
      //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
  
  
      //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
      //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
      //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
  
    },
  
  };