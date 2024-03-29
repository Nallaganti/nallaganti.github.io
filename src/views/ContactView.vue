<template>
 <div class="container">
    <form ref="form" @submit.prevent="sendEmail" class="form form-items">
      <input  type="text" name="name" placeholder="name" class="form-item">
      <input type="email" name="email" placeholder="email" class="form-item">
      <textarea name="message" placeholder="message" class="form-item text-area"></textarea>
      <input type="submit" value="Send" class="form-item submit-btn">
    </form>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm('service_ik0wm1s', 'template_hc8so0b', this.$refs.form, {
          publicKey: 'rD7-kJf8LD9zfkjvn',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert('Thank You');
            location.reload();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    },
  },
};
</script>
<style lang="scss" scoped>
.container{
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    background-color: rgb(16, 15, 15);
    @media only screen and (max-width: 600px){
     height: fit-content;
    }
  }
  .form-items{
   // margin-left:20px;
    margin-top:20px;
    padding-top:80px;
    display: grid;
    //border: 2px solid white;
    grid-template-columns: .3fr;
    grid-template-areas: "col1";
    width:100%;
    gap:25px;
    align-content: center;
    justify-content: center;
    height: 70vh;   
    @media only screen and (max-width: 600px){
     height: fit-content;
    }
  }
  
  .form-items>*:not(:last-child){
    box-shadow:0px 1px rgb(177, 10, 141), 0 6px 20px 0 rgb(62, 2, 2);
  }
  .form-item{
    border-radius: 5px;
    height: 40px;
    background-color: rgb(5, 4, 5);
    color: aliceblue;
    border: none;
    outline: black;
    padding:5px;
  }
  .text-area{
    resize: none;
    height:150px;
  }
  .submit-btn{
    width: 25%;
    place-self: center;
    background-color: rgb(62, 2, 2);
  }
  
</style>