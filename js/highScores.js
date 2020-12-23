//Variables
var scores = document.getElementById('listOfHighScores');

//If there are pastHighScores recorded in the local storage
if(localStorage.getItem('pastHighScores')){
    var highScores = JSON.parse(localStorage.getItem('pastHighScores'));
    highScores.sort(sortScores);
    for(i=0; i<highScores.length;i++){
        var user = document.createElement('div');
        user.innerHTML = highScores[i].initials + ': ' + highScores[i].score;
        scores.append(user);
    }
}else{
    alert("Sorry there aren't any scores recorded");
}

function sortScores(a,b){
        return (a.score < b.score)? 1 : -1;
}