const drinks = require('../../drinks.json');
const inventoryItems = require('../../inventoryItems.json');
// Something more

module.exports = () => ({
  drinks: drinks,
  inventoryItems: inventoryItems
});
