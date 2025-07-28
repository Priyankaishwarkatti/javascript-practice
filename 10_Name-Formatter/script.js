// let fullName = "pRiYANka iSHWArkaTTi"

// let splitName = fullName.split(" ")

// let firstName = splitName[0][0].toUpperCase() + splitName[0].slice(1).toLowerCase();
// let lastName = splitName[1][0].toUpperCase() + splitName[1].slice(1).toLowerCase();

// let finalName = firstName + " " + lastName

// console.log(`Formatted full Name: ${finalName}`);


function formatName() {

const fullName = document.getElementById("fullName").value.trim();

if (fullName === ""){
    document.getElementById("finalName").innerText = "Please Enter Valid Name!";
    return;
}

const splitName = fullName.split(" ");

const finalName = splitName.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(" ");

// console.log(`Formatted full Name: ${finalName}`);
document.getElementById("finalName").innerText = `Formatted Name: ${finalName}`;

}