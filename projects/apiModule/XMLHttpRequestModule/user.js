//Create an event listener
document.getElementById("button").addEventListener("click", loadXMLDoc); 
function loadXMLDoc() {
    console.log("button clicked")
    //create XHR object
    var xhttp = new XMLHttpRequest();
    console.log(xhttp); 
//     //open -type,url/file, async
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhttp.onload = function() {
        if (this.status == 200) {
        var users = JSON.parse(this.responseText);
        console.log(users); 
        var output = ''; 
        for (var i in users){
            output += 
            `<tr><td>${users[i].id}</td>
            <td>${users[i].name}</td>
            <td>${users[i].email}</td>
            <td><button id="${users[i].id}" class="allUser">${users[i].id}</button></td>
            </tr>`;
        }
        document.getElementById("userList").innerHTML = output;
        let btns = document.getElementsByClassName("allUser");
        for (j of btns){
            j.addEventListener('click', getUser);
        }
            function getUser(e) {
                let mySelectedUser = e.currentTarget.getAttribute('id');
                //grab the button, get value out of its id
                for (var k in users){
                    if (mySelectedUser == users[k].id){
                        document.querySelector('#userView').innerHTML
                        = `User Info:<br>${users[k].name} <br> Address:<br> ${users[k].address.suite} <br> ${users[k].address.street} ${users[k].address.city} ${users[k].address.zipcode} <br> Contact info: <br> ${users[k].phone}<br> ${users[k].email} <br> Company Name: <br>${users[k].company.name}` 
                    }else {myUser = "Sorry User Cannot be found"}
                }
                //loop through users and if mySelectedUser = users[k].id then =>
                // document.querySelector('#userView').innerHTML = `User Info:<br>${users[e].name} <br> ${users[e].address.city} <br> ${users[e].company.name} <br>  ${users[e].phone} ${users[e].email} `
            console.log(mySelectedUser);
        }
        }
    };
    xhttp.send();
}