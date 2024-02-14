
function myfunc() { 

	var b1, b2, b3, b4, b5, b6, b7, b8, b9; 
	b1 = document.getElementById("t1").value; 
	b2 = document.getElementById("t2").value; 
	b3 = document.getElementById("t3").value; 
	b4 = document.getElementById("t4").value; 
	b5 = document.getElementById("t5").value; 
	b6 = document.getElementById("t6").value; 
	b7 = document.getElementById("t7").value; 
	b8 = document.getElementById("t8").value; 
	b9 = document.getElementById("t9").value; 

	var b1btn, b2btn, b3btn, b4btn, b5btn, 
		b6btn, b7btn, b8btn, b9btn; 	
	b1btn = document.getElementById("t1"); 
	b2btn = document.getElementById("t2"); 
	b3btn = document.getElementById("t3"); 
	b4btn = document.getElementById("t4"); 
	b5btn = document.getElementById("t5"); 
	b6btn = document.getElementById("t6"); 
	b7btn = document.getElementById("t7"); 
	b8btn = document.getElementById("t8"); 
	b9btn = document.getElementById("t9"); 

	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || 
		b2 == 'X') && (b3 == 'x' || b3 == 'X')) { 
		document.getElementById('print') .innerHTML = "Player X won"; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "red"; 
		b2btn.style.color = "red"; 
		b3btn.style.color = "red"; 
	} 
	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || 
		b4 == 'X') && (b7 == 'x' || b7 == 'X')) { 
		document.getElementById('print') .innerHTML = "Player X won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "red"; 
		b4btn.style.color = "red"; 
		b7btn.style.color = "red"; 
	} 
	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || 
		b8 == 'X') && (b9 == 'x' || b9 == 'X')) { 
		document.getElementById('print') .innerHTML = "Player X won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 

		b7btn.style.color = "red"; 
		b8btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || 
		b6 == 'X') && (b9 == 'x' || b9 == 'X')) { 
		document.getElementById('print') .innerHTML = "Player X won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 

		b3btn.style.color = "red"; 
		b6btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b9 == 'x' || b9 == 'X')) { 
		document.getElementById('print') .innerHTML = "Player X won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 

		b1btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b7 == 'x' || b7 == 'X')) { 
		document.getElementById('print') .innerHTML = "Player X won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b3btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b7btn.style.color = "red"; 
	} 
	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b8 == 'x' || b8 == 'X')) { 
		document.getElementById('print').innerHTML = "Player X won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b9btn.disabled = true; 

		b2btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b8btn.style.color = "red"; 
	} 
	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b6 == 'x' || b6 == 'X')) { 
		document.getElementById('print') .innerHTML = "Player X won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b4btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b6btn.style.color = "red"; 
	} 
	else if ((b1 == '0' || b1 == '0') && (b2 == '0' || 
		b2 == '0') && (b3 == '0' || b3 == '0')) { 
		document.getElementById('print') .innerHTML = "Player 0 won"; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "red"; 
		b2btn.style.color = "red"; 
		b3btn.style.color = "red"; 
	} 
	else if ((b1 == '0' || b1 == '0') && (b4 == '0' || 
		b4 == '0') && (b7 == '0' || b7 == '0')) { 
		document.getElementById('print') .innerHTML = "Player 0 won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "red"; 
		b4btn.style.color = "red"; 
		b7btn.style.color = "red"; 
	} 
	else if ((b7 == '0' || b7 == '0') && (b8 == '0' || 
		b8 == '0') && (b9 == '0' || b9 == '0')) { 
		document.getElementById('print') .innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 

		b7btn.style.color = "red"; 
		b8btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b3 == '0' || b3 == '0') && (b6 == '0' || 
		b6 == '0') && (b9 == '0' || b9 == '0')) { 
		document.getElementById('print') .innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b3btn.style.color = "red"; 
		b6btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b1 == '0' || b1 == '0') && (b5 == '0' || 
		b5 == '0') && (b9 == '0' || b9 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 

		b1btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b3 == '0' || b3 == '0') && (b5 == '0' || 
		b5 == '0') && (b7 == '0' || b7 == '0')) { 
		document.getElementById('print') .innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b3btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b7btn.style.color = "red"; 
	} 
	else if ((b2 == '0' || b2 == '0') && (b5 == '0' || 
		b5 == '0') && (b8 == '0' || b8 == '0')) { 
		document.getElementById('print') .innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b9btn.disabled = true; 

		b2btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b8btn.style.color = "red"; 
	} 
	else if ((b4 == '0' || b4 == '0') && (b5 == '0' || 
		b5 == '0') && (b6 == '0' || b6 == '0')) { 
		document.getElementById('print') .innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b4btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b6btn.style.color = "red"; 
	} 

	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
		|| b2 == '0') && (b3 == 'X' || b3 == '0') && 
		(b4 == 'X' || b4 == '0') && (b5 == 'X' || 
			b5 == '0') && (b6 == 'X' || b6 == '0') && 
		(b7 == 'X' || b7 == '0') && (b8 == 'X' || 
			b8 == '0') && (b9 == 'X' || b9 == '0')) { 
		document.getElementById('print') .innerHTML = "Match Tie"; 
	} 
	else { 

		// Printing Result 
		if (flag == 1) { 
			document.getElementById('print') .innerHTML = "Player X Turn"; 
		} 
		else { 
			document.getElementById('print') .innerHTML = "Player 0 Turn"; 
		} 
	} 
} 

// Function for reseting the game 
function myfunc_2() { 
	location.reload(); 
	b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = ''; 
} 

// Here we are checking the turn of the players
flag = 1; 
function myfunc_3() { 
	if (flag == 1) { 
		document.getElementById("t1").value = "X"; 
		document.getElementById("t1").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("t1").value = "0"; 
		document.getElementById("t1").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_4() { 
	if (flag == 1) { 
		document.getElementById("t2").value = "X"; 
		document.getElementById("t2").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("t2").value = "0"; 
		document.getElementById("t2").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_5() { 
	if (flag == 1) { 
		document.getElementById("t3").value = "X"; 
		document.getElementById("t3").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("t3").value = "0"; 
		document.getElementById("t3").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_6() { 
	if (flag == 1) { 
		document.getElementById("t4").value = "X"; 
		document.getElementById("t4").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("t4").value = "0"; 
		document.getElementById("t4").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_7() { 
	if (flag == 1) { 
		document.getElementById("t5").value = "X"; 
		document.getElementById("t5").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("t5").value = "0"; 
		document.getElementById("t5").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_8() { 
	if (flag == 1) { 
		document.getElementById("t6").value = "X"; 
		document.getElementById("t6").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("t6").value = "0"; 
		document.getElementById("t6").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_9() { 
	if (flag == 1) { 
		document.getElementById("t7").value = "X"; 
		document.getElementById("t7").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("t7").value = "0"; 
		document.getElementById("t7").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_10() { 
	if (flag == 1) { 
		document.getElementById("t8").value = "X"; 
		document.getElementById("t8").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("t8").value = "0"; 
		document.getElementById("t8").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_11() { 
	if (flag == 1) { 
		document.getElementById("t9").value = "X"; 
		document.getElementById("t9").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("t9").value = "0"; 
		document.getElementById("t9").disabled = true; 
		flag = 1; 
	} 
} 
