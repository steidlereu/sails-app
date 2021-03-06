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
    'GET /ecommerce/details-product/:productId': { action: 'ecommerce/view-details-product' },

    'GET /ecommerce/list-inventory': { action: 'ecommerce/view-list-inventory' },
    'GET /ecommerce/add-inventory/:inventoryId': { action: 'ecommerce/view-add-inventory' },
    'GET /ecommerce/remove-inventory/:inventoryId': { action: 'ecommerce/view-remove-inventory' },
    'GET /ecommerce/history-inventory/:inventoryId': { action: 'ecommerce/view-history-inventory' },

    'POST /api/v1/ecommerce/add-inventory': { action: 'ecommerce/add-inventory' },
    'DELETE /api/v1/ecommerce/remove-inventory': { action: 'ecommerce/remove-inventory' },
  };