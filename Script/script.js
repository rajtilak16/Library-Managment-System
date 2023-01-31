
const inputArr = inputObjArr.map((element)=>{
    return getTag(element);
})

const inputContainer = document.getElementsByClassName("inputContainer")[0];
inputArr.forEach((inputTag)=>{
    inputContainer.append(inputTag);
})

const btn = document.createElement("button");
btn.id = "inputContainerBtn";
btn.innerText = "save";

inputContainer.appendChild(btn);

const tableContainer = document.getElementById("table-container");
const table = createTable();
tableContainer.appendChild(table);


btn.addEventListener("click", addData);
