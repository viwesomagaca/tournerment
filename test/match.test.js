// Football tournament
//
// Your local Football club is hosting a Football tournament and would like to keep tally of all
// the goals that are scored. They would like to know in which match which player scored the goals,
// at what time in the match. For each player they would like to know their first name and position.
// For each match they would like to know the name of the two teams playing,
// and have the ability to track scores for a match.

const assert = require("assert");
const Team = require("../team");
const Match= require("../match");

describe('Tournerment Function', function() {

  it('should be able to keep tally of goals that are scored, Which match ?, also at what time in the match the goal was scored.', function() {
    var team1 = new Team("Chelsea","Courtois","Pedro","Alvaro","David","Diego","Mendoza","Hazard","Drinkwater","Moses","Salter","Rudiger");
    var team2 = new Team("Mancity","Ramesey","Mustafi","Xhaka","Locazette","Ozil","Walcott","Iwobi","Cazoria","Welbck","Monreal","Holding");
    let match = new Match(team1,team2);

    match.goal(team1,"Alvaro",40);
    match.goal(team1,"Alvaro",35);
assert.deepEqual(['Chelsea vs. Mancity at minute: 40. Goal scored by the Right back, Alvaro. He scored 1 goal(s).', 'Chelsea vs. Mancity at minute: 35. Goal scored by the Right back, Alvaro. He scored 2 goal(s).' ], match.counter());

})
  it('should be able to display the players firstname and Position.', function() {

    var team1 = new Team("Chelsea","Courtois","Pedro","Alvaro","David","Diego","Mendoza","Hazard","Drinkwater","Moses","Salter","Rudiger");
    var team2 = new Team("Mancity","Ramesey","Mustafi","Xhaka","Locazette","Ozil","Walcott","Iwobi","Cazoria","Welbck","Monreal","Holding");
    var match = new Match(team1,team2);


      match.goal(team1,"Pedro",92);
      match.goal(team1,"Pedro",23);
      match.goal(team1,"Pedro",18);
      match.goal(team2,"Xhaka",56);
      match.goal(team2,"Walcott",94);
      match.goal(team2,"Xhaka",32);
      match.goal(team1,"David",55);

      assert.deepEqual("Chelsea 4 : 3 Mancity", match.gameEnd());
  });
  it('should be able tell the names of the two teams that are playing.', function() {

    var team1 = new Team("Chelsea","Courtois","Pedro","Alvaro","David","Diego","Mendoza","Hazard","Drinkwater","Moses","Salter","Rudiger");
    var team2 = new Team("Mancity","Ramesey","Mustafi","Xhaka","Locazette","Ozil","Walcott","Iwobi","Cazoria","Welbck","Monreal","Holding");
    var team3 = new Team("Codex","Viwe","Amanda","Lubba","Chris","Loyiso","Thabang","Mbu","Nzulu","Mponeng","Dyllon","Oyama","Onwaba");

      let secondMatch = new Match(team1,team3);

      secondMatch.goal(team3,"Oyama",44);
      secondMatch.goal(team1,"Alvaro",89);
      secondMatch.gameEnd();

      let thirdMatch = new Match(team3,team2);

      thirdMatch.goal(team3,"Chris",50);
      thirdMatch.goal(team3,"Thabang",60);
      thirdMatch.goal(team2,"Locazette",91);
      thirdMatch.gameEnd();


      assert.deepEqual(["Chelsea 4 : 3 Mancity", "Chelsea 1 : 1 Codex", "Codex 2 : 1 Mancity"  ], thirdMatch.viewResults());
  });
  it('should be able to tell the Name and the position for each player.', function() {


      var team1 = new Team("Chelsea","Courtois","Pedro","Alvaro","David","Diego","Mendoza","Hazard","Drinkwater","Moses","Salter","Rudiger");
      var team2 = new Team("Mancity","Ramesey","Mustafi","Xhaka","Locazette","Ozil","Walcott","Iwobi","Cazoria","Welbck","Monreal","Holding");
      var match = new Match(team1,team2);

      match.goal(team1,"Alvaro",42);
      match.goal(team1,"Alvaro",56);
      match.goal(team1,"Alvaro",80);
      match.goal(team2,"Mustafi",82);
      match.goal(team2,"Mustafi",85);
      match.goal(team2,"Locazette",92);
      match.goal(team1,"Hazard",94);

      assert.deepEqual("Name: Alvaro; Position: Right back; Goals: 3", team1.playerStats("Alvaro"));
      assert.deepEqual("Name: Locazette; Position: Center back; Goals: 1", team2.playerStats("Locazette"));

  });
});
