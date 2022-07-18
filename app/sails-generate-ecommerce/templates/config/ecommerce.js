/**
 * E-Commerce Settings
 * (sails.config.ecommerce)
 *
 *
 * For a complete list of options for Sails' built-in i18n support, see:
 * https://sailsjs.com/config
 *
 */
 module.exports.ecommerce = {

    /***************************************************************************
    *                                                                          *
    * Which locales are supported?                                             *
    *                                                                          *
    ***************************************************************************/
  
     taxCategories: ['value tax'],

     currencies: ['euro', 'dollars'],
   
     restrictions: ['none', 'recipe', 'legal authorization'],
   
     ageRestrictions: ['none', '16', '18'],
   
     categories: ['electronics', 'fashion', 'medication'],
   
     units: ['piece', 'liter', 'milliliters', 'grams', 'kilogram', ]
  
  };
  