// inventoryItemsCreate.js
var faker = require('faker')
function generateInventoryItems () {
  var inventoryItems = []
  for (var id = 0; id < 10; id++) {
    var name = faker.name.name()
    inventoryItems.push({
      "id": id,
      "name": name,
      "unitsOnHand": 10
    })
  }
  return { "inventoryItems": inventoryItems }
}
module.exports = generateInventoryItems
