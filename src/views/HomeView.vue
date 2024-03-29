<template>
 <div class="contents">
            <div class="nav">
                <p>The World Needs What<br />You've Got To Offer.</p>
                <!--<a href="CV.pdf" @click="downloadPdf('../assets/CV.pdf')" class="Cv-link" alt="resume" download>-->
                <p class="Cv-link" alt="resume" download @click="downloadPdf">
                Download Cv></p>                
            </div>
            <div class="main">
                <p class="main-content">
                    <span class="From">From the moment</span><br /> I typed my first “Hello, World!” to the intricate dance of algorithms, my software journey began.
                    Late nights turned into bug hunts, and each line of code became a chapter in my story.
                    <br />
                    <router-link :to="{ name: 'Experience' }" class="linkToExperience">About Me></router-link>
                </p></div>
            <div class="item1">                
                <p class="item-content">
                <span>5+<br /></span>Project(s) Completed</p>
            </div>
            <div class="item2">
                <div class="item-content"><span class="java-expert">Java <br />Expert</span></div>
            </div>
            <div class="item3">
                <p class="item-content">
                <span>1+<br /></span>Year(s) FrontEnd</p></div>
            <div class="item4">
                <p class="item-content">
                <span>1+<br /></span>Year(s) Data Analytics</p>
            </div>
            <div class="item5">My Projects
            <router-link :to="{ name: 'Projects' }" class="linkToExperience">All></router-link>
            <img class="img" src="../assets/Project5.png" height="130px">
            </div>
            <div class="item6"><p>Skills</p><skills /></div>
          
        </div>
</template>

<script setup>
import Skills from '../views/SkillsView.vue';
import {ref} from 'vue'
const pdfUrl = ref('../assets/CV.pdf');
const pdfFileName = ref('CV');
function downloadPdf(){
    const link = document.createElement('a');
      link.href = pdfUrl.value;
      link.target = '_blank';
      link.download = pdfFileName.value;
      // Simulate a click on the element <a>
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
}
</script>

<style lang="scss" scoped>


.contents{
    height: 100%;
    display: grid;
    //border: 2px solid white;
    //margin-left:10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: .1fr .3fr .3fr .1fr ;
    grid-template-areas: 
    "nav nav nav nav"
    "item1 item2 main main"
    "item3 item4 main main"
    "item5 item5 item6 item6";
    gap:10px 10px;
    text-align: center;
    @media only screen and (max-width: 900px){
        height: 100%;
        margin-left:0px;
        padding:10px;
        width:100%;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: .5fr 1.2fr .7fr .7fr 1.2fr 2fr;
        grid-template-areas: 
        "nav nav"
        "main main"
        "item1 item2"
        "item3 item4"
        "item5 item5"
        "item6 item6"
        //"footer footer";
    }
}
.contents>*{
    //border: 1px solid rgb(253, 249, 249);    
}
.contents>*:not(:first-child ){
    //border: 1px solid rgb(33, 33, 33);
    box-shadow:0px 1px rgb(177, 10, 141), 0 6px 20px 0 rgb(62, 2, 2);
    background-color: black;
    border-radius: 10px;
    margin:10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.item-content{
    //border: 2px solid rgb(225, 9, 135);
    span{
        font-size: 50px;
    }
    .java-expert{
        font-size: 35px;
    }
}
.main-content{
    //border: 2px solid rgb(225, 9, 135);
    //text-wrap: wrap;
    font-size: 15px;
    padding:0px 30px;
    line-height: 25px;
    color: aliceblue;
    //font-family: monospace;
    
    font-family: Arial, Helvetica, sans-serif;
    @media only screen and (max-width:900px){
        padding:0px 6px;  
        font-size: 15px;
        font-family: Arial, Helvetica, sans-serif;
    }
    .From{
        font-size: 20px;  
    }
    
}
.linkToExperience{
        color: #6699CC;
        font-family: monospace;
        text-decoration: none;
        font-size: 18px;
        i{
            text-decoration: none;
        }
    }
.nav{
    grid-area: nav;
    background-color: rgb(16, 15, 15);
    text-align: start;
    padding-top:40px;
    font-size: 30px;
    font-weight:1px;
    display: flex;
    flex-direction: row;
    font-family: Arial, Helvetica, sans-serif;
    //font-family: monospace;
    line-height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .Cv-link{
        //color: rgb(27, 66, 165);
        color: #6699CC;;
        font-size: 18px;
        font-family: monospace;
        margin-right: 20px;
        padding-right: 20px;
        i{
            text-decoration: none;
        }
    }
    @media only screen and (max-width: 900px){
        font-size: 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        .Cv-link{
        color: rgb(27, 66, 165);
        font-size: 10px;
        //margin-right: 20px;
        //padding-right: 20px;
        align-self: flex-end;
        i{
            text-decoration: none;
        }
        //opacity: 0.7;
        }
    }
 }

.item1{
    grid-area:item1;
    
    
}
.item2{
    grid-area:item2;
}
.item3{
    grid-area:item3;
}
.item4{
    grid-area:item4;
}
.item5{
    grid-area:item5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:5px;      
    font-size: 30px;    
    img{
        padding:10px;
        border: 2px solid rgb(120, 119, 119);
        border-radius: 10px;
    }
    .img{
        box-shadow:0px 1px rgb(16, 15, 15), 0 6px 20px 0 rgb(16, 15, 15);
        background-color: rgb(16, 15, 15);
    }
}
.item6{
    grid-area:item6;
    font-family: Arial, Helvetica, sans-serif; 
    //font-family: monospace;
    text-align: start;
    max-height: fit-content;
    //font-weight: bold;
     p{
        //border:2px solid rgb(249, 247, 247);
        margin-left: 30px;
        font-size: 20px;
     }
     
}
.main{
    grid-area:main;
    display: inline-block;
}
.footer{
    grid-area:footer;
    background-color: rgb(16, 15, 15);
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

        background-color: rgb(5, 4, 5);
        margin-top:50px;
        display: flex;
        justify-content: center;
        z-index: 1000; 
        padding:10px;
        padding:20px;       
        color:aliceblue;
        //border: 2px solid white;
     
     svg{
        margin: 10px;
     }
     svg:hover{
        color: rgb(168, 164, 164);
     }
  }
  footer>*{
    opacity: 0.5;
    //border: 2px solid white;
  }
  
</style>./SkillsView.vue