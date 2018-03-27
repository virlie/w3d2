$(function(){
  var playerOneText;
  var playerTwoText;

  $('#player1-submit').submit(function(event){
    playerOneText = $('#player1-text').val();

    function removeVowels(str) {
      var newStrArray = [];
      var strToArray = str.split('');
      for (var i = 0; i < strToArray.length; i++) {
        if (strToArray[i] === 'a' || strToArray[i] === 'e' || strToArray[i] === 'i' || strToArray[i] === 'o' || strToArray[i] === 'u') {
	        strToArray[i] = '-';
	        newStrArray.push(strToArray[i]);
	      } else {
	        newStrArray.push(strToArray[i]);
	      }
      }
      return newStrArray.join('');
    }

    $('#player2-guess').show();
    $('#form-hide').hide();
    $('#removeVowels').text(removeVowels(playerOneText));
    event.preventDefault();
  });

  $('#player2-guess').submit(function(event) {
    playerTwoText = $('#player2-text').val();

    function compareStr(str1, str2) {
      var responseStr;
      if (str1 === str2) {
        responseStr = 'Good Job';
      } else {
        responseStr = 'Try Again';
      }
      return responseStr;
    }

    $('#response').text(compareStr(playerOneText, playerTwoText));
    event.preventDefault();
  });
});
