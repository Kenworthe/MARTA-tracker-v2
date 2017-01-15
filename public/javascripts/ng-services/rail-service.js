// angular.module('martaApp')
// 	.service('railService', function($http, $timeout){
// 		this.getAllTrains = function(){
// 			return $http.get('http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=e894d4a6-72ca-4268-94ec-af98560a3cc8');
// 		}
// 	})

angular.module('martaApp')
	.service('railService', function($http, $timeout){
		this.trains = ['AIRPORT STATION','ARTS CENTER STATION','ASHBY STATION','AVONDALE STATION','BANKHEAD STATION','BROOKHAVEN STATION','BUCKHEAD STATION','CHAMBLEE STATION','CIVIC CENTER STATION','COLLEGE PARK STATION','DECATUR STATION','DORAVILLE STATION','DUNWOODY STATION','EAST LAKE STATION','EAST POINT STATION','EDGEWOOD CANDLER PARK STATION','FIVE POINTS STATION','GARNETT STATION','GEORGIA STATE STATION','HAMILTON E HOLMES STATION','INDIAN CREEK STATION','INMAN PARK STATION','KENSINGTON STATION','KING MEMORIAL STATION','LAKEWOOD STATION','LENOX STATION','LINDBERGH STATION','MEDICAL CENTER STATION','MIDTOWN STATION','NORTH AVE STATION','NORTH SPRINGS STATION','OAKLAND CITY STATION','OMNI DOME STATION','PEACHTREE CENTER STATION','SANDY SPRINGS STATION','VINE CITY STATION','WEST END STATION'];
		
		this.getAllTrains = function(){
			return $http({
				method: 'GET',
				url: '/marta-rail'
			});
		}
	})