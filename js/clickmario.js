window.onload = function(){

		const audio_back = document.getElementById('audio_back');

		const mario = document.getElementById("mario");
		const luigi = document.getElementById("luigi");
		const road = document.getElementById("road");
		const score = document.getElementById("score");
		const die = document.getElementById("die");
		const final = document.getElementById("final");
		const msg = document.getElementById("msg");
		const close = document.getElementById("close");
		const life = document.getElementsByClassName("life");
		const audio = document.getElementById('audio');
		const audio_two = document.getElementById('audio_two');
		


		let mario_point = 0;
		let luigi_point = 0;
		let final_score = mario_point + luigi_point;
		let health=15;
		score.value= final_score;


		function playAudio() {
  				audio.play();
		}

		function playClickAudio() {
  				audio_two.play();
		}

		function stopBackAudio() {
  				audio_back.pause();
		}
		function playBackAudio() {
  				audio_back.play();
		}



		if(mario){
			mario.addEventListener("click", (e)=>{
				if(health>=5 && health < 10){
					life[0].hidden = true;
				}else if(health>=0 && health < 5){
					life[1].hidden = true;
				}else if( health < 0){
					life[2].hidden = true;
					die.hidden=false;
					playAudio();
                	mario.style.animationIterationCount= "0";
                	final_score = mario_point+luigi_point;
                	final.innerHTML = final_score;
                	stopBackAudio();
				}
				else{
					playClickAudio();
					mario_point+=5;
					final_score = mario_point+luigi_point;
					score.value=final_score;
				}
			})
		}

		if(luigi){
			luigi.addEventListener("click", (e)=>{
				if(health>=5 && health < 10){
					life[0].hidden = true;
				}else if(health>=0 && health < 5){
					life[1].hidden = true;
				}else if( health < 0){
					life[2].hidden = true;
					die.hidden=false;
					playAudio();
                	luigi.style.animationIterationCount= "0";
                	final_score = mario_point+luigi_point;
                	final.innerHTML = final_score;
                	stopBackAudio();
				}else{
					playClickAudio();
					luigi_point++;
					final_score = mario_point+luigi_point;
					score.value = final_score;
					
				}
			})
		}

		if(road){
			road.addEventListener("click", (e)=>{
				health--;
				if(health>=5 && health < 10){
					life[0].hidden = true;
				}else if(health>=0 && health < 5){
					life[1].hidden = true;
				}else if( health < 0){
					life[2].hidden = true;
					die.hidden=false;
					playAudio();
					mario.style.animationIterationCount = "0"
                	luigi.style.animationIterationCount= "0";
                	final.innerHTML = final_score;
                	stopBackAudio();
				}

			})
		}

		if(msg || close){
			close.addEventListener("click", (e)=>{
				msg.hidden=true;
				playBackAudio();
			})
		}


	}