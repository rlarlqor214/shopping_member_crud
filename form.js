var selectedRow = null
var sum=0;
function onFormSubmit(){
    sum++;
    if(validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData(){
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["name"] = document.getElementById("name").value;
    formData["pw"] = document.getElementById("pw").value;
    formData["date"] = document.getElementById("date").value;
    formData["member_address"] = document.getElementById("member_address").value;
    formData["member_deaddress"] = document.getElementById("member_deaddress").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("memberlist").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0)
    cell1.innerHTML = sum;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.id;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.name;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.pw;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.date;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.member_address;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.member_deaddress;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.email;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML =  `<a onClick="onEdit(this)">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7bc62d" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
    <line x1="16" y1="5" x2="19" y2="8" />
    </svg></a>`; //수정 버튼 svg
    cell10 = newRow.insertCell(9);
    cell10.innerHTML =  `<a onClick="onDelete(this)">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
    </svg></a>`; //삭제 버튼 svg
}


function resetForm() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("pw").value = "";
    document.getElementById("date").value = "";
    document.getElementById("member_address").value = "";
    document.getElementById("member_deaddress").value = "";
    document.getElementById("email").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[1].innerHTML;
    document.getElementById("name").value = selectedRow.cells[2].innerHTML;
    document.getElementById("pw").value = selectedRow.cells[3].innerHTML;
    document.getElementById("date").value = selectedRow.cells[4].innerHTML;
    document.getElementById("member_address").value = selectedRow.cells[5].innerHTML;
    document.getElementById("member_deaddress").value = selectedRow.cells[6].innerHTML;
    document.getElementById("email").value = selectedRow.cells[7].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.id;
    selectedRow.cells[2].innerHTML = formData.name;
    selectedRow.cells[3].innerHTML = formData.pw;
    selectedRow.cells[4].innerHTML = formData.date;
    selectedRow.cells[5].innerHTML = formData.member_address;
    selectedRow.cells[6].innerHTML = formData.member_deaddress;
    selectedRow.cells[7].innerHTML = formData.email;
}

function onDelete(td) {
    if (confirm('정말 삭제하나요?')) {
        row = td.parentElement.parentElement;
        document.getElementById("memberlist").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("id").value == "") {
        isValid = false;
        document.getElementById("id_error").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("id_error").classList.contains("hide"))
            document.getElementById("id_error").classList.add("hide");
    }
    return isValid;
}

function findStr() {
    var n = 0;
    var str = document.getElementById("search").value;
    if(navigator.userAgent.indexOf("rv:11") > -1) {
        var f, contents = document.body.createTextRange();
        for(var i = 0; i <= n && (f = contents.findText(str)) != false; i++) {
            contents.moveStart('character');
            contents.moveEnd('textedit');
        }
        if(f) {
            contents.moveStart('character', -1);
            contents.findText(str);
            contents.select();
            n++;
        }
        } 
        else {
            window.find(str);
        }
}