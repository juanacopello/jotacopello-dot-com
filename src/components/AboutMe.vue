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
        Investigo, maqueto y programo en
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
  margin: 20px auto;
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
}

p{
  padding: 30px 0 10px;
}
.about span {
  /*color: rgb(104,104,172);*/
  font-weight: 700;
}
</style>
<script>
export default {
  name: "AboutMe",
};
</script>
