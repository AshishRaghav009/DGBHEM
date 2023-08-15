function add() {
    var a=Number(document.getElementById("first").value);
    
    const b=2500;
    var c=a-b;
    const remain = document.getElementById('answear');
    remain.innerHTML=`${c}`
    console.log("working")
  }

  const remBTN = document.getElementById(answer) ; 
  remBTN.addEventListener('click' , add);