$(function(){
  $("#player1-submit").submit(function(event){
    var playerOneText = $("#player1-text").val();

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

    $('#form-hide').hide();
    $('#removeVowels').text(removeVowels(playerOneText));
    event.preventDefault();
  });
});
