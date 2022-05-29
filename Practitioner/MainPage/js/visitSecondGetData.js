const url = ' ';
async function getInfo(){
    const token = localStorage.getItem("token")
    const response = await fetch(url, { headers: {
            "Authorisation": token,
        },});
    const data = await response;
    const {name, surname, image}=data
    document.getElementById("Full_name").textContent = name + " " + surname;
    document.getElementsByClassName("Image").src = image;
}

getInfo()
    .then(response =>{
        console.log(response)
    })
    .catch(error => {
        console.log(error);
    });


async function PatientInfo(){
    const token = localStorage.getItem("token")
    const response = await fetch(url, { headers: {
            "Authorisation": token,
        },});
    const data = await response;
    const {name, surname, Gender,dateOfBirth, phoneNumber,address, patient}=data
    document.getElementById("full_name").textContent = name + " " + surname;
    document.getElementById("gender").textContent = Gender;
    document.getElementById("date").textContent = dateOfBirth;
    document.getElementById("phone_number").textContent = phoneNumber;
    document.getElementById("address").textContent = address;
    document.getElementsByClassName("patient").src = patient;
}

PatientInfo()
    .then(response =>{
        console.log(response)
    })
    .catch(error => {
        console.log(error);
    });


    
function logout(){
    delete localStorage.token;
}