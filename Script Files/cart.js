let container = document.getElementById("container");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let box = document.getElementById("box")
function Display(data){
    let total = document.createElement("h3");
    container.innerHTML = "";
    cart.forEach(element => {
        let card = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src",element.avatar);

        let name = document.createElement("h3")
        name.textContent = element.name;

        let price = document.createElement("h5");
        price.textContent = "$ "+element.price;

        let qnty = document.createElement("span");
        qnty.textContent = element.quantity;

        let removebtn = document.createElement("button");
        removebtn.textContent = "Remove";
            removebtn.addEventListener("click",function(){
                cart = cart.filter((ele)=>{
                    return ele.id !==element.id;
                })
                localStorage.setItem("cart",JSON.stringify(cart));
                Display();
            });

        let incr = document.createElement("button");
        incr.textContent = "+";
            incr.addEventListener("click",()=>{
                element.quantity++;
                localStorage.setItem("cart",JSON.stringify(cart));
                Display();
            });
        let decr = document.createElement("button");
        decr.textContent = "-";
            decr.addEventListener("click",()=>{
                element.quantity--;
                localStorage.setItem("cart",JSON.stringify(cart));
                Display();
            });
        card.append(img,name,price,incr,qnty,decr,removebtn)
        container.append(card);
    })
    let sum = 0;
    for(let i=0; i<cart.length; i++){
        sum+=cart[i].price*cart[i].quantity;
    }
    total.textContent = "Subtotal          = "+sum;

    btn = document.createElement("button");
    btn.textContent = "Checkout"
    box.append(total,btn);
}
Display();