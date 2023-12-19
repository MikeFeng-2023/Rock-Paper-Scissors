
      let score = JSON.parse(localStorage.getItem
        ('score'))||{
          Wins: 0,
          Loses: 0,
          Draw: 0
        };

      updateScoreElement();  

      //use addEventListener
      document.querySelector('.js-rock-button').addEventListener('click',()=>{
        comparePicks('Rock');    
      });  

      document.body.addEventListener('keydown',()=>{
        console.log("key pressed");
      });

      document.body.addEventListener('keydown',(event)=>{
        console.log(event.key);
      });

      document.body.addEventListener('keydown',(event)=>{
        if(event.key=='r'){
          comparePicks('Rock');
        }else if(event.key=='p'){
          comparePicks('Paper');
        }else if(event.key=='s'){
          comparePicks('Scissors');
        }
      });

      function comparePicks(myPick){
          let result = '';
          let randomNum = Math.random(); 
          let computerPick = '';

          if(randomNum >= 0 && randomNum <1/3){
            computerPick ='Rock';
          } else if(randomNum >= 1/3 && randomNum< 2/3){
            computerPick ='Paper';
          }else{
            computerPick ='Scissors';
          }

          if(myPick === 'Rock' ){
            if(computerPick === 'Rock'){
              result = 'It is a draw!';
            } else if(computerPick === 'Scissors'){
              result = 'You Win!'
            }else{
              result = 'You Lose!'
            }
          }else if(myPick === 'Scissors'){
            if(computerPick === 'Rock'){
              result = 'You Lose!';
            } else if(computerPick === 'Scissors'){
              result = 'It is a draw!'
            }else{
              result = 'You Win!'
            }
          }else{
            if(computerPick === 'Rock'){
              result = 'You Win!';
            } else if(computerPick === 'Scissors'){
              result = 'You Lose!'
            }else{
              result = 'It is a draw!';
            }
          }
          
          if(result === 'You Win!'){
              score.Wins++;
            } else if(result === 'You Lose!'){
              score.Loses++;
            }else{
              score.Draw++;
            }

          localStorage.setItem('score',JSON.stringify(score));   

          updateScoreElement();
          document.querySelector('.js-result')
              .innerHTML = result;

          document.querySelector('.js-picks')
              .innerHTML = `Your ${myPick} - ${computerPick} computer`;
      }

      function updateScoreElement(){
       
          document.querySelector('.js-score')
            .innerHTML = `Wins: ${score.Wins}, Loses:${score.Loses}, Draw: ${score.Draw}`;
          document.querySelector(".js-result")
            .innerHTML="Click any icon to start!";  
      


      }

      function resetScoreElement(){
        if(isAutoPlaying== false){
          document.querySelector('.js-score')
            .innerHTML = `Wins: ${score.Wins}, Loses:${score.Loses}, Draw: ${score.Draw}`;
          document.querySelector(".js-result")
            .innerHTML="Click any icon to start!";  
          document.querySelector(".js-picks")
            .innerHTML="";          
        }

      }

      var isAutoPlaying= false;
      let intervalID;

      function autoPlay(){
        if(!isAutoPlaying){
           intervalID = setInterval(function(){
            let randomNum = Math.random(); 
            let myPick = '';
            if(randomNum >= 0 && randomNum <1/3){
              myPick ='Rock';
            } else if(randomNum >= 1/3 && randomNum< 2/3){
              myPick ='Paper';
            }else{
              myPick ='Scissors';
            }
          comparePicks(myPick);
          }, 1000);   
          isAutoPlaying = true;
      
        }
        else{
          clearInterval(intervalID);
          isAutoPlaying = false;
        }

      }