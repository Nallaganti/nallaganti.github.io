<template>
<div class="container">
  <div class="Project-Box">
    <ul v-for="Project in Projects" class="Project">
     <div class="img-class">
      <img src="../assets/Project1.png" v-show="Project.Title=='Self Portal'"height="250px">
      <img src="../assets/Project2.png"  v-show="Project.Title=='Mobile Attendance System'"height="250px">
      <img src="../assets/Project3.png" style="opacity: 0.8;" v-show="Project.Title=='Maze Solver, Travel Planner'"height="250px">
      <img src="../assets/Project4.png" v-show="Project.Title=='Tribute Page'"height="250px">
      <img src="../assets/Project5.png" v-show="Project.Title=='Zomato-Clone'"height="250px">

     </div>
     <div class="ProName">
      <li>{{ Project.Title }}
      <br /><span class="techstack">- {{Project.TechStack}} -</span></li>
     </div>
    </ul>
  </div>
</div>
</template>

<script setup>
import {reactive} from 'vue'
const Projects = reactive([
  {Title:'Self Portal', TechStack:'Vue Js'},
  {Title:'Mobile Attendance System', TechStack:'Java,HTML,CSS'},
  {Title:'Maze Solver, Travel Planner', TechStack:'Java,JS,Bootstrap'},
  {Title:'Tribute Page', TechStack:'Bootstrap',},
  {Title:'Zomato-Clone',TechStack:'Bootstrap,Html,Css'} 
])
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  //height: 100%;
  display: flex;
  flex-direction: column;
}
.Project-Box{
  margin:20px;
  height: fit-content;
  padding-top:40px;
  width: 100%; 
  display: grid;
  border-radius: 10px;
  grid-template-columns: .3fr .3fr.3fr;
  grid-template-rows: 1fr 1fr;
  @media only screen and (max-width: 600px){
    //border: 2px solid white ;
    margin-top:20px;
    margin-left:5px;
    margin-right: 0;
    height: fit-content;
    //width: 100%; 
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  
    border-radius: 10px;
   
  }

}

.Project-Box>*{
  //border:2px solid white; 
  box-shadow:0px 1px rgb(177, 10, 141), 0 6px 20px 0 rgb(62, 2, 2); 
  margin:20px;

}
.Project{
  display: flex;  
  flex-direction: column;
  padding-left: 0;
  .img-class{
    height: 85%;    
  }
  .ProName{
    list-style: none;
    height: 15%;
    text-align: center;
    //border-top:1px solid white;
    background-color: rgb(5, 4, 5);
    color: aliceblue;
    li{
      padding-top:5px;
    }
  }
}
.Project>*{
  //border:2px solid white;
}
.techstack{
  opacity: 0.5;
  font-style: italic;
}
.img-class{
  //border:2px solid white;
  
  img{
    width:100%;
    border-radius: 10px;
    //padding: 15px;
  }
}
</style>