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
    cell9.innerHTML =  `<a onClick="onEdit(this)">Edit</a>`;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML =  `<a onClick="onDelete(this)">Delete</a>`;
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
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.pw;
    selectedRow.cells[3].innerHTML = formData.date;
    selectedRow.cells[4].innerHTML = formData.member_address;
    selectedRow.cells[5].innerHTML = formData.member_deaddress;
    selectedRow.cells[6].innerHTML = formData.email;
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
        } else {
            window.find(str);
        }
    }
