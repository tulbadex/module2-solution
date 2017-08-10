(function () {
   'use strict';

   angular.module('ShoppingListCheckOff', [])
      .controller('ToBuyController', ToBuyController)
      .controller('AlreadyBoughtController', AlreadyBoughtController)
      .service('ShoppingListCheckoffService', ShoppingListCheckoffService);

   ToBuyController.$inject = ['ShoppingListCheckoffService'];
   function ToBuyController(ShoppingListCheckoffService){
     var toBuyList = this;

     toBuyList.items = ShoppingListCheckoffService.getToBuyItems();

     toBuyList.buy = function(index) {
          ShoppingListCheckoffService.buyItem(index);
     };

     toBuyList.message = function () {
      return (toBuyList.items == "");
    };

   }

   AlreadyBoughtController.$inject = ['ShoppingListCheckoffService'];
   function AlreadyBoughtController(ShoppingListCheckoffService){
      var alreadyBoughtList = this;

      alreadyBoughtList.items = ShoppingListCheckoffService.getAlreadyBoughtItems();

      alreadyBoughtList.message = function () {
        return (alreadyBoughtList.items == "");
      };

   }

   function ShoppingListCheckoffService() {
     var service = this;

     // List of shopping items
     //Initialise to buy List
     var toBuyItems = [
       {name: 'Cookies', quantity: '5 bags'},
       {name: 'Fants', quantity: '5 bottle'},
       {name: 'Tang', quantity: '5 sachet'},
       {name: 'Burgger', quantity: '5 pieces'},
       {name: 'Shoes', quantity: '5 pairs'}
     ];

     var alreadyBoughtItems = [];

     service.getToBuyItems = function () {
       return toBuyItems;
     }

     service.getAlreadyBoughtItems = function() {
       return alreadyBoughtItems;
     }

     service.buyItem = function (itemIndex){
       // extract the item values
       var item = {
         name: toBuyItems[itemIndex].name,
         quantity: toBuyItems[itemIndex].quantity
       }
       // add to bought and remove from to buy
       alreadyBoughtItems.push(item);
       toBuyItems.splice(itemIndex, 1);

     };


   }

})();





















/*(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buy = this;

  buy.toBuyList = ShoppingListCheckOffService.toBuy();

  buy.remove = function (itemIdex) {
    ShoppingListCheckOffService.remove(itemIdex);
  };

  buy.message = function () {
    return (buy.toBuyList == "");
  };

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list = this;

  list.boughtList = ShoppingListCheckOffService.bought();

  list.message = function () {
    return (list.boughtList == "");
  };
}


function ShoppingListCheckOffService() {
  var service = this;

  service.toBuyList = [];
  service.bought = [];

  service.initialList = [
    {name: 'Cookies', quantity: '5 bags'},
    {name: 'Fants', quantity: '5 bottle'},
    {name: 'Tang', quantity: '5 sachet'},
    {name: 'Burgger', quantity: '5 pieces'},
    {name: 'Shoes', quantity: '5 pairs'},
  ]

  service.toBuy = function () {
    service.toBuyList = service.initialList;
    return service.toBuyList;
  };
*/
 /* service.remove = function (itemIdex) {
    var i = service.toBuyList.splice(itemIdex, 1)[0];
    service.bought.push(i);
    service.toBuyList.splice(itemIndex, 1);
    return (service.bought.push(itemIdex));
  };

  service.alredyBoughItem = function () {
    return bought;
  }

  service.remove = function (itemIndex){
    // extract the item values
    var item = {
      name: toBuyList[itemIndex].name,
      quantity: toBuyList[itemIndex].quantity
    }
    // add to bought and remove from to buy
    bought.push(item);
    toBuyList.splice(itemIndex, 1);
  };

}

})();
*/