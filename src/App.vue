<template>
  <div>
    <header class="bio">
      <h1>Juana Copello</h1>
      <h2>Visual Journalist</h2>
    </header>
    <main>
      <AboutMe />
      <ProjectsLN />
    </main>
    <footer>
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
    </footer>
    <AboutMe />
    <a href=#topBio><button class="scrollTopBtn">Go back</button></a>
  </div>
</template>
<style scoped>
footer {
  max-width: 1000px;
  margin: 50px auto 0;
}

.socialMedia svg {
  color: black;
  height: 1.5em;
  margin: 0 20px;
}

.socialMedia {
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 20px 0;
  border-top: 2px solid #000000;
}

.bio {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: unset;
  padding: 2rem;
  /*background-color: #000000; #f4f0f0 #0c2332*/
  color: #000000;
  text-align: center;
}

.bio h1 {
  line-height: 1.1;
  letter-spacing: 0.03rem;
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 500;
}

.bio h2 {
  font-size: 18px;
  font-weight: 300;
  margin: auto;
  line-height: 1.3;
}

.bio p {
  font-weight: 300;
  margin: 0 30px;
}

.navbar {
  display: flex;
  flex-direction: row;
}

.navbar p {
.navbar p {
  display: inline-block;
  position: relative;
}

.navbar p:hover {
.navbar p:hover {
  cursor: pointer;
}

.navbar p:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: white;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.navbar p:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.scrollTopBtn {
  position: sticky;
  bottom: 0;
  right: 0;
  margin: 30px 40px;
  padding: 20px 0;
  border-radius: 10px;
}

@media screen and (min-width: 1000px) {
  .bio{
    padding: 2rem 0 1rem;
  }

}
</style>

<script>
import ProjectsLN from "./components/ProjectsLN.vue";
import AboutMe from "./components/AboutMe.vue";

export default {
  name: "app",
  components: {
    ProjectsLN,
    AboutMe,
  },
};
</script>