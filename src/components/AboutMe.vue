<template>
  <div>
    <section id="myBio">
      <!-- <h3>¡Hola!</h3> -->
      <p>&#128075;¡Hola!</p>
      <p>
        &#128200; I'm a journalist specializing in
        Data Visualization and Visual Storytelling in
        Buenos Aires, Argentina
      </p>
      <p>
        &#128373; I work at the Graphics Desk in LA NACION, a national news
        media outlet, where I research and develop interactive visual stories.
      </p>
      <p>
        &#128105;&#8205;&#128187;I'm also a lecturer at the Universidad Torcuato Di Tella's
        Design School, where I teach introductory coding and data
        visualization classes to undergraduate students.
      </p>
      <p>&#127912; My pronouns are she/her</p>
    </section>
  </div>
</template>

<style scoped>

#myBio{
  padding-bottom: 20px;
}

p{
  font-weight: 300;

}

div {
  margin: auto;
}

p {
  margin-bottom: 10px;
}
@media screen and (min-width: 1000px) {
  div {
    /* height: 60vh; */
    max-width: calc(1100px * 0.9);
    margin-bottom: 20px;
  }

  h3 {
    font-size: 50px;
    margin-bottom: 10px;
  }

  p {
    width: 800px;
  }
}
</style>

<script>
export default {
  name: "AboutMe",
};
</script>