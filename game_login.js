function login(){
    player1=document.getElementById("player_one").value;
    player2=document.getElementById("player_two").value;

    localStorage.setItem("player1name", player1);
    localStorage.setItem("player2name", player2);

    window.location="game_play.html";
}