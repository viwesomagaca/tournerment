
var allGoals = [];
var results = [];

module.exports = function(team1,team2) {
  const homeTeam = team1;
  const awayTeam = team2;
  const match = team1.team() + " vs. " + team2.team();

  var team1Goals = 0;
  var team2Goals = 0;


  this.goal = function(team,player,minute){
    var scoredGoals =  match + " at minute: " + minute + ". " +  team.goal(player);
    allGoals.push(scoredGoals);
    if (team == team1){
      team1Goals++;
    }else {
      team2Goals++;
    }
  }
  this.counter = function(){
  return allGoals
}


  this.gameEnd = function(){
    var result =  team1.team() + " " + team1Goals + " : " + team2Goals + " " + team2.team();
    results.push(result);
    return result;
  }

  this.viewResults = function(){
    return results
  }


}
