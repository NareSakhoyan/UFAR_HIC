let state = false;
function toggle(){
    if(state){
        document.getElementById("psw").setAttribute("type","password");
        document.getElementById("eye").setAttribute("class", "fa fa-eye-slash fa-lg")
        state = false;
    }
    else{
        document.getElementById("psw").setAttribute("type","text");
        document.getElementById("eye").setAttribute("class", "fa fa-eye fa-lg")
        state= true;
    }
}

//---------------------------------------------------------------------------------------------------
async function postInfo() {
    const username = document.querySelector("#uname").innerText;
    const password = document.querySelector("#psw").innerText;

    const response = await fetch("http://localhost:8080/api/users/login", {
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
    const result = await response.json()
    console.log(response.headers.get("Authorisation"));
    // const token = response.headers.get("Authorisation");
    const {access_token: token} = result

    localStorage.setItem("token", token);

}

function ocPostInfo() {

    postInfo()
        .then(response => {
            location.href = '../../MainPage/html/mainPage.html'
            console.log(response)
        })
        .catch(error => {
            alert("Username or Password is incorrect")
            console.log(error);
        });
}