player_1=localStorage.getItem("player1name");
player_2=localStorage.getItem("player2name");

score_one=0;
score_two=0;

question="player_one";
answer="player_two";

document.getElementById("name_1").innerHTML = player_1 + " : ";
document.getElementById("name_2").innerHTML = player_2 + " : ";

document.getElementById("score_one").innerHTML = score_one;
document.getElementById("score_two").innerHTML = score_two;


document.getElementById("question").innerHTML = "Question Turn - " + player_1;
document.getElementById("answer").innerHTML = "Answer Turn - " + player_2;

function send() {
	number_one = document.getElementById("number_one").value;
	number_two = document.getElementById("number_two").value;
	correct_answer = parseInt(number_one) * parseInt(number_two);
	console.log(correct_answer);

question_number = "<h3>" + number_one + " x "+ number_two +"</h3>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number_one").value = "";
	document.getElementById("number_two").value = "";
}

function check(){
    get_answer = document.getElementById("input_check_box").value;
	if(get_answer == correct_answer)	
	{
		if(answer == "player_one")
		{
			score_one = score_one + 1;
		    document.getElementById("score_one").innerHTML = score_one;
		}
		else 
		{
			score_two = score_two +1;
		    document.getElementById("score_two").innerHTML = score_two;
		}
	}

if(question == "player_one")
	{
		question = "player_two"
		document.getElementById("question").innerHTML = "Question Turn - " + player_2;
	}
	else 
	{
		question = "player_one"
		document.getElementById("question").innerHTML = "Question Turn - " + player_1;
	}

	if(answer == "player_one")
	{
		answer = "player_two"
		document.getElementById("answer").innerHTML = "Answer Turn - " + player_2;
	}
	else 
	{
		answer = "player_one"
		document.getElementById("answer").innerHTML = "Answer Turn - " + player_1;
	}
}

document.getElementById("output").innerHTML = "";