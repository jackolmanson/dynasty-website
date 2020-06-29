angular.module('lottery', ['ngMaterial', 'ngMessages']);

/*--------------------- Start Teams Component ---------------------*/
const lotto = {
    templateUrl: '../lottery/lotto.html',
    controller: 'LotteryController'
}

// Bets Component with Routing (Routed / Stateful)
angular.module('lottery').component('lotto', lotto);

// Bets Controller with dependency injection using the array method
angular.module('lottery').controller('LotteryController', ['LotteryService', '$http', function (LotteryService, $http) {
    const ctrl = this;
    

    
   
    var mock = LotteryService.getMock($http).then(function(lottery_data){ //bets
        console.log(lottery_data.data.results);
        ctrl.mock_results = lottery_data.data.results;
    })
    
    
    
}]);

///*--------------------- Start GameService ---------------------*/

   
function LotteryService($http){
    const self = this;
    self.getMock = getMock;
////    self.createBet = createBet;
//    function getTeams(){ 
//        /* gets the available bets to be made */
//        return $http.get(`./team-info.json`)
    
    function getMock($http){
       return $http.get('https://steady-fin-277418.uc.r.appspot.com/lottery')
    }
}
//    }
//    self.getUser = getUser;
//    function getUser(){ // pull the json user data
//        var d = $http.get('json/user-data.json');
////        console.log("Hello")
//        return d;
    
//    /*
//    function createBet(wager, betID, selection) { 
//        /* makes note of the user making a bet, specifically regarding the wager and the id of the bet */
//        return this.$http({
//            method: 'POST',
//            url: '/json',
//            data: {
//                betID,
//                wager,
//                selection
//            }
//        })
//    }
//}

angular.module('lottery').service('LotteryService', LotteryService);
LotteryService.$inject = ['$http'];

/* -------------------- End GameService ---------------------*/


/*--------------------- Start User Component ---------------------*/
//const user = {
//    templateUrl: './user/user.html',
//    controller: 'UserController'
//}
//
//// User Component with Routing (Routed / Stateful)
//angular.module('app').component('user', user);
//
//// User Controller with dependency injection using the array method
//angular.module('app').controller('UserController', ['GameService', '$http', function (GameService, $http) {
//    const ctrl = this;
//    var mainInfo = [];
//    var d = GameService.getUser().then(function(data) { // gather information about the user to put into the html file
//        ctrl.data = data;
//        console.log(ctrl.data.data[0]["firstName"]);
//        ctrl.firstName=ctrl.data.data[0]["firstName"];
//        ctrl.lastName=ctrl.data.data[0]["lastName"];
//        ctrl.email=ctrl.data.data[0]["email"];
//        ctrl.uid=ctrl.data.data[0]["uid"];
//        ctrl.username=ctrl.data.data[0]["username"];
//        ctrl.balance=ctrl.data.data[0]["balance"];
//        ctrl.bets=ctrl.data.data[0]["bets"];
//}, function (error){
//    console.log(error);
//    });
//    console.log(ctrl.firstname)
//   
//}]);
/*--------------------- End User Component ---------------------*/











