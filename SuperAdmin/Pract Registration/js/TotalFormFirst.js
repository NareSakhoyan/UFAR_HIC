const handleSubmit = async (e) => {
    e.preventDefault();
    const picture = window.localStorage.getItem("Picture");
    console.log(picture);
    const name = window.localStorage.getItem("Name");
    const surname = window.localStorage.getItem("Surname");
    const birthdate = window.localStorage.getItem("Birthdate");
    const phone = window.localStorage.getItem("Phone");
    const langvalue = window.localStorage.getItem('language');
    console.log(langvalue);
    const gender = window.localStorage.getItem('gender');
    console.log(gender);

    //
    const countryvalue = window.localStorage.getItem('Country');
    console.log(countryvalue);
    const city = window.localStorage.getItem("City");
    const state = window.localStorage.getItem("State");
    const district = window.localStorage.getItem("District");
    const street = window.localStorage.getItem("Street");
    const postalcode = window.localStorage.getItem("Postalcode");
    const startYearValue = window.localStorage.getItem('StartYear');

    const endYearValue = window.localStorage.getItem('EndYear');

    //
    const email = window.localStorage.getItem("Email");
    const username = window.localStorage.getItem("Username");
    const password = window.localStorage.getItem("Password");

    const data = {
        "username": "newzzz",
        "email": "newzzz@mail.ru",
        "password": 1234,
        "first_name": "firstName",
        "last_name": "lastName",
        "phone_number": "00-00-00",
        "address": {
            "country": "country",
            "city": "city",
            "state": "state",
            "district": "distinct",
            "postal_code": "postalCode"
        },
        "organization": {
            "name": "organizationNamenameZZZ",
            "type": "organizationType",
            "telecom": "organizationTelecom"
        },
        "title": "title"
    }

    // avatar: {
    //     url: picture
    // },
    // first_name: name,
    // last_name: surname,
    // gender: gender,
    // birth_date: birthdate,
    // phone_number: phone,
    // language: langvalue,
    // country: countryvalue,
    // city: city,
    // state: state,
    // street: street,
    // district: district,
    // postal_code: postalcode,
    // start_year: startYearValue,
    // end_year: endYearValue,
    // email: email,
    // username: username,
    // password: password,

    // const response = await fetch("http://localhost:8080/api/users/super-admin", {
    //     // method: 'POST',
    //     mode: 'no-cors',
    //     // headers: {
    //     //     "Content-Type": "application/json",
    //     //     'Accept': 'application/json',
    //     //     cache: 'no-cache'
    //     // },
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // });

    //     fetch("http://localhost:8080/api/users/super-admin", {
    //         method: 'POST',
    //         mode: 'no-cors',
    //         cache: 'no-cache',
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    // }).then(response=>console.log(response)).catch(err=>console.log(err))


    // let config = {
    //     headers: {
    //         // 'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //         "Access-Control-Allow-Origin": "*",
    //     }
    // }
    // const response = await axios.post("http://localhost:8080/api/users/super-admin",
    //     data,
    //     config)
    // console.log("Response: ", response);

    axios({
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', "Access-Control-Allow-Origin": "*" },
        url: 'http://localhost:8080/api/users/super-admin',
        data
    }).then(function (response) {
        console.log(response);
    });
};
const finalForm = document.querySelector("#final-form");
finalForm.addEventListener("submit", handleSubmit);