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
      <p>
        Uso la información para contar historias de forma visual. 
        Licenciada en Comunicación Periodística (UCA). Investigo, maqueto y programo en
        el equipo de Narrativas Digitales e Infografía en
        <span>LA NACION</span>. 
      </p>
      
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
    padding-top: 10px;
    width: 90%;
    margin: auto;
}

p{
  padding: 30px 0 10px;
  line-height: 1.3;
  max-width: 740px;
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
