// import axios from "axios";

// const axios=require('axios')

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
        "username": "nzsdsdsddssffzz",
        "email": "zasdzz@msdaisdl.ru",
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
            "name": "organizationNasddfgamensdfasdfmenew",
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

    // HINT: you can use above initialized data to create superadmins,
    // but also changing the endpoint to /api/users/practitioner to create a practitioner,
    // for other endpoints and data ask Abgar, please keep header configrations in each request you make

    try {
    const response = await fetch("http://localhost:8080/api/users/super-admin", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                cache: 'no-cache',
            },
    })
    const result = await response.json()
    console.log(result)
    location.assign("/home/dev11/Desktop/UFAR/UFAR_HIC/SuperAdmin/Registration/html/lastRegister.html")
        
    } catch (error) {
        alert('failed to fetch data')
    }
};
const finalForm = document.querySelector("#final-form");
finalForm.addEventListener("submit", handleSubmit);