var op1='';
var op2=null;
var operator= null;
let current=document.querySelector('.current');
let previous=document.querySelector('.previous');

var btn= document.getElementsByTagName("button");
for(let i=0;i<btn.length;i++){
  
  btn[i].addEventListener('click',function(){
    var btnText=btn[i].innerText;
        console.log("button clicked", btnText);
    if(btnText=='AC'){
      current.innerText='';
      previous.innerText='';
    }
   else if(btnText=='DEL'){
 				let neew =current.innerText.slice(0,-1);
				current.innerText=neew;
 
    }
    else if ((btnText>=0&&btnText<=9)||btnText=='.'){
    current.innerText+=btnText;
    }
    else if(btnText=='+'||btnText=='-'||btnText=='*'||btnText=='÷'){
      if(op1==''){
      op1=current.innerText;
      previous.innerText=current.innerText;
      operator=btnText;
      if(operator=='÷')
      operator='/';
      previous.innerText+=btnText;
      current.innerText='';
      }
      else{
        op2=current.innerText;
      let ans=eval(op1 + operator+ op2);
      if(ans-Math.floor(ans)==0)
      current.innerText=ans;
      else
      current.innerText=ans.toFixed(4);
      
      op1=current.innerText;
      previous.innerText=current.innerText;
      operator=btnText;
      if(operator=='÷')
      operator='/';
      previous.innerText+=btnText;
      current.innerText='';
      
      
      }
    }
    else if(btnText=='='){
      op2=current.innerText;
      let ans=eval(op1 + operator+ op2);
      if(ans-Math.floor(ans)==0)
      current.innerText=ans;
      else
      current.innerText=ans.toFixed(4);

      
      previous.innerText='';
      op1='';
      operator=null;
      
    }
    
    
    
  })
}