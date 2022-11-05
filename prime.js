Problem : Given a number N, find that number is prime or not. 

function checkPrime(N){
  
  let fact = 0; 
  
  for(let i=0; i<=N; i++){
     
     if(num%i==0){
        
        fact++; 
     } 
  } 
  
  if(fact == 2){
    
    console.log("Prime"); 
  } 
  else{
    
    console.log("Not Prime"); 
  }
} 

checkPrime(); 