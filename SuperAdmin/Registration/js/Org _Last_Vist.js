const handleSubmit = async (e) => {
    e.preventDefault();
    const OrganizationName = window.localStorage.getItem("Organization_Name");
    const country = window.localStorage.getItem("Country");
    const city = window.localStorage.getItem("CIty");
    const state = window.localStorage.getItem("State");
    const district = window.localStorage.getItem("District");
    const street = window.localStorage.getItem("Street");
    const PostalCode = window.localStorage.getItem("Postal_code");

    //
    const telecom = window.localStorage.getItem("Telecom");
    const type = window.localStorage.getItem("Type");
    const password = window.localStorage.getItem("Password");

    const name = window.localStorage.getItem("Name");
    const surname = window.localStorage.getItem("surName");
    const PhoneNumber = window.localStorage.getItem("Phone_number");
    const email= window.localStorage.getItem("Email");
    const title = window.localStorage.getItem("Title");

    try {
        
    const response = await fetch("%URL%", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // avatar: {
            //     url: picture
            // },
            first_name: name,
            last_name: surname,
            phone_number: PhoneNumber,
            email: email,
            country: country,
            city: city,
            state: state,
            street: street,
            district: district,
            postal_code: PostalCode,
            password: password,
            title: title,
            organization_name: OrganizationName,
            organizationType: type,
            organizationTelecom: telecom,

        }),
    });
    console.log("Response: ", response);
    location.href("../../../Main/html/tick.html");
  
    } catch (error) {
        alert('failed to fetch data, see console for details')
        console.log(error)
    }
};
const final = document.querySelector("#final");
final.addEventListener("submit", handleSubmit);