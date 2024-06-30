<template>
  <div>
    <header class="bio">
      <h1>Juana Copello</h1>
      <h2>visual journalist & dataviz developer</h2>
    </header>

    <main class="main-container">
      <AboutMe />
      <ProjectsLN />
      <Awards />
    </main>
    <footer>
      <Icons />
    </footer>
  </div>
</template>
<style scoped>
footer {
  margin: 50px auto 0;
  border-top: 2px solid #000000;
  width: 90%;
}

.bio {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: unset;
  padding: 4rem 0 1rem;
  /*background-color: #000000; #f4f0f0 #0c2332*/
  color: #000000;
  text-align: center;
  width: 90%;
  margin: auto;
  line-height: 1;
}

.bio h1 {
  letter-spacing: 0.03rem;
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 0;
  padding-bottom: 5px;
}

.bio h2 {
  font-size: 16px;
  font-weight: 200;
  color: #000000bd;
}

.bio p {
  font-weight: 300;
  margin: 0 30px;
}

.scrollTopBtn {
  position: sticky;
  bottom: 0;
  right: 0;
  margin: 30px 40px;
  padding: 20px 0;
  border-radius: 10px;
}

.linkToBio {
  text-transform: uppercase;
  text-decoration: none;
}

.linkToBio:visited {
  color: black;
}

.linkToBio:hover {
  background-color: black;
  color: white;
}

.main-container{
  padding-bottom: 40px;
}

@media screen and (max-width: 350px) {
  .bio h1 {
    font-size: 2rem;
  }
}

@media screen and (min-width: 700px) {
  .bio {
    width: 90%;
    margin: auto;
  }
}

@media screen and (min-width: 1000px) {
  .bio {
    max-width: 1100px;
    padding: 2rem 0 1rem;
    margin: auto;
    width: 100%;
  }

  footer {
    width: 100%;
    background-color: #000000;
  }
}
</style>

<script>
import ProjectsLN from "./components/ProjectsLN.vue";
import AboutMe from "./components/AboutMe.vue";
import Icons from "./components/Icons.vue";
import Awards from "./components/Awards.vue"

export default {
  name: "app",
  components: {
    ProjectsLN,
    AboutMe,
    Icons,
    Awards
  },
};
</script>