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
	$scope.imgsrc="0.jpg"
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
		{	$scope.imgsrc="death.jpg"
			alert("You lost...")
			$timeout(function(){
				newGame();
				$scope.imgsrc="0.jpg"

			}, 3000)
		}
		if($scope.displayWord.indexOf('*')==-1)
		{
			alert("You Won and saved a stick mans life!")
			$timeout(function(){
				newGame();

			}, 500)
		}
		if ($scope.guesses==5)
		{
			$scope.imgsrc="head.png"
		}
		if ($scope.guesses==4)
		{
			$scope.imgsrc="h+body.png"
		}
		if ($scope.guesses==3)
		{
			$scope.imgsrc="third.png"
		}
		if ($scope.guesses==2)
		{
			$scope.imgsrc="4.png"
		}
		if ($scope.guesses==1)
		{
			$scope.imgsrc="5.png"
		}

	}
	newGame();
	}])

