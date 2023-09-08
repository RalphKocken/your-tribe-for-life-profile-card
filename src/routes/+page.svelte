<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices' 
    export let data
    import { onMount } from "svelte";
    import { gsap } from "gsap/dist/gsap";
    
    
    
    onMount(() => {
        const interestField = document.querySelector('.interest-field .text')
        const careerField = document.querySelector('.career-field .text')
        const infoField = document.querySelector('.info-field .text')
        const text = document.querySelectorAll('.text') 
        
        document.addEventListener("click", (event) => {
            if(event.target.classList.contains('mars')){
                text.forEach(string => {
                    string.style.opacity = "0"
                })
                interestField.style.opacity = "1"
            }
            
            if(event.target.classList.contains('jupiter')){
                text.forEach(string => {
                    string.style.opacity = "0"
                })
                infoField.style.opacity = "1"
            }
            
            if(event.target.classList.contains('venus')){
                text.forEach(string => {
                    string.style.opacity = "0"
                })
                careerField.style.opacity = "1"
            }
        })
        
    })
</script>

<img src="./cockpit.svg" alt= "cockpit" class="cockpit">

<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>

<section class="space">
    <div class="space-content">
        <div class="planet mars"></div>
        <div class="planet jupiter"></div>
        <div class="planet venus"></div>
    </div>
    <div class="rocket-container">
        <img src="./rocket.svg" alt= "rocket" class="rocket">
        <img src="./rocket-fire.svg" alt="rocket fire" class="rocket-fire">
    </div>
</section>

<section class="text-field">
    <p class="text">My name is {data.name}, to gather more information about me, try clicking on every planet!</p>
</section>

<section class="interest-field">
    <p class="text">I like to play {data.interest} and {data.interest2}, also I like to {data.interest3}. Messing aroung with CSS and Javascript animations is something I enjoy too!
</section>

<section class="info-field">
    <p class="text">I am {data.birthday} years old and was born in Alkmaar, but I now live in {data.hometown} for about 6 years.</p>
</section>

<section class="career-field">
    <p class="text">I went to culinary school and worked in a couple of restaurants for almost 9 years.</p>
</section>





<SliceZone slices={data.slices} {components} />

<style>

    .cockpit{
        position: absolute;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        z-index: 100;
        pointer-events: none;
    }

    .space{
        position: absolute;
        width: 100vw;
        height: 100vh;
        background: var(--background);
        overflow: hidden;
    }

    .space-content{
        position: relative;
        width: 80vw;
        height: 80vh;
        margin: 0 auto;
    }

    .planet{
        position: absolute;
        border-radius: 50%;
        background-size: cover;
        background-repeat: repeat-x;
        transform-style: preserve-3d;
        box-shadow: inset 0 0 10px rgba(0,0,0,1),
        0 0 50px #4069ff;
        animation: rotatePlanet 100s linear infinite;
        z-index: 10;
        transition: 0.3s;
        pointer-events: auto;
    }
    
    .planet:hover{
        transform: scale(1.05);
    }

    @keyframes rotatePlanet{
        0%{
            background-position: 0 0;
        }

        100%{
            background-position: -1440px 0;
        }
    }

    .mars{
        top: 30%;
        right: 10%;
        background-image: url("./marsBackground.svg");
        width: 10vw;
        height: 10vw;
        max-width: 100px;
        max-height: 100px;
        background-color: #BC2731;
    }

    .venus{
        top: 25%;
        left: 10%;
        width: 9vw;
        height: 9vw;
        max-width: 120px;
        max-height: 120px;
        background-image: url("./venusBackground.svg");
        background-color: #FFC649;
    }

    .jupiter{
        top: 35%;
        right: 45%;
        width: 16vw;
        height: 16vw;
        max-width: 150px;
        max-height: 150px;
        background-image: url("./jupiterBackground.svg");
        background-color: #E3DCCB;
    }

    .text-field, .interest-field, .info-field, .career-field{
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        color: white;
        z-index: 1000;
        width: 100%;
        max-width: 300px;
    }

    .text{
        font-family: var(--main-font);
        opacity: 0;
        transition: 1s;
    }

    .text-field .text{
        opacity: 1;
    }

    .rocket-container{
        position: absolute;
        top: 20%;
        left: 0;
        display: flex;
        flex-direction: column;
        width: 3vw;
        height: 3vw;
        transform: rotate(80deg);
        animation: moveRocket 2pnpm i -g vercel0s ease-in-out infinite;
        z-index: 50;
    }

    @keyframes moveRocket{
        0%{
           top: 20%;
           left: -10%;
        }  
        100%{
            top: 20%;
            left: 300%;
        }
    }

    .rocket{
        width: 100%;
    }

    .rocket-fire{   
        height: 100%;
        animation: flicker 0.1s linear infinite;
    }

    @keyframes flicker{
        0%{
            transform: translateX(1px);
        }

        50%{
            transform: translateX(-1px);
        }
    }

    .star{
        position: absolute;
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background-color: white;
        z-index: 100;
    }

    .star:nth-of-type(2){
        top: 30%;
        left: 30%;
    }
    .star:nth-of-type(3){
        top: 40%;
        left: 80%;
    }
    .star:nth-of-type(4){
        top: 20%;
        left: 60%;
    }
    .star:nth-of-type(5){
        top: 25%;
        left: 35%;
    }
    .star:nth-of-type(6){
        top: 40%;
        left: 10%;
    }
    .star:nth-of-type(7){
        top: 40%;
        left: 50%;
    }
    .star:nth-of-type(8){
        top: 20%;
        left: 10%;
    }
    .star:nth-of-type(9){
        top: 30%;
        left: 65%;
    }
</style>