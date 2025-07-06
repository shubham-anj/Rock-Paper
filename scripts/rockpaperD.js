  function pickccomputermove()
      {
        let computermove = ' ';
        const randnum = Math.random();   
        if (randnum >= 0 && randnum < 1/3)
          {
            computermove = 'rock';
          }
          else if(randnum >= 1/3 && randnum < 2/3)
          {
            computermove = 'paper';
          }
          else if(randnum >= 2/3 && randnum < 1)
          {
            computermove = 'scissors';
          }

          return computermove; // mai kuchh bhi return krva lun function
          //  pe koi dikkat nahi ayegi 

      }

      let score = JSON.parse(localStorage.getItem('score'))
      || {
        wins : 0,
        losses : 0,
        ties : 0
      };

      updatescore();
      /*
      if ('score' === null)
      {
        wins : 0,
        losses : 0,
        ties : 0
      }
        */

    
      // console.log(localStorage.getItem('score'));
      // console.log(typeof localStorage.getItem('score'));

      
      // console.log(typeof JSON.parse(localStorage.getItem('score')));

      

      function playgame(playermove)
      {
        

        let computermove = pickccomputermove();
        let result = '';
        if (playermove === 'scissors')
       {
         

          if (computermove === 'rock')
          {
            result = 'You lose';
          }
          else if(computermove === 'paper')
          {
            result = 'You win';
          }
          else if (computermove === 'scissors')
          {
            result = 'Tie';
          }

         

       }

       if (playermove === 'paper')
       {

         if (computermove === 'rock')
          {
            result = 'You win';
          }
          else if(computermove === 'paper')
          {
            result = 'Tie';
          }
          else if (computermove === 'scissors')
          {
            result = 'You lose';
          }

       }

        if (playermove === 'rock')
        {

         if (computermove === 'rock')
          {
            result = 'Tie';
          }
          else if(computermove === 'paper')
          {
            result = 'You lose';
          }
          else if (computermove === 'scissors')
          {
            result = 'You win';
          }

       }

       if (result === 'You win')
          {
            score.wins ++;

          }
          else if (result === 'You lose'){
            score.losses++;
          }
          else if (result === 'Tie'){
            score.ties++;
          }

          localStorage.setItem('score', JSON.stringify(score));

          updatescore();

          document.querySelector('.js-result')
          .innerHTML = result;

         document.querySelector('.js-move')
          .innerHTML = ` You 
          <img src="images/${playermove}.png" class="move-icon">
          <img src="images/${computermove}.png" class="move-icon">
          Computer`;

     /*
       alert(`You picked ${playermove}. 
         Computer picked ${computermove}. ${result} 
         Wins: ${score.wins} , Losses:${score.losses} , Ties:${score.ties} `);
          console.log(computermove);
          console.log(score); 
          */
      }

      function updatescore(){
         document.querySelector('.js-score')
      .innerHTML = 
      `Wins:${score.wins},  Losses:${score.losses}, Ties:${score.ties}`;
      }

