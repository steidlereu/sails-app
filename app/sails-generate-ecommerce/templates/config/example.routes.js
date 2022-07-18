/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

 module.exports.routes = {
    // Custom
  
    // Commerce
    'GET /ecommerce/add-product': { action: 'ecommerce/view-add-product' },
    'POST /api/v1/ecommerce/add-product': { action: 'ecommerce/add-product' },
    'GET /ecommerce/list-product': { action: 'ecommerce/view-list-product' },
  
  };