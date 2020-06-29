angular.module('app', ['ngMaterial', 'ngMessages']);

/*--------------------- Start Teams Component ---------------------*/
const teams = {
    templateUrl: './teams/team.html',
    controller: 'TeamController'
}

// Bets Component with Routing (Routed / Stateful)
angular.module('app').component('teams', teams);

// Bets Controller with dependency injection using the array method
angular.module('app').controller('TeamController', ['TeamService', '$http', function (TeamService, $http) {
    const ctrl = this;
    
    ctrl.team_info = {
    "jolm":
        {
            "firstName": "Jack",
            "lastName": "Olmanson",
            "bio": "Notre Dame. Guinness. Steds. Fantasy Football. What other words are there to be said? Row the boat, ski u mah, skol irish. Although there have been some near sacko finishes, there has also been a second and third place finish. Some day the elusive championship will come. Melvin!",
            "draft picks": ["1", "2", "3", "4", "5", "6", "7", "8", "8 (via Bob)", "9", "10", "11", "12", "13", "14", "15", "15 (via Bob)"],
            "pic-name": "olmanson",
            "pic-description": "Jack enjoying a night out with his tree friend, Rufus. What a Friday!"
        }, 
    "ross":
        {
            "firstName": "Jack",
            "lastName": "Rothstein",
            "bio": "The Celtics in the 60's. The Steelers in the 70's. The 49ers in the 80's. The Bulls in the 90's. The Patriots in the 2000's. And Jack Rothstein in the 2010's. With three championships in the first four years of the league, we literally had to reset everything and change the rules. That's powerful. Although he may not be as fierce as he once was (not saying he isn't good, just not <i>win every year good</i>), he still made the playoffs last year and has a good foundation for the future.",
            "draft picks": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"],
            "pic-name": "rothstein",
            "pic-description": "Jack making an athletic grab as first baseman. He would be an asset for the Hamel Hawks!"
        }, 
    "hags":
        {
            "firstName": "Matt",
            "lastName": "Hagan",
            "bio": "Poor Hags. Twice Sacko. Had to take the ACT as punishment. Was good one year at least. You'd think he'd have some insider information from Bob H the PR superstar. Oh well.",
            "draft picks": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"],
            "pic-name": "hagan",
            "pic-description": "Matt is making an expert return against Minnetonka here. Go Trojans!"
        },
    "urbs":
        {
            "firstName": "Andrew",
            "lastName": "Urban",
            "bio": "Made some good draft picks and pickups to win the league last year. He's the champion until he's not, but he has some decisions to make with both Dalvin and DeAndre likely requiring a first round pick to be kept",
            "draft picks": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"],
            "pic-name": "urban",
            "pic-description": "Andrew making a push for everyone to join the army. Strange when he himself is not in the army?"
        },
    "ains":
        {
            "firstName": "Luke",
            "lastName": "Ainsworth",
            "bio": "Classic Ains. The only league member to never reach the playoffs in the first four years of the league, he finally struck gold and snuck in due to the decision to have divisions (green would have made it over him if not). His sacko year was a light punishment, only the blazin' challenge, although still not something many would enjoy. Maybe last year will be momentum into the next. It should also be noted he is a Beta frat star.",
            "draft picks": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"],
            "pic-name": "ainsworth",
            "pic-description": "Luke is holding his friend Kodi the koala."
        },
    "bob":
        {
            "firstName": "Bobby",
            "lastName": "Isbell",
            "bio": "Bob's a newcomer to the league, and he really took the league by storm with losing his first 3 or 4 games. However, he responded by making two bold trades and then scoring 250 points (a league record). He won consolation, meaning he has the best lottery odds, and he has some of the best keeper options in the league. Could be a big year next year.",
            "draft picks": ["1", "2", "3", "4", "5", "6", "7", "9", "10", "11", "12", "13", "14", "16", "16 (via Jolm)", "17", "17 (via Jolm)"],
            "pic-name": "isbell",
            "pic-description": "Bobby making a great throw for the Trojans. Great work, Bobby Baseball!"
        }, 
    "brent":
        {
            "firstName": "Brent",
            "lastName": "Prodahl",
            "bio": "Nearly called his shot. High confidence entering the league, and he ends up with a second place finish. He hit on many draft picks, so he has another year to try to capitalize before it may become too costly to keep the core. If Goetz can get a sacko, maybe Brent can too. The rest of us can only hope.",
            "draft picks": ["1", "2", "2 (from Green)", "3", "4", "5", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"],
            "pic-name": "prodahl",
            "pic-description": "Brent holding a roll of toilet paper he won from his apartment."
        },
    "chad": 
        {
            "firstName": "Chad",
            "lastName": "Musser",
            "bio": "Trust the process. Chad was always planning for the future in the previous years of the league, but now that the league reset he is full speed ahead. He was easily the best team last year, and has many great keeper options for next year. He should easily repeat as one of the top teams. In Lamar and CMC we trust.",
            "draft picks": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"],
            "pic-name": "musser",
            "pic-description": "Chad smiling big for the camera in a baseball photoshoot"
        },
    "glaze":
        {
            "firstName": "Ethan",
            "lastName": "Glaser",
            "bio": "Glaaaaaaaaze. He's got a machine learning thing going for fantasy, so maybe he's gonna make some moves next year. Never sacko competitor, but also not really one to make deep runs into the playoffs. Maybe it'll change, maybe not.",
            "draft picks": ["1", "2", "3", "4", "4 (via Goetz)", "5", "6", "6 (via Goetz)", "7", "8", "8 (via Goetz)", "9", "11", "12", "14", "16", "17"],
            "pic-name": "glaser",
            "pic-description": "Ethan is a strong advocate for pursuing research opportunities. Smart man!"
        },
    "goetz":
        {
            "firstName": "Nick",
            "lastName": "Goetz",
            "bio": "Goetz has been a big mouth in the league since its inception, although his team is more well known for its blunders than its successes. An accurate NFL comparison could be the Bills or Vikings (skol). What are these blunders you may ask? L3 and sacko are the first to come to mind.",
            "draft picks": ["1", "2", "3", "5", "7", "9", "10", "10 (via Glaze)", "11", "12", "13", "13 (via Glaze)", "15", "15 (via Glaze)", "16", "17", "17 (via Spitty)"],
            "pic-name": "goetz",
            "pic-description": "Goetz wearing his newly bought sacko shirt in Africa. Looks great, Nick!"
        },
    "green": 
        {
            "firstName": "Eli",
            "lastName": "Greenblat",
            "bio": "Quite the wildcard. One year, he's making the playoffs with a sub .500 record and winning the championship (the only non-Rothstein winner before resetting the league). Then, another year he's missing the playoffs after going 8-5. Never afraid to make some bold trades. Personally, he would be the most entertaining sacko of the people who have yet to earn the title.",
            "draft picks": ["1", "3", "4", "5", "6", "6 (via Brent)", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"],
            "pic-name": "greenblat",
            "pic-description": "Eli is smiles only after qualifying for the state geo bee. Good luck Eli!"
        },
    "spitty": 
        {
            "firstName": "Zach",
            "lastName": "Spiczka",
            "bio": "Not consiered  an expansion team, instead as a reclassified franchise. Finished as a bottom three team his first year running the show, but it can take time to build a contender. Don't be surprised if he gets a playoff win this year.",
            "draft picks": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "14 (via Goetz)", "15", "16"],
            "pic-name": "spiczka",
            "pic-description": "Zach looks off into the distance after dismounting his ATV."
        }    
}
    info = ctrl.team_info;
    ctrl.team_select = {
       name: "jolm" 
    };
    
     var name = ctrl.team_select.name;
    console.log(info[name].firstName);
 //   console.log(ctrl.team_info[name].firstName);
    ctrl.firstName = info[name].firstName;
    
    ctrl.changeMember = function() {
        var owner = document.getElementById('team-select');
        var radios = document.getElementById('team-select');

        for (var i = 0, length = radios.length; i < length; i++) {
          if (radios[i].checked) {
            // do whatever you want with the checked radio
            var owner = (radios[i].value);

            // only one radio can be logically checked, don't check the rest
            break;
          }
        }
        console.log('owner: ', owner);
        ctrl.firstName = ctrl.team_info[owner].firstName;
        document.getElementById('name').innerHTML = ctrl.team_info[owner].firstName.concat(' ', ctrl.team_info[owner].lastName);
        document.getElementById('bio').innerHTML = ctrl.team_info[owner].bio;
        console.log(ctrl.team_info[owner]);
        ctrl.pic_source = '/images/teams/prof-pic-'.concat(ctrl.team_info[owner]['pic-name'], '.jpg');
        ctrl.pic_description = ctrl.team_info[owner]['pic-description'];
    
        document.getElementById('prof-pic').src = ctrl.pic_source;
        document.getElementById('prof-pic').alt = ctrl.pic_description;
        
        ctrl.draft = ctrl.team_info[owner]['draft picks'];
        console.log(ctrl.draft);
        
        // long way to make the url be url/olmanson
        TeamService.getKeepers(ctrl.team_info[owner]['pic-name']).then(function(keeper_data){
            console.log(keeper_data.data[0])
            ctrl.keepers = keeper_data.data;
            console.log(ctrl.keepers[0][0])
            // assign each id of players in the table; kinda hacky but it works
            for (var i = 0; i < 17; i++) {
                string1 = 'p'.concat(i);
                string2 = 't'.concat(i);
                string3 = 'k'.concat(i);
                document.getElementById(string1).innerHTML = ctrl.keepers[i][0]
                document.getElementById(string2).innerHTML = ctrl.keepers[i][1]
                document.getElementById(string3).innerHTML = ctrl.keepers[i][2]
            }
            
            
        })
    }
    
   
    
//    ctrl.updateTeams = updateTeams;
//    function updateTeams(flag) {
//        const ctrl = this;
//        ctrl.flag = flag;
//    }
//    var teams = TeamService.getTeams().then(function(team_data){ //bets
//        var name = ctrl.team_select;
//        
////        console.log(name);
//        ctrl.team_data = team_data;
//        ctrl.teams = ctrl.team_data.data;
//   //     console.log(ctrl.teams);
//        
//        ctrl.firstName = ctrl.teams.team_value;
////        console.log(ctrl.firstName);
//        return ctrl.teams
//    });
   
//    var team = teams.then(function(team) { // make this on event?
//        name = ctrl.team_select.name;
//        console.log( team[name].firstName);
//        document.getElementById('owner-name').textContent = team[name].firstName;
//        
//    });
    
   
    
    
    
    
}]);
/*--------------------- End Teams Component ---------------------*/




///*--------------------- Start Settings Component ---------------------*/
//const settings = {
//    templateUrl: '',
//    controller: 'SettingsController'
//}
//
//// Settings Component with Routing (Routed / Stateful)
//angular.module('app').component('settings', settings)
//
//// Settings Controller with dependency injection using $inject method
//function SettingsController(ExampleService) {
//
//}
//SettingsController.$inject = ['ExampleService'];
//angular.module('app').controller('SettingsController', SettingsController);
///*--------------------- End Settings Component ---------------------*/
//
///*--------------------- Start Example Service ---------------------
//function ExampleService() {
//    // Services are Singletons
//    // Properties
//    // Methods
//}
//angular.module('app').service('ExampleService', ExampleService)
//--------------------- End Example Service ---------------------*/
//
///*--------------------- Start GameService ---------------------*/

   
function TeamService($http){
    const self = this;
    self.getTeams = getTeams;
    self.getKeepers = getKeepers;
//    self.createBet = createBet;
    function getTeams(){ 
        /* gets the available bets to be made */
        return $http.get(`./team-info.json`);
    }
    function getKeepers(owner) {
        var url = 'https://steady-fin-277418.uc.r.appspot.com/'.concat(owner);
        console.log(url);
        return $http.get(url)
    }
//    self.getUser = getUser;
//    function getUser(){ // pull the json user data
//        var d = $http.get('json/user-data.json');
////        console.log("Hello")
//        return d;
    }
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

angular.module('app').service('TeamService', TeamService);
TeamService.$inject = ['$http'];

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










