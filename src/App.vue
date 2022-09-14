<template>
  <div>
    <header class="bio">
      <h1>Juana Copello</h1>
    </header>
    <main>
      <AboutMe />
      <ProjectsLN />
    </main>
    <footer>

    </footer>
  </div>
</template>
<style scoped>
.bio {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: unset;
  padding: 4rem 0;
  /*background-color: #000000; #f4f0f0 #0c2332*/
  color: #000000;
}

.bio h1 {
  line-height: 0.7;
  letter-spacing: 0.03rem;
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 500;
}

.bio h2 {
  font-size: 20px;
  font-weight: 500;
  margin: auto;
  font-size: 20px;
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
  display: inline-block;
  position: relative;
}

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
@media screen and (min-width: 1000px) {
  .bio h2 {
    padding-bottom: 1.5rem;
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