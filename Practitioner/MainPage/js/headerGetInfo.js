const url = ' ';
//Practitioner Information
async function getInfo(){
    const token = localStorage.getItem("token")
    const response = await fetch(url, { headers: {
            "Authorisation": token,
        },});
    const data = await response;
    const {name, surname, photo}=data
    document.getElementById("full-name").textContent = name + " " + surname;
    document.getElementById("user-avatar").src = photo;
}

getInfo()
    .then(response =>{
        console.log(response)
    })
    .catch(error => {
        console.log(error);
    });

//Patient information
async function getPatientInfo(){
    const token = localStorage.getItem("token")
    const response = await fetch(url, { headers: {
            "Authorisation": token,
        },});
    const data = await response;
    const {name, surname, gender, dateOfBirth,phone,address,photo}=data
    document.getElementById("patient-avatar").src = photo;
    document.getElementById("patient-full-name").textContent =  name + " " + surname;
    document.getElementById("patient-gender").textContent =  "" + gender;
    document.getElementById("patient-date").textContent =  "" + dateOfBirth;
    document.getElementById("patient-phone").textContent =  "" + phone;
    document.getElementById("patient-address").textContent =  "" + address;
}

getPatientInfo()
    .then(response =>{
        console.log(response)
    })
    .catch(error => {
        console.log(error);
    });


//logout
function logout(){
    delete localStorage.token;
}
