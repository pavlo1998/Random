function randomExpression(){
   let createdSpan = document.createElement('span');
   createdSpan.innerHTML = Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100);
   let num = document.getElementById('mathOper');
   num.appendChild(createdSpan);
}