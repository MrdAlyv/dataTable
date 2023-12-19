let tchrBtn = document.querySelector("#tchrBtn")
let stdnBtn = document.querySelector("#stdnBtn")
let tchrForm = document.querySelector('#tchrForm')

tchrBtn.addEventListener('click', function () {
    tchrForm.innerHTML = `
    <p>Ad:</p>
<input id="frstName" type="text" name="1">
<p>Soyad:</p>
<input id="lstName" type="text"name="2">
<p>Yaş:</p>
<input id="age" type="text"name="3">
<p>Staj:</p>
<input id="year" type="text"name="4">
<p>Tədris etdiyi fənn:</p>
<input id="sbjct" type="text"name="5">
<button id="send"  onclick="createTable();">Gonder</button>
    `
})
function createTable() {
    let frstNm = document.getElementById("frstName").value;
    let lstNm = document.getElementById("lstName").value;
    let age = document.getElementById("age").value;
    let year = document.getElementById("year").value;
    let subject = document.getElementById("sbjct").value;
    if (frstNm == "" || lstNm == "" || age == "" || year == "") {
        alert("Bütün xanaları doldurun!");
    }
    else {
        let table = document.querySelector("#tchrTable")
        table.innerHTML = `
    <tr>
    <th>Ad</th>
    <th>Soyad</th>
    <th>Yas</th>
    <th>Staj</th>
    <th>Fənn</th>
    </tr>
    <tr>
    <td>${frstNm}</td>
    <td>${lstNm}</td>
    <td>${age}</td>
    <td>${year}</td>
    <td>${subject}</td>
    </tr>
    `
    }
}
