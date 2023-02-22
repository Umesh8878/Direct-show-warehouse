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

appendata(lsdata);
function appendata(data){
    container.innerHTML= "";
    for(let i=0; i<data.length; i++){
        if(data[i].users === "Women"){
            // console.log(data[i]);

            let card = document.createElement("div");

            let img = document.createElement("img");
            img.setAttribute("src",data[i].avatar);

            let name = document.createElement("h3")
            name.textContent = data[i].name;

            let price = document.createElement("h5");
            price.textContent = "$ "+data[i].price;

            let addTofavorite = document.createElement("button");
            addTofavorite.textContent = "🤍";

            let addToCart = document.createElement("button");
            addToCart.textContent = "Add to Cart";
            
            card.append(img,name,addTofavorite,price,addToCart)
            container.append(card);
        }
    }
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