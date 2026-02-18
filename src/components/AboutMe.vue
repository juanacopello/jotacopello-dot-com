<template>
  <div>
    <section id="myBio">
      <p>&#128075; ¡Hola!</p>
      <p>
        &#128200; I am an argentine visual journalist and data visualization web developer currently based in Italy, studying a Master in Science in Communication Design at Politecnico di Milano.</p>
      <p>
        &#128373; Before, I worked for more than five years at the Visual Storytelling and Graphics team in LA NACION, one of the largest national news
        media organization in Argentina, where I produced and developed interactive projects. I was also an Adjunct Professor at the Universidad Torcuato
        Di Tella's Design School, where I taught introductory coding and data
        visualization classes.
      </p>
      <p>
        &#128105;&#8205;&#128187; I also have experience as a freelance dataviz consultant and developer, working with clients such as the United Nations Population Fund, the European Council on Foreign Relations, and Fundar.
      </p>
      <!-- <p>
        &#127942;My work has been recognised with various accolades, including awards from organisations such as Society for News Design, Malofiej and Sociedad Interamericana de Prensa 
      </p> -->
      <p>&#128105; My pronouns are she/her.</p>
      <p>
        &#128241; You can
        <a href="mailto:copellojuana@gmail.com" target="_blank">email</a> me or
        find me on
        <a href="https://twitter.com/copellojuana" target="_blank">twitter</a>
        and
        <a href="https://www.linkedin.com/in/juanacopello" target="_blank"
          >linkedin</a
        >.
      </p>
    </section>
  </div>
</template>

<style scoped>

p strong{
  font-weight: 600;
}

#myBio {
  padding: 20px 0 40px;
  font-size: 16px;
}

p {
  font-weight: 300;
}

p a {
  color: black;
  font-weight: 300;
}

p {
  margin-bottom: 20px;
}

@media screen and (max-width: 780px) {
  #myBio {
    margin: 0 auto;
    width: 90%;
  }
}
@media screen and (min-width: 1000px) {
  div {
    /* height: 60vh; */
    max-width: 1100px;
    margin-bottom: 20px;
    margin: auto;
  }

  #myBio {
    padding: 25px 0 30px;
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