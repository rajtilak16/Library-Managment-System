// function to get tag from of input object
function getTag(obj){
    const {key, type, id} = obj;
    let input = null;
    switch(type){
        case NUMBER:
        case TEXT:
        case DATE:
            input = document.createElement("input");
            input.type = type;
            input.name = key;
            input.id = id;
            break;

        case BOOLEAN:
            input = document.createElement("select");
            input.name = key;
            input.id = id;

            const options = {
                default : "choose option",
                option1 : "true",
                option2 : "false"
            }

            for (let option of Object.keys(options)){
                let optionTag = document.createElement("option");
                optionTag.value = options[option];
                optionTag.text = optionTag.value;
                input.append(optionTag);
            }

            break;

        default:
            // return default
            input = document.createElement("input");
            input.type = TEXT;
            input.name = key;
            break;
        }


    const inputTagContainer  = document.createElement("div");
    if (input){
        const inputlabel = document.createElement("label");
        inputlabel.setAttribute("for",id);
        inputlabel.innerText = key;
        inputTagContainer.append(inputlabel);
        inputTagContainer.append(input);
    }

    return inputTagContainer;
}



// function to create Table
function createTable(){
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    for (let {key} of inputObjArr){
        const th = document.createElement("th");
        th.textContent = key;
        thead.appendChild(th);
    }

    table.appendChild(thead);
    table.appendChild(tbody);

    return table;

}

// function to add Data in table
function addData(){
    const userdata = getData();
    if (userdata.length != inputObjArr.length){
        alert("please fill all the inputs");
    }else{
        const rows = document.querySelector("#table-container table tbody");
        const tr = document.createElement("tr");
        for (let data of userdata){
            const td = document.createElement("td");
            td.innerText =data;
            tr.appendChild(td);
        }
        rows.append(tr);
    }
}

// function to get Data from inputContainer
function getData(){
    const data = [];
    for (let {id, type} of inputObjArr){
        const tag = document.getElementById(`${id}`);
        if (type == BOOLEAN){
            let select = document.getElementById(`${id}`);
            data.push(select.value);
            select.val = '';
        }else{
            if (tag.value){
                data.push(tag.value);
                tag.value = '';
            }
        }
    }
    return data;
}


