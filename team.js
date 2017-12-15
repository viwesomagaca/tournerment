

module.exports = function(name,home,gk,rb,cb1,cb2,lb,rm,cm1,cm2,lm,st1,st2){
  const teamName = name;
  const homeStadium = home
  const players = [
    {position: 'Goalkeeper', name: gk, goals:0},
    {position: 'Right back', name: rb, goals:0},
    {position: 'Center back', name: cb1, goals:0},
    {position: 'Center back', name: cb2, goals:0},
    {position: 'Left back', name: lb, goals:0},
    {position: 'Right midfield', name: rm, goals:0},
    {position: 'Center midfield', name: cm1, goals:0},
    {position: 'Center midfield', name: cm2, goals:0},
    {position: 'Left midfield', name: lm, goals:0},
    {position: 'Striker', name: st1, goals:0},
    {position: 'Striker', name: st2, goals:0}
  ]

  this.teamplayer = function(name, position){
      for (var i=0;i<players.length;i++){
        return players[i].name + players[i].position
     }
   }

  this.goal = function(player){
    for (var i=0;i<players.length;i++){
      if (players[i].name == player){
        players[i].goals ++;
        return "Goal scored by the " + players[i].position + ", " + players[i].name + ". He scored " + players[i].goals + " goal(s)."
      }
    }
  }
  this.team = function(){
    return teamName
  }
  this.playerStats = function(player){
    for (var i=0;i<players.length;i++){
      if (players[i].name == player){
        return "Name: " + players[i].name + "; Position: " + players[i].position + "; Goals: " + players[i].goals
      }
    }
  }
}
