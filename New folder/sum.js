function sum() {
    let input1 = document.querySelector("#id1");
    let input2 = document.querySelector("#id2");
   
     let result = parseInt(input1) + parseInt(input2);
  document.querySelector("#result").value = result;
  }