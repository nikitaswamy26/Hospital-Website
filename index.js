let  doctors = document.querySelectorAll(".team");
let  card = document.querySelectorAll(".card");

let count = 0;

doctors.forEach((card, index)=>{
    card.style.left = `${index * 100}%`
})

const myFun = () =>{
    doctors.forEach((curValue)=>{
        curValue.style.transform=`translateX(-${count * 100}%)`
    })
}

setInterval(()=>{
    count++;
    if(count == doctors.length){
        count=0;
    }
    myFun();
}, 3000);

card.forEach((curCard)=>{
    curCard.addEventListener("click", function(){
        console.log(curCard);
        let div = document.createElement("div");
        div.classList.add("detailCard")
        div.innerHTML=`
        
         <div>
         <i id="icon" class="fa-solid fa-xmark"></i>
         <img src=${curCard.firstElementChild.src} alt="">
         <h2>${curCard.lastElementChild.innerHTML}</h2>
         <p>We Try our best to give the desired results in Chest and Respiratory section ,our Hospital have good Nutrition Detection Team,We have good laboratory system and also we have physiotherapy in our Hospital.</p>
         </div>
        `
        document.querySelector("body").appendChild(div);
        document.getElementById("icon").addEventListener("click", function(){
            div.remove();
        })
    })
})
