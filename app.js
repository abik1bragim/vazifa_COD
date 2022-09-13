const Login = document.querySelector(".login2")
const BoxEmail = document.querySelector(".box_email")



const Open = () => {

    BoxEmail.classList.add("box_email2")
}

const Close = () => {
    BoxEmail.classList.remove("box_email2")
}

console.log(localStorage);


// localStorage ga joylash
// let Name = "Azimjon"

// const SignIn = () => {
//     localStorage.setItem("name", "Azimjon")
//     localStorage.setItem("nickname", "abik1bragim")
// }



const Input1 = document.querySelector("#input")
const Input2 = document.querySelector("#input2")
const boxEmail = document.querySelector("box_email")
const Name = document.querySelector("#name")

function SignIn(e) {
    console.log(Input1.value);
    console.log(Input2.value);
if(Input1.value === "" || Input2.value === ""){
    alert("Inputlarni toldiring")
}else{
    localStorage.setItem("name", Input1.value)
    localStorage.setItem("nickname", Input2.value)
    BoxEmail.classList.remove("box_email2")
    location.reload()
}
 
boxEmail.getElementsByTagName.display = "flex"
}

Name.innerHTML = localStorage.getItem('name')

const delet = () =>{
    localStorage.removeItem("name")
    localStorage.removeItem("nickname")
    location.reload()
}
