let dob = document.getElementById('dob');



function currentDate() {
    let mydate = new Date();
    let Year = mydate.getUTCFullYear();
    let Month = (mydate.getUTCMonth() + 1).toString().padStart(2,'0')
    let Day = (mydate.getUTCDate()).toString().padStart(2,'0')

    return `${Year}-${Month}-${Day}`;
}

document.getElementById('todaydate').value = currentDate();
console.log(currentDate());