let btn = document.getElementById("btn");
btn.onclick = function () {
    let email = document.getElementById("inputEmail").value;
    let phone = document.getElementById("inputTel").value;
    let pas = document.getElementById("inputPas").value;
    let prostant = document.getElementById("prostant");
    let prostant2 = document.getElementById("prostant2");
    let prostant3 = document.getElementById("prostant3");
    let reg1 = /\w+@\w{2,}.\w{2,3}/i;
    let testReg1 = reg1.test(email);
    let reg2 = /+380\d{7}/
    let testReg2 = reg2.test(phone);
    let reg3 = /\w{8,}/
    let testReg3 = reg3.test(pas);
    if (testReg1 == true) {

    } else {
        prostant.innerHTML = "";
        let c1 = document.createTextNode(`invalid emeil`);
        let c2 = document.createElement("p")
        c2.appendChild(c1);
        let element1 = document.getElementById("prostant");
        element1.appendChild(c2);
    }
    if (testReg2 == true) {

    } else {
        prostant2.innerHTML = "";
        let a1 = document.createTextNode(`invalid phone`);
        let a2 = document.createElement("p")
        a2.appendChild(a1);
        let element2 = document.getElementById("prostant2");
        element2.appendChild(a2);
    }
    if (testReg3 == true) {

    } else {
        prostant3.innerHTML = "";
        let b1 = document.createTextNode(`invalid password`);
        let b2 = document.createElement("p")
        b2.appendChild(b1);
        let element3 = document.getElementById("prostant3");
        element3.appendChild(b2);
    }

}