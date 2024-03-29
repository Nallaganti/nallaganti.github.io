<template>
  <div class="container">
    <div class="left-pane">
        <div class="sidebar-icon" @click="toggleMobileNav">
            <i class="fa-solid fa-angle-left" v-show="mobile" disable="mobileNav" :class="{'icon-active': mobileNav}"></i>
        </div>
        <transition name="mobile-nav">
        <ul v-show="mobileNav" class="drop-down" ref="inner_react">
          <li v-for="item in ListOfHeaderItems.Items" :key="item">
            <router-link @click="toggleMobileNav" class="link" :to="{ name:`${item}`}">{{ item }}</router-link>
          </li>
        </ul>
      </transition>
        <img class="img-class" src="../assets/pp3.png" >
        <div class="text">
            <p class="designation">SOFTWARE ENGINEER</p>
            <p class="name"> <span class="first-letter">A</span>noosha <span class="first-letter">N</span>allaganti</p>
        </div>           
            <ul class="navigation" v-show="!mobileNavBar">
                    <li v-for="item in ListOfHeaderItems.Items" :key="item">
                    <router-link class="link" :to="{ name:`${item}`}">
                        <i class="fa-regular fa-user" v-show="item=='Home'"></i>
                        <i class="fa-solid fa-briefcase" v-show="item=='Experience'"></i>
                        <i class="fa-regular fa-rectangle-list"v-show="item=='Projects'"></i>
                        <i class="fa-solid fa-trophy" v-show="item=='Achievements'"></i>
                        <i class="fa-regular fa-face-laugh-wink" v-show="item=='Hobbies'"></i>
                        <i class="fa-solid fa-phone" v-show="item=='Contact'"></i>
                        {{ item }}</router-link>
                    </li>
            </ul>                 
        </div>
    <div class="right-pane">
        <router-view />
    
    <footer ref="footer">
      <a  href="https://github.com/Nallaganti/"><svg href="https://github.com/Nallaganti/" height="35px" width="45px" viewBox="0 -0.5 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>< id="SVGRepo_iconCarrier"> <title>Github-color</title> <desc>Created with Sketch.</desc> <defs> </defs> < id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-700.000000, -560.000000)" fill="#ffffff"> <path d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560" id="Github"> </path> </g></svg></a>
      <a href="https://www.linkedin.com/in/anoosha-nallaganti/"><svg height="40px" width="70px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="24" cy="24" r="20" fill="#0077B5"></circle> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7747 14.2839C18.7747 15.529 17.8267 16.5366 16.3442 16.5366C14.9194 16.5366 13.9713 15.529 14.0007 14.2839C13.9713 12.9783 14.9193 12 16.3726 12C17.8267 12 18.7463 12.9783 18.7747 14.2839ZM14.1199 32.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2393 22.9446C22.2393 21.1357 22.1797 19.5935 22.1201 18.3182H26.0351L26.2432 20.305H26.3322C26.9254 19.3854 28.4079 17.9927 30.8101 17.9927C33.7752 17.9927 35.9995 19.9502 35.9995 24.219V32.821H31.4922V24.7838C31.4922 22.9144 30.8404 21.6399 29.2093 21.6399C27.9633 21.6399 27.2224 22.4999 26.9263 23.3297C26.8071 23.6268 26.7484 24.0412 26.7484 24.4574V32.821H22.2411V22.9446H22.2393Z" fill="white"></path> </g></svg></a>
      <a href="https://leetcode.com/Anu_023/"><svg height="35px" width="45px" fill="#ffffff" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>LeetCode icon</title><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"></path></g></svg></a>
        </footer>
      </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUpdated } from 'vue';
import { onClickOutside } from '@vueuse/core';
import {useClickOutside} from '../Composables/ClickOutside'

const mobileNavBar = ref(false);
const mobileNav = ref(false);
const mobile = ref(false);
const windowWidth = ref(0);
const inner_react = ref(null);
const ListOfHeaderItems = reactive({
  Items: ['Home', 'Experience', 'Projects','Hobbies','Contact'],
});

 onClickOutside(inner_react, event => {mobileNav.value= false;mobile.value=true;} )
 //useClickOutside(inner_react, event => {mobile.value=true;} )
onMounted(() => {
  window.addEventListener('resize', checkScreen);
  checkScreen();
});
onUpdated(() => {
  window.addEventListener('resize', checkScreen);
  checkScreen();
});
function toggleMobileNav() {
  mobileNav.value = !mobileNav.value;
 // mobile.value = false;
}
function checkScreen() {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value <= 750) {
    mobile.value = true;
    mobileNavBar.value = true;
  } else {
    mobile.value = false;
    mobileNav.value = false;
    mobileNavBar.value = false;
  }
  console.log("window width is",windowWidth.value);
}
</script>

<style lang="scss" scoped>
.container{
    height:100%;
    padding:0px;
    //border: 2px solid rgb(225, 9, 135);
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: rgb(16, 15, 15);
    width:100%;
    color: aliceblue;
    @media only screen and (max-width:750px){
        height:300vh;
        color: aliceblue;
        flex-direction: column;
    }
}
.container>*{
   //border:2px solid black;
}

.left-pane>*{
    //position: absolute;
    color: aliceblue;
    //border: 2px solid white;
    
}
.left-pane{
    @media only screen and (min-width: 750px){
        position: fixed;
        z-index: 100;
        background-color: black;
        width:fit-content;
        height:100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:5px;
    }
    @media only screen and (max-width: 750px){
        color: aliceblue;
        display: flex;
        flex-direction: column;
        align-items: center;
        //border-bottom: 1px solid white;
        
        gap:5px;
        // top:0px;
        // width: 100%;
        // position: fixed;
        // height: fit-content;
        // z-index: 100;
    }  
}
.sidebar-icon{
    position: absolute;
    align-self: start;
    margin-left:10px;
    margin-top: 10px;
}
.img-class{
    //margin-left:25%;
    margin-top:20%;
    width:100px;
    height:120px;
    border-radius: 50%;
    img{
        border-radius: 50%;
        width:100%;
        height:100%;
    }

}
.text>*{
    //border: 2px solid  white;
}
.text{
    margin-right:45px;
    margin-left:45px;
    font-size:15px; 
    padding-left:15px;
    display: flex;
    width:fit-content;
    flex-direction:column;
    
}
.designation{
    //font-family: Arial, Helvetica, sans-serif;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight:bold;
    opacity:0.9;
    //font-style: italic;
}
.name{
   //border: 2px solid rgb(212, 12, 12);
    margin-top: -15px; 
    //padding-left:5px;
    padding-top:2px;
    font-size: 18px;
    opacity:0.8;
    //font-family: monospace;
    .first-letter{
        font-style: italic;
        font-weight:bold;
    }
    
}

.right-pane{
     //margin-left: 350px;
     @media only screen and (min-width: 750px){
        left:300px;
        position: absolute;
        right:0px;
        //height: 100%;
        color:aliceblue;
     }
    @media only screen and (max-width: 750px){
        //position: absolute;
        left:0px;        
       // height:100%;     
        color:aliceblue;
    }
}


.navigation{
    display: flex;
    flex-direction: column; 
    align-self: flex-start;
    margin-left: 30px;
    margin-top:50px;
    //align-items: start;
    //border: 2px solid white;
  ul,li,.link{
    text-decoration: none;
    list-style: none;  
  }
  li{
    //border: 2px solid white;
    padding:25px 0;
  }
}
.drop-down {
    display: flex;
    max-width: 250px;
    max-height: fit-content;
    position: absolute;
    flex-direction: column;
    align-items: start;
    z-index: 100;
    background-color: rgb(11, 11, 11);
    margin: 0;
    //max-width: 250px;
    top: 0;
    left: 0;
    ul,li,.link{
    text-decoration: none;
    list-style: none;  
  }
  li{
    //border: 2px solid white;
    padding:15px 0px;
  }
  }
.navigation>*{
   // border: 2px solid white;
    //padding:10px 0;
    font-family: monospace;
}
.link{
    color: aliceblue;
    //font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    opacity:0.7;
    display: flex;
    gap:10px;
    i{
        opacity: 0.9;
    }
}
.link:hover{
    color: rgb(62, 2, 2);
  }
  footer{

      //background-color: rgb(5, 4, 5);
      margin-top:50px;
      display: flex;
      justify-content: center;
      z-index: 1000; 
      padding:10px;
      padding:20px;       
      color:aliceblue;
      //border: 2px solid white;
      a:hover{
        color: rgb(221, 11, 46);
      }

i{
margin: 10px;
}

}
footer>*{
//opacity: 0.5;
//border: 2px solid white;
}
</style>