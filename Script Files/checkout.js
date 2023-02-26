function submit(){
    let orderConfirm = document.getElementById("order-message");
    orderConfirm.textContent = "Your address successfully added";
    localStorage.clear();
    setTimeout(()=>{
        location.replace("payment.html");
    },2000);
}