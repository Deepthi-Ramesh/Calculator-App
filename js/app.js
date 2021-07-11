function view(num){
    var str = document.querySelector(".item2").value;
    if((num === "+" || num === "-" || num === "*" || num === "/") && (str[str.length - 1] === "+" || str[str.length - 1] === "-" || str[str.length - 1] === "*" || str[str.length - 1] === "/")){
        var newStr = str.substring(0,str.length-1) + num;
        console.log(newStr);
        document.querySelector(".item2").value = newStr;
    }
    else{
        document.querySelector(".item2").value += num;
    }
    if(str=='Undefined'){
        document.querySelector(".item2").value = num;
    }
    if(str=='Infinity'){
        document.querySelector(".item2").value = num;
    }
}

function reset(){
    document.querySelector(".item2").value="";
   
}
function del(){
    var Delete = document.querySelector(".item2").value;
    var str = document.querySelector(".item2").value;
    Delete = Delete.substring(0,Delete.length-1);
    document.querySelector(".item2").value=Delete;
    if( str =='Undefined'){
        document.querySelector(".item2").value="";  
    }
}
function compute(){
    var result = document.querySelector(".item2").value;
  
    try{
        var display = eval(result);
        document.querySelector(".item2").value = display;
      }
      catch(err){
        document.querySelector(".item2").value ='Undefined';
      }
}
