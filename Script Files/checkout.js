function submit(){
    let orderConfirm = document.getElementById("order-message");
    orderConfirm.textContent = "Your order is succefully placed";
    localStorage.clear();
    setTimeout(()=>{
        location.replace("index.html");
    },5000);
}