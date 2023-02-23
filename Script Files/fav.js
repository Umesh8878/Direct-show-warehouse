let container = document.getElementById("container");
let fav = JSON.parse(localStorage.getItem("fav")) || [];
// let box = document.getElementById("box")
function Display(data){
    // let total = document.createElement("h3");
    container.innerHTML = "";
    fav.forEach(element => {
        let card = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src",element.avatar);

        let name = document.createElement("h3")
        name.textContent = element.name;

        let price = document.createElement("h5");
        price.textContent = "$ "+element.price;

        // let qnty = document.createElement("span");
        // qnty.textContent = element.quantity;

        let removebtn = document.createElement("button");
        removebtn.textContent = "Remove";
            removebtn.addEventListener("click",function(){
                fav = fav.filter((ele)=>{
                    return ele.id !==element.id;
                })
                localStorage.setItem("fav",JSON.stringify(fav));
                Display();
            });

        card.append(img,name,price,removebtn)
        container.append(card);
    })
    // let sum = 0;
    // for(let i=0; i<cart.length; i++){
    //     sum+=cart[i].price*cart[i].quantity;
    // }
    // total.textContent = "Subtotal"+"("+cart.length*+")"+sum;
    // box.append(total);
}
Display();