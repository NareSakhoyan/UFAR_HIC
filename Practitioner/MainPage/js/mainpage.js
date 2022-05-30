$(function(){

    var person = document.createElement("div");
    document.getElementById("forback").appendChild(person);
    person.classList.add("pers"); 
    const newLocal = "<img src='../../../photos/achon.png'>";
    person.innerHTML = newLocal;
    var div = document.createElement("div");
    person.appendChild(div) ;
    div.classList.add("personal");
    div.innerHTML = "<p class='fullname'>Name Surname</p>";
    var abbr = document.createElement("abbr");
    div.appendChild(abbr);
    abbr.innerHTML="Brief info about patient";
    var buttonsDiv = document.createElement("div");
    div.appendChild(buttonsDiv);
    buttonsDiv.classList.add("visits");
    var addVisit= document.createElement("div");
    buttonsDiv.appendChild(addVisit);
    addVisit.classList.add("addvisit");
    var visit= document.createElement("div");
    buttonsDiv.appendChild(visit);
    visit.classList.add("visit");
    visit.setAttribute("onclick", "document.location='VisitHistoryPage.html'")
    addVisit.setAttribute("onclick", "document.location='visitFirst.html'");
    addVisit.innerHTML=  "<button>+ Add visit</button>";
    visit.innerHTML = "<button>Visit</button>";

});
$(function(){

    var person = document.createElement("div");
    document.getElementById("forback").appendChild(person);
    person.classList.add("pers"); 
    const newLocal = "<img src='../../../photos/txuk.jpg'>";
    person.innerHTML = newLocal;
    var div = document.createElement("div");
    person.appendChild(div) ;
    div.classList.add("personal");
    div.innerHTML = "<p class='fullname'>Name Surname</p>";
    var abbr = document.createElement("abbr");
    div.appendChild(abbr);
    abbr.innerHTML="Brief info about patient";
    var buttonsDiv = document.createElement("div");
    div.appendChild(buttonsDiv);
    buttonsDiv.classList.add("visits");
    var addVisit= document.createElement("div");
    buttonsDiv.appendChild(addVisit);
    addVisit.classList.add("addvisit");
    var visit= document.createElement("div");
    buttonsDiv.appendChild(visit);
    visit.classList.add("visit");
    visit.setAttribute("onclick", "document.location='VisitHistoryPage.html'")
    addVisit.setAttribute("onclick", "document.location='visitFirst.html'");
    addVisit.innerHTML=  "<button>+ Add visit</button>";
    visit.innerHTML = "<button>Visit</button>";

});
$(function practionerData(data){
    const image = `<img src='../../../photos/doc.png'>`
    document.getElementById("info").innerHTML = image;
    var p = document.createElement("p");
    document.getElementById("info").appendChild(p);
    p.innerHTML = `Name Surname`;

});



// const url = 'http://localhost:8080/api/patients?page=0&size=7';
// async function getInfos(){
//     const token = localStorage.getItem("token")
//     const response = await fetch(url, { headers: {
//             'Accept': 'application/json',
            // 'Content-Type': 'application/json',
            // cache: 'no-cache',
//         },});
//     const data = await response;
//     const {first_name, last_name, photo:{url}} = data;
// }

// // for account data
// getInfos();
// $(function practionerData(data){
//     const image = `<img src='${pic}'>`
//     document.getElementById("info").innerHTML = image;
//     var p = document.createElement("p");
//     document.getElementById("info").appendChild(p);
//     p.innerHTML = `${first_name} ${last_name}`;

// });
// practionerData();
// //////////////////////////////////////////////////////for patients data


// async function getUserInfo(){
//     const token = localStorage.getItem("token")
//     const response = await fetch(url, { headers: {
//             "Authorisation": token,
//         },});
//     const data = await response;
//     const {first_name, last_name, photo:{url}, notes} = data;
// }


// $(function usersRender(data){
//     for( let i = 0; i<data.length; i++){
//         var person = document.createElement("div");
//         document.getElementById("forback").appendChild(person);
//         person.classList.add("pers");
//         const newLocal = `<img src='${url}'>`;
//         person.innerHTML = newLocal;
//         var div = document.createElement("div");
//         person.appendChild(div) ;
//         div.classList.add("personal");
//         div.innerHTML = `<p class='fullname'> '${first_name} ${last_name}'</p>`;
//         var abbr = document.createElement("abbr");
//         div.appendChild(abbr);
//         abbr.innerHTML=`''${notes}'`;
//         var buttonsDiv = document.createElement("div");
//         div.appendChild(buttonsDiv);
//         buttonsDiv.classList.add("visits");
//         var addVisit= document.createElement("div");
//         buttonsDiv.appendChild(addVisit);
//         addVisit.classList.add("addvisit");
//         var visit= document.createElement("div");
//         buttonsDiv.appendChild(visit);
//         visit.classList.add("visit");
//         visit.setAttribute("onclick", "document.location='Annayiej.html'")
//         addVisit.setAttribute("onclick", "document.location='visitFirst.html'");
//         addVisit.innerHTML=  "<button>+ Add visit</button>";
//         visit.innerHTML = "<button>Visit</button>";
//     }});
// usersRender();

// //////////////for seaech button

// const search = document.querySelector("#search");
// const store = (key, value, ) => localStorage.setItem(key, value);
// search.addEventListener("change", (e) => store("search", e.target.value, false));
// var tosearch = localStorage.getItem('search');
// const token = localStorage.getItem("token")
// const searching = await fetch("http://localhost:8080/api/patients/firstName55", { headers: {
//         "Authorisation": token,
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json',
            // cache: 'no-cache',
//     },
//     body: JSON.stringify({
//         to_search: tosearch,
//     }),
// });

// if(searching){
//     localStorage.clear();
// }

// usersRender();



// ///onclick///////////////
// function logout(){
//     delete localStorage.token;
// }