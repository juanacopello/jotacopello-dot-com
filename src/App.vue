<template>
  <div>
    <header class="bio" id="topBio">
      <h1>Juana Copello</h1>
    </header>
    <ProjectsLN />
    <AboutMe />
    <a href=#topBio><button class="scrollTopBtn">Go back</button></a>
  </div>
</template>
<style scoped>
a {
  text-decoration: none;
  color: inherit;
  font-weight: revert;
}

.bio {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: unset;
  padding: 2rem 0;
  background-color: #0c2332; /*#f4f0f0 #0c2332*/
  color: white;
}

.bio h1 {
  text-transform: uppercase;
  font-weight: 300;
  line-height: 0.7;
  letter-spacing: 0.03rem;
  font-size: 1.5rem;
  margin-bottom: 15px;
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

.scrollTopBtn {
  position: sticky;
  bottom: 0;
  right: 0;
  margin: 30px 40px;
  padding: 20px 0;
  border-radius: 10px;
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