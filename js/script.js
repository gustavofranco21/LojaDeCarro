let menubar = document.querySelector('#menubar');
let navbar = document.querySelector('.navbar');

menubar.onclick = ()=>{
    menubar.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

window.onscroll = ()=>{
   if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
   }else{
    document.querySelector('.header').classList.remove('active');
   }
   
   
   
    menubar.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

window.onload = ()=>{
    if(window.scrollY > 0){
     document.querySelector('.header').classList.add('active');
    }else{
     document.querySelector('.header').classList.remove('active');
    }   
 }

document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-container').classList.toggle('active');
 }

 
document.querySelector('#close-login-btn').onclick = () =>{
    document.querySelector('.login-container').classList.remove('active');
 }

document.querySelector('.home').onmousemove = (e) =>{
    document.querySelectorAll('.home-parallax').forEach(element =>{

        let speed = element.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight -e.pageY * speed) / 90;

        element.style.transform = `translateX(${y}px) translateY(${x}px)`;
    })
 }

document.querySelector('.home').onmouseleave = (e) =>{
    document.querySelectorAll('.home-parallax').forEach(element =>{

        

        element.computedStyleMap.transform = `translateX(0px) translateY(0px)`;
    })
 }

let wrapper = document.querySelector('.wrapper-box');
let activeBox = wrapper.querySelectorAll('.box');
let activeLable = document.querySelector('.activeCircle').querySelectorAll('.fa-circle');
let nextBtn = document.querySelector('#nextBtn');
let preBtn = document.querySelector('#preBtn');

let indexNo = 0;

nextBtn.onclick = () =>{
   indexNo++;
   changeBox();
}

preBtn.onclick = () =>{
   indexNo--;
   changeBox();
}

let changeBox = () =>{
   if(indexNo > activeBox.length-1){
       indexNo=0;
   } else if(indexNo < 0){
       indexNo = activeBox.length -1;
   }

   for(let i=0; i < activeBox.length; i++){
       if(i === indexNo){
           activeBox[i].classList.add('active');
           activeLable[i].classList.add('fa-solid');

           if(window.screen.width > 768){
               wrapper.style.transform = `translateX(${indexNo* -250}px)`;
           }

           

       }else{
           activeBox[i].classList.remove('active');
           activeLable[i].classList.remove('fa-solid');
       }
   }
}

 let fwrapper = document.querySelector('.featured-wrapper-box');
 let fActBox = fwrapper.querySelectorAll('.box');
 let fActLable = document.querySelector('.fActCircle').querySelectorAll('.fa-circle');
 let fNextBtn = document.querySelector('#fNextBtn');
 let fPreBtn = document.querySelector('#fPreBtn');

 let fIndexNo = 0;

fNextBtn.onclick = () =>{
    fIndexNo++;
    fChangeBox();
}

fPreBtn.onclick = () =>{
    fIndexNo--;
    fChangeBox();
}

let fChangeBox = () =>{
    if(fIndexNo > fActBox.length-1){
        fIndexNo=0;
    } else if(fIndexNo < 0){
        fIndexNo = fActBox.length -1;
    }

    for(let i=0; i < fActBox.length; i++){
        if(i === fIndexNo){
            fActBox[i].classList.add('active');
            fActLable[i].classList.add('fa-solid');

            if(window.screen.width > 768){
                fwrapper.style.transform = `translateX(${fIndexNo* -21}vw)`;
            }

            

        }else{
            fActBox[i].classList.remove('active');
            fActLable[i].classList.remove('fa-solid');
        }
    }
}


let rwrapper = document.querySelector('.review-wrapper-box');
 let rActBox = rwrapper.querySelectorAll('.box');
 let rActLable = document.querySelector('.rActCircle').querySelectorAll('.fa-circle');
 let rNextBtn = document.querySelector('#rNextBtn');
 let rPreBtn = document.querySelector('#rPreBtn');

 let rIndexNo = 0;

rNextBtn.onclick = () =>{
    rIndexNo++;
    rChangeBox();
}

rPreBtn.onclick = () =>{
    rIndexNo--;
    rChangeBox();
}

let rChangeBox = () =>{
    if(rIndexNo > rActBox.length-1){
        rIndexNo=0;
    } else if(rIndexNo < 0){
        rIndexNo = rActBox.length -1;
    }

    for(let i=0; i < rActBox.length; i++){
        if(i === rIndexNo){
            rActBox[i].classList.add('active');
            rActLable[i].classList.add('fa-solid');

            if(window.screen.width > 768){
                rwrapper.style.transform = `translateX(${rIndexNo* -20}vw)`;
            }

            

        }else{
            rActBox[i].classList.remove('active');
            rActLable[i].classList.remove('fa-solid');
        }
    }
}
