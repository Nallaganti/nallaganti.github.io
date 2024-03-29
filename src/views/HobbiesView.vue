<template>
  <div class="container">
    <heading>Art is the lie that enables us to realize the truth.
      <p>– Pablo Picasso</p>
    </heading>
    <div class="Project-Box">
      <ul v-for="Project in Projects" class="Project">
       <div class="img-class">
        <img src="../assets/Anime.png" v-show="Project.Title=='Anime'"height="350px">
        <img src="../assets/Mandala3.png"  v-show="Project.Title=='Mandala  '"height="340px">
        <img src="../assets/Mandala2.png" v-show="Project.Title=='Mandala'"height="350px">
  
       </div>
       <div class="ProName">
        <li>{{ Project.Title }}
        <br /><span class="techstack">--</span></li>
       </div>
      </ul>
    </div>
  </div>
  </template>
  
  <script setup>
  import {reactive} from 'vue'
  const Projects = reactive([    
    {Title:'Mandala  '},
    {Title:'Mandala'},
    {Title:'Anime'},
  ])
  </script>
  
  <style lang="scss" scoped>
  .container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    //border: 2px solid white;
    //font-family: monospace;
  }
  heading{
    text-align: start;
    padding-top:40px;
    padding-left:10px;
    font-size: 30px;
    font-weight:1px;
    margin-left:20px;
    margin-top:30px;
    //font-family: monospace;
    //border:2px solid white;
    p{
      font-size: 15px;
      text-align: center;
      font-style: italic;
    }

  }
  .Project-Box{
    //border:2px solid white;
    margin:20px;
    height: fit-content;
    padding-top:40px;
    width: 100%; 
    display: grid;
    grid-template-columns: .3fr .3fr.3fr;
    grid-template-rows: 1fr;
    @media only screen and (max-width: 600px){
      width: 100%; 
      display: grid;
      margin-left: 5px;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
     
    }
  
  }
  
  .Project-Box>*{
    box-shadow:0px 1px rgb(177, 10, 141), 0 6px 20px 0 rgb(62, 2, 2); 
    margin:20px;
  
  }
  .Project{
    display: flex;  
    flex-direction: column;
    border-radius: 10px;
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
    padding:10px;
    
    img{
      width:100%;
      //padding: 15px;
      border-radius: 10px;
    }
  }
  
  </style>