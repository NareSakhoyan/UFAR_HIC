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

  //TODO check how to get data from those 2 fields, because they're not inputs
    //   const relatedSelect = document.querySelector("#relatedSelect");
    const select = document.getElementById('relatedSelect')
    const value = select.options[select.selectedIndex].value;
    const gender = document.querySelector('input[name="gender"]:checked').id;
      


    
    
    const relatedEmail = document.querySelector("#relatedPEmail").innerText;
    const relatedPhone = document.querySelector("#relatedPhone").innerText;
    const organisation = document.querySelector("#organisation")?.innerText;

  const response = await fetch("%URL%", {
    // ! WRITE URL HERE
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
      address: address,
      country: country,
      city: city,
      state: state,
      district: district,
      postalcode: postalcode,
      note, //easier syntax, stands for note: note
      phone,
      email,
      passportNumber,
      relatedEmail,
      relatedPhone,
      relatedName,
      relatedSurname,
      organisation,
      relatedSelect,
      gender,
    }),
  });
  console.log("Response: ", response);
};

const finalForm = document.querySelector("#final-form");
finalForm.addEventListener("submit", handleSubmit);

