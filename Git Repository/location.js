function getAndupdate(){

  // add=document.getElementById("add");
  // add.addEventListener("click", ()=>{
      console.log("updating list.....");
      tit=document.getElementById('name').value;
      desc=document.getElementById('mail').value;
      // textar=document.getElementById('textar').value;
      if(localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
      }     
      else{ 
        itemJsonArrayStr=localStorage.getItem('itemsJson')
        itemJsonArray=JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
      }
    update();
    }

      function update(){
        if(localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
      }  
      else{ 
        itemJsonArrayStr=localStorage.getItem('itemsJson')
        itemJsonArray=JSON.parse(itemJsonArrayStr);
      }  
      // Populate the table
      let tableBody = document.getElementById("tableBody");
      let str= "";
      itemJsonArray.forEach((element,index )=> {
        str+=`
        <tr>
          <th scope="row">${index + 1}</th>
                  <td>${element[0]}</td>
                  <td>${element[1]}</td>
                  <td><button class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
                </tr>`;
      });
      tableBody.innerHTML =str;
  }
  add = document.getElementById("submit");
  add.addEventListener("click",getAndupdate);
  update();
  function deleted(itemIndex){
    var start=prompt("Would you like to clear all the data....? y,n")
    
      if(start==="y"){
        var request=prompt("Please enter the password")
          if(request==="Location@"){
            console.log("Delete",itemIndex);  
            itemJsonArrayStr=localStorage.getItem('itemsJson')
            itemJsonArray=JSON.parse(itemJsonArrayStr);
                // Delete Item Index element from array
          itemJsonArray.splice(itemIndex,1);
          localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
          update();
          }
          else{
            alert("Please enter the correct password")
        }}
     else (start==='n');{
        alert("Thank You")
     }}

  // function clearstorage(){
  //   if(confirm("do you really want to clear")){
  //   console.log("clearing the storage")
  //   localStorage.clear();
  //   update();
  //   }} 

  function clearstorage(){
    var start=prompt("Would you like to clear all the data....? y,n")
    
      if(start==="y"){
        var request=prompt("Please enter the password")
          if(request==="Location@"){
            console.log("clearing the storage")
            localStorage.clear();
            update();
            }
          else{
            alert("Please enter the correct password")
        }}
     else (start==='n');{
        alert("Thank You")
     }
     }
     
    


  
