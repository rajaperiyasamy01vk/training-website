
// dropdown

let dropdown = document.querySelectorAll(".dropdown")
dropdown.forEach((x)=>{

    let select = x.querySelector(".selection")
    let svg = x.querySelector("svg")
    let menu = x.querySelector("#menu")
    let option = x.querySelectorAll("li")
    let selected = x.querySelector(".selected")
    let c=0

    select.addEventListener('click',()=>{


        c=c+1;
        console.log(c)
        if(c%2==0){
            menu.classList.remove("menu-show")
            menu.classList.add("d-none")
            svg.classList.remove("ro")
        }else{
        menu.classList.add("menu-show")
        menu.classList.remove("d-none")
        svg.classList.add("ro")

        setTimeout(()=>{
            menu.classList.remove("menu-show")
            menu.classList.add("d-none")
            svg.classList.remove("ro")
            c=0

        },3000)

       option.forEach((n)=>{
            n.addEventListener('click',()=>{
            menu.classList.remove("menu-show")
            menu.classList.add("d-none")
            svg.classList.remove("ro")
            c=0
            })
        })
        option.forEach((x)=>{
            x.classList.remove("active")
        })
    
        }
        
    })

})

//nav-bar

let menu = document.querySelector(".menu-bar");
let navleft = document.querySelector(".nav-left");
let c =0;
menu.addEventListener("click",()=>{ 
    c=c+1;
    if(c%2!=0){
        navleft.style.display = "flex";
    }else{
        navleft.style.display = "none";
    }


    

})
