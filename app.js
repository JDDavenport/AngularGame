var app=angular.module("HangmanApp", [])
 app.controller("GameController", ['$scope','$timeout',function($scope,$timeout){
	var words=["potato","amazing","godzilla","bottle","sam"]
	$scope.incorrectLettersChosen=[];
	$scope.correctLettersChosen=[];
	$scope.guesses =6;;
	$scope.displayWord ="";
	$scope.input = {
		letter : ''
	}
	var selectRandomWord =function(){
		var index= Math.round(Math.random()*words.length)
		return words[index];
	}
	var newGame = function(){
		$scope.incorrectLettersChosen =[];
		$scope.correctLettersChosen =[];
		$scope.guesses =6;
		$scope.displayWord='';

		selectedWord =selectRandomWord();
		console.log(selectedWord);
		var Display='';
		console.log(selectedWord.length);
		for (var i =0; i<selectedWord.length; i++)
		{  console.log(selectedWord.length);
			Display += '*';
		}
		$scope.displayWord=Display;
		
	}
	$scope.letterChosen =function(){
		var tempDisplay='';
		for (var i =0;i< $scope.correctLettersChosen.length ; i++) {
			if ($scope.correctLettersChosen[i].toLowerCase()== $scope.input.letter.toLowerCase())
			{
				$scope.input.letter="";
				return;
			}

		}
		for (var i =0;i< $scope.incorrectLettersChosen.length ; i++) {
			if ($scope.incorrectLettersChosen[i].toLowerCase()== $scope.input.letter.toLowerCase())
			{
				$scope.input.letter="";
				return;
			}

		}
		var correct=false;
		for (var i = 0; i < selectedWord.length; i++) {
			if(selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase())
			{
				$scope.displayWord=$scope.displayWord.slice(0,i)+$scope.input.letter.toLowerCase()+$scope.displayWord.slice(i+1)
				correct=true;
			}
		}
		if(correct)
		{
			$scope.correctLettersChosen.push($scope.input.letter.toLowerCase());
		}
		else
		{	$scope.guesses--;
			$scope.incorrectLettersChosen.push($scope.input.letter.toLowerCase());
		}
		console.log($scope.input.letter);
		$scope.input.letter="";
		if($scope.guesses==0)
		{
			alert("You lost !")
			$timeout(function(){
				newGame();

			}, 500)
		}
		if($scope.displayWord.indexOf('*')==-1)
		{
			alert("You Won !")
			$timeout(function(){
				newGame();

			}, 500)
		}
	}
	newGame();
	}])
