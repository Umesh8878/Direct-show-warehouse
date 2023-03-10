function submit(){
    let orderConfirm = document.getElementById("order-message");
    orderConfirm.textContent = "Your address successfully added";
    setTimeout(()=>{
        location.replace("payment.html");
    },2000);
}