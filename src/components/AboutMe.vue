<template>
  <div>
    <section class="about">
      <div class="socialMedia">
         <a href="https://twitter.com/copellojuana" target="_blank"
          ><font-awesome-icon icon="fa-brands fa-twitter"
        /></a>
        <a href="https://github.com/juanacopello" target="_blank"
          ><font-awesome-icon icon="fa-brands fa-github-alt"
        /></a>
        <a href="https://www.linkedin.com/in/juanacopello" target="_blank"
          ><font-awesome-icon icon="fa-brands fa-linkedin-in"
        /></a>
        <a href="mailto:copellojuana@gmail.com" target="_blank"
          ><font-awesome-icon icon="fa-solid fa-envelope"
        /></a>
      </div>
    
    
    <p>About me</p>
    </section>
  </div>
</template>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
.about {
  width: 80%;
  margin: 0 auto;
}

.socialMedia svg {
  color: black;
  height: 1.25em;
  margin: 0 20px;
}

.socialMedia{
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 15px auto;
    width: 90%;
    margin: auto;
}

p{
  text-align: center;
  text-transform: uppercase;
  line-height: 1.3;
}
.about span {
  /*color: rgb(104,104,172);*/
  font-weight: 700;
}

@media screen and (min-width: 700px){
p{
  text-align: left;
}
}

@media screen and (min-width: 1000px) {
  p{
    font-size: 15px;
    margin: auto;
  }

 
}

</style>
<script>
export default {
  name: "AboutMe",
};
</script>
