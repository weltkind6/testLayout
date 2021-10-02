function openForm() {
    document.getElementById("myForm").style.display = "block";
}
const button = document.querySelector('#learn').addEventListener('click', () => openForm())
const submit = document.querySelector('#submit').addEventListener('click', () => {
    document.getElementById("myForm").style.display = "none";
})
document.querySelector('#close').addEventListener('click', () => {
    document.getElementById("myForm").style.display = "none";
})