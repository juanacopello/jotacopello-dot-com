<template>
  <div>
    <section id="myBio">
      <h3>¡Hola!</h3>
      <p>
        &#128200; My name is Juana Copello. I am a journalist specializing in
        <strong>Data Visualization and Visual Storytelling</strong> living in
        Buenos Aires, Argentina<img
          class="argentina"
          src="icons/argentina-flag-icon.png/"
        />
      </p>
      <p>
        👩‍💻 I am currently in the Graphics Desk at LA NACION, a a national news
        media outlet, where I research and develop interactive visual stories.
      </p>
      <p>
        &#127912; I am also an lecturer at the at Universidad Torcuato Di Tella's
        Design School, where I teach introductory coding and data
        visualization classes to undergraduate students.
      </p>
      <p>My pronouns are she/her</p>
    </section>
  </div>
</template>

<style scoped>
strong {
  font-weight: 700;
}

div {
  margin: auto;
}

p {
  margin-bottom: 20px;
}
@media screen and (min-width: 1000px) {
  div {
    height: 60vh;
    max-width: calc(1100px * 0.9);
    margin-bottom: 20px;
  }

  h3 {
    font-size: 50px;
    margin-bottom: 10px;
  }

  p {
    width: 600px;
  }
}
</style>

<script>
export default {
  name: "AboutMe",
};
</script>