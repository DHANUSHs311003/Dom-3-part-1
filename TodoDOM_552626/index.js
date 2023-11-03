let form =document.querySelector("form");
let input = document.getElementById("task");
let priority =document.getElementById("priority");
let tbody =document.querySelector("tbody");
let array=[];

function BGColor (priority) {
   if (priority=="High") {
    return "#ED2B2A";
   }
   else if(priority=="Low") {
    return "#A2FF86";
   }
}
form.addEventListener("submit",function(e){
    e.preventDefault();

    let data ={};
    data.Task= input.value;
    data.priority= priority.value;
    array.push(data);

    
 tbody.innerHTML=null;

 array.map((element) => {
 
    let row =document.createElement("tr");
    let td1 =document.createElement("td");
    let td2 =document.createElement("td");
    let td3 = document.createElement("td");
    let btn=document.createElement("button");
    btn.innerText="Favourite";
    btn.setAttribute("class", "btn")
     
    td1.innerText=element.Task;
    td2.innerText=element.priority;
    td3.append(btn)
    row.append(td1,td2,td3);
    row.style.backgroundColor=BGColor(element.priority)
    tbody.append(row);

    btn.addEventListener("click",function() {
        td3.innerText="favourite";
        td3.style.color="#FFFFFF";
        td3.style.textTransform="uppercase";
        td3.style.fontWeight="bold";
        row.append(td3);
        tbody.append(row);
        btn.style.display="none";
        

    })
 
 })
})

