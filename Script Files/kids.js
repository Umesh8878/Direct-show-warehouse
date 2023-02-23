let container = document.getElementById("container");

let lsdata = JSON.parse(localStorage.getItem("data")) || [];
// console.log(lsdata)

let searchform = document.querySelector("form");
   searchform.addEventListener("submit", (e)=>{
        e.preventDefault();
        let searchparams = searchform.search.value;

        let filtered = lsdata.filter((ele)=>{
            if(ele.name.toUpperCase().includes(searchparams.toUpperCase())=== true){
                return true;
            }
            else{
                return false;
            }
        });
        appendata(filtered)
   });

   let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
   let favArr = JSON.parse(localStorage.getItem("fav")) || [];

appendata(lsdata);
function appendata(data){
    container.innerHTML= "";
    for(let i=0; i<data.length; i++){
        if(data[i].users === "Kids"){
            // console.log(data[i]);

            let card = document.createElement("div");

            let img = document.createElement("img");
            img.setAttribute("src",data[i].avatar);

            let name = document.createElement("h3")
            name.textContent = data[i].name;

            let price = document.createElement("h5");
            price.textContent = "$ "+data[i].price;

            let addTofavorite = document.createElement("button");
            addTofavorite.textContent = "Add to Favourite";
                addTofavorite.addEventListener("click",function(){
                    if(checkanoDuplicate(data[i])){
                        alert("Product is Already there");
                    }
                    else{
                        favArr.push(data[i])
                        localStorage.setItem("fav",JSON.stringify(favArr))
                        alert("Product Added to Favourite");
                    }
                })

            let addToCart = document.createElement("button");
            addToCart.textContent = "Add to Cart";
                addToCart.addEventListener("click",function(){
                    if(checkDuplicate(data[i])){
                        alert("Product Already in Cart");
                    }
                    else{
                        cartArr.push({...data[i],quantity : 1})
                        localStorage.setItem("cart",JSON.stringify(cartArr))
                        alert("Product Added to Cart");
                    }
                })
            card.append(img,name,price,addTofavorite,addToCart)
            container.append(card);
        }
    }
}

function checkDuplicate(ele){
    for(let i=0; i<cartArr.length; i++){
        if(cartArr[i].id === ele.id){
            return true;
        }
    }
    return false;
}

function checkanoDuplicate(ele){
    for(let i=0; i<favArr.length; i++){
        if(favArr[i].id === ele.id){
            return true;
        }
    }
    return false;
}

let filtersel = document.getElementById("filter");
   filtersel.addEventListener("change",function(){
        if(filtersel.value === ""){
            appendata(lsdata);
        }
        else{
            let filtered = lsdata.filter((ele,ind)=>{
                if(filtersel.value === ele.catagory){
                    return true;
                }
                else{
                    return false;
                }
            });
            appendata(filtered)
        }
   })