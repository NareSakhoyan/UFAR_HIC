const getStoreData = (key) => localStorage.getItem(key);
const handleSubmit = async (e) => {
  e.preventDefault();

  const note = getStoreData("note");
  const phone = getStoreData("phone");
  const email = getStoreData("email");
  const passportNumber = getStoreData("passportNumber");
  const first_name = window.localStorage.getItem('patientame');
  const last_name = window.localStorage.getItem('patientsurname');
  const url = window.localStorage.getItem('patientPicture');
  const birth_date = window.localStorage.getItem('patientbirthdate');
  const patient_gender = window.localStorage.getItem('gender');
  const martial = window.localStorage.getItem('martial');
  const language =  window.localStorage.getItem('language');
  const address = window.localStorage.getItem('typeofaddress');
  const country = window.localStorage.getItem('country');
  const city = window.localStorage.getItem('city');
  const state = window.localStorage.getItem('state');
  const district = window.localStorage.getItem('district');
  const postalcode = window.localStorage.getItem('postalcode');

  const name = document.querySelector("#relatedName").innerText;
  const surname = document.querySelector("#relatedSurname").innerText;

  
    const select = document.getElementById('relatedSelect')
    const value = select.options[select.selectedIndex].value;
    const gender = document.querySelector('input[name="gender"]:checked').id;
      


    
    const relatedName = document.querySelector("#relatedName").innerText;
    const relatedSurname = document.querySelector("#relatedSurname").innerText;
    const relatedEmail = document.querySelector("#relatedEmail").innerText;
    const relatedPhone = document.querySelector("#relatedPhone").innerText;
    const organisation = document.querySelector("#organisation")?.innerText;

  try {
    const response = await fetch("http://localhost:8080/api/patients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": localStorage.getItem('token')
    },
    body: JSON.stringify({

      first_name: first_name,
      last_name:last_name,
      photo:{
        url: url
      },
      birth_date: birth_date,
      gender: patient_gender,
      martial: martial,
      language: language,
      notes: note, 
      phone_number: phone,
      email: email,
      passport_number: passportNumber,
      type: address,
      address:{
        country: country,
        city: city,
        state: state,
        district: district,
        postalcode: postalcode,
        
      },
      related_person:{
        email: relatedEmail,
        phone_number: relatedPhone,
        first_name: relatedName,
        last_name: relatedSurname,
        organization_name: organisation,
        type: select,
        gender: gender,
      },
    }),
  });
  console.log("Response: ", response);
  } catch (error) {
    alert('failed to send request, please check the console')
    console.log(error);
  }
};

const finalForm = document.querySelector("#final-form");
finalForm.addEventListener("submit", handleSubmit);
localStorage.clear();