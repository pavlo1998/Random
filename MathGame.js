function randomExpression(){
   let createdSpan = document.createElement('span');
   createdSpan.innerHTML = Math.floor(Math.random() * 100);
   let num = document.getElementById('mathOper');
   let createdOperator = document.createElement('span');
   createdOperator.innerHTML = '+';
   let createdSpan2 = document.createElement('span');
   createdSpan2.innerHTML = Math.floor(Math.random() * 100);
   num.appendChild(createdSpan);
   num.appendChild(createdOperator);
   num.appendChild(createdSpan2);

   let result = +createdSpan.innerHTML + +createdSpan2.innerHTML;
   let res = result.toString();

   let buttonDiv = document.getElementById('buttons')
   let buttonFalse = document.createElement('button');
   let buttonTrue = document.createElement('button');

   buttonFalse.innerHTML = Math.floor(Math.random() * 100);
   buttonTrue.innerHTML = res;

   buttonDiv.appendChild(buttonFalse);
   buttonDiv.appendChild(buttonTrue);

   let score = document.getElementById('scoreDiv');
   let scoreSpan = document.createElement('span');
   scoreSpan.innerHTML = 0;
   score.appendChild(scoreSpan);


   buttonTrue.onclick = function()
      {
         


         
      }

   buttonFalse.onclick = function()
      {
         scoreSpan.innerHTML = 0;
      }   
   


}