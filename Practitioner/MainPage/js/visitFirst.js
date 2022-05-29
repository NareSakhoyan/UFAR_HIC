const url = ' ';
async function getInfo(){
    const token = localStorage.getItem("token")
    const response = await fetch(url, { headers: {
            "Authorisation": token,
        },});
    const data = await response;
    const {name, surname, Woman}=data
    document.getElementById("Full_name").textContent = name + " " + surname;
    document.getElementsByClassName("woman").src = Woman;
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
    const {name, surname, Gender,dateOfBirth, phoneNumber,adress, Man}=data
    document.getElementById("Full_name").textContent = name + " " + surname;
    document.getElementById("gender").textContent = Gender;
    document.getElementById("Date").textContent = dateOfBirth;
    document.getElementById("Phone_number").textContent = phoneNumber;
    document.getElementById("Adress").textContent = adress;
    document.getElementsByClassName("man").src = Man;
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