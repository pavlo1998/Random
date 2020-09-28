function randomExpression()
{
   let mainButton = document.getElementById('start');
   let buttonDiv = document.getElementById('buttons');
   mainButton.disabled = true;
   let createdSpan = document.createElement('span');
   createdSpan.innerHTML = Math.floor(Math.random() * 15);
   let num = document.getElementById('mathOper');
   let createdOperator = document.createElement('span');
   createdOperator.innerHTML = Math.floor(Math.random() * 3);
   
   let createdSpan2 = document.createElement('span');
   createdSpan2.innerHTML = Math.floor(Math.random() * 15);
   num.appendChild(createdSpan);
   num.appendChild(createdOperator);
   num.appendChild(createdSpan2);
   let result;
   switch(createdOperator.innerHTML)
   {
      case '0':
         createdOperator.innerHTML = '+';
         result = +createdSpan.innerHTML + +createdSpan2.innerHTML;
         break;
      case '1':
         createdOperator.innerHTML = '-';
         result = +createdSpan.innerHTML - +createdSpan2.innerHTML;
         break;
      case '2':
         createdOperator.innerHTML = '*';
         result = +createdSpan.innerHTML * +createdSpan2.innerHTML;
         break;
      case '3':
         createdOperator.innerHTML = '/';
         result = (+createdSpan.innerHTML / +createdSpan2.innerHTML).toFixed(2);
      break;
      
   }
   let res = result;

   
   let buttonFalse = document.createElement('button');
   buttonFalse.setAttribute('class', 'btn btn-secondary');
   let buttonTrue = document.createElement('button');
   buttonTrue.setAttribute('class', 'btn btn-secondary');
   let buttonFalse1 = document.createElement('button');
   buttonFalse1.setAttribute('class', 'btn btn-secondary');
   let buttonFalse2 = document.createElement('button');
   buttonFalse2.setAttribute('class', 'btn btn-secondary');


   buttonFalse.innerHTML = res + Math.floor(Math.random() * 4 + 1);
   buttonFalse1.innerHTML = res - Math.floor(Math.random() * 5 + 1);
   buttonFalse2.innerHTML = res + Math.floor(Math.random() * 6 + 1);
   buttonTrue.innerHTML = res;
   
   let generator = Math.floor(Math.random() * 3);
   switch(generator){
      case 0:
         buttonDiv.appendChild(buttonTrue);
         buttonDiv.appendChild(buttonFalse1);
         buttonDiv.appendChild(buttonFalse);
         buttonDiv.appendChild(buttonFalse2);
         break;
      
      case 1:
         buttonDiv.appendChild(buttonFalse1);
         buttonDiv.appendChild(buttonTrue);
         buttonDiv.appendChild(buttonFalse);
         buttonDiv.appendChild(buttonFalse2);
         break;

      case 2:
         buttonDiv.appendChild(buttonFalse1);
         buttonDiv.appendChild(buttonFalse);
         buttonDiv.appendChild(buttonTrue);
         buttonDiv.appendChild(buttonFalse2);
         break;

      case 3:
         buttonDiv.appendChild(buttonFalse1);
         buttonDiv.appendChild(buttonFalse);
         buttonDiv.appendChild(buttonFalse2);
         buttonDiv.appendChild(buttonTrue);
         break;


   }
       
   let score = document.getElementById('scoreDiv');
   let scoreSpan = document.getElementById('score');
   
   

   buttonTrue.onclick = function()
      {
         
         scoreSpan.innerHTML++;
         
         score.appendChild(scoreSpan);
         num.removeChild(createdSpan2);
         num.removeChild(createdSpan);
         num.removeChild(createdOperator);
         buttonDiv.removeChild(buttonFalse);
         buttonDiv.removeChild(buttonTrue);
         buttonDiv.removeChild(buttonFalse1);
         buttonDiv.removeChild(buttonFalse2);
         randomExpression();

      }

   buttonFalse.onclick = function()
      {
         
         alert('Нажаль ви програли, спробуйте ще раз')
         
         num.removeChild(createdSpan2);
         num.removeChild(createdSpan);
         num.removeChild(createdOperator);
         buttonDiv.removeChild(buttonFalse);
         buttonDiv.removeChild(buttonTrue);
         buttonDiv.removeChild(buttonFalse1);
         buttonDiv.removeChild(buttonFalse2);
         scoreSpan.innerHTML = 0;
         randomExpression();
        

      }  

      buttonFalse1.onclick = function()
      {
         
         alert('Нажаль ви програли, спробуйте ще раз')
         
         num.removeChild(createdSpan2);
         num.removeChild(createdSpan);
         num.removeChild(createdOperator);
         buttonDiv.removeChild(buttonFalse);
         buttonDiv.removeChild(buttonTrue);
         buttonDiv.removeChild(buttonFalse1);
         buttonDiv.removeChild(buttonFalse2);
         scoreSpan.innerHTML = 0;
         randomExpression();
         

         
      }  
      buttonFalse2.onclick = function()
      {
         
         alert('Нажаль ви програли, спробуйте ще раз')
         
         num.removeChild(createdSpan2);
         num.removeChild(createdSpan);
         num.removeChild(createdOperator);
         buttonDiv.removeChild(buttonFalse);
         buttonDiv.removeChild(buttonTrue);
         buttonDiv.removeChild(buttonFalse1);
         buttonDiv.removeChild(buttonFalse2);
         scoreSpan.innerHTML = 0;
         randomExpression();
         

      }  

}

