<template>
  <div>
    <section class="about">
      <p>
        Uso la información para contar historias de forma visual. Periodista en
        el equipo de Narrativas Digitales e Infografía en
        <span>LA NACION.</span>.
      </p>
      <div class="socialMedia">
        <font-awesome-icon icon="fa-brands fa-twitter" />
        <font-awesome-icon icon="fa-brands fa-github-alt" />
        <font-awesome-icon icon="fa-brands fa-linkedin-in" />
        <font-awesome-icon icon="fa-solid fa-envelope" />
      </div>
    </section>
  </div>
</template>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
.about {
  width: 60%;
  margin: auto;
}

.socialMedia svg {
  color: black;
  height: 1.5em;
  margin: 0 20px;
}

.socialMedia{
      display: flex;
    justify-content: center;
    flex-direction: row;
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
