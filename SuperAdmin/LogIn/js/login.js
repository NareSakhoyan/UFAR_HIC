async function postInfo() {
    const username = document.querySelector("#username").innerText;
    const password = document.querySelector("#password").innerText;

    const response = await fetch("http://localhost:8080/api/users/practitioner", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            cache: 'no-cache',
        },
        body: JSON.stringify({
            username, password
        }),
    });
    console.log(response.headers.get("Authorisation"));
    const token = response.headers.get("Authorisation");
    localStorage.setItem("token", token);

}

function ocPostInfo() {

    postInfo()
        .then(response => {
            location.href = '../../../SuperAdmin/Pract Registration/html/PractPage1.html'
            console.log(response)
        })
        .catch(error => {
            alert("Username or Password is incorrect")
            console.log(error);
        });
}






