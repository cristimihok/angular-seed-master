'use strict';

eventsApp.controller('EventController',
	function EventController ($scope, eventData) {

		$scope.sortorder = 'name';
		$scope.buttonDisabled = 'true';
		$scope.myClass = 'blue';
		$scope.myStyle = {color: 'red'};
		$scope.boolValue = false;
		$scope.event = eventData.event;

		$scope.upVoteSession = function (session) {
			session.upVoteCount++;
		}


		$scope.downVoteSession = function (session) {
			session.upVoteCount--;
		}
	}
);