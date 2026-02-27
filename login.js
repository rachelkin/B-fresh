import { users } from "./dataModels.js";
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button").addEventListener("click", () => {
        // console.log("הכפתור נלחץ!");
        enter(); 
    });
});
function enter() {
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    // console.log(`שם משתמש: ${name}, סיסמה: ${password}`); 

    for (let i = 0; i < users.length; i++) {
        if (users[i].name === name && users[i].password == password) {
            alert(`ברוך הבא, ${name}!`);
            // console.log("מעבר לעמוד מתבצע עכשיו...");
            window.location.href = "open.html";
            return;
        }
    }

    alert("שם משתמש או סיסמה אינם נכונים.");
}
window.enter = enter; 