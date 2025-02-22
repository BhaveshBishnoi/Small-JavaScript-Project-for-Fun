const qrinput = document.getElementById('inputoption');
const qrbtn = document.getElementById('btn');
const qrimg = document.getElementById('qr-img');
qrbtn.addEventListener("click", () =>{
    const inputValue = qrinput.value;
    if(!inputValue){
        alert("Please Enter a Valid URL!");
    }
    else{
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrimg.alt = `QR Code - ${inputValue}`;
    }
});
