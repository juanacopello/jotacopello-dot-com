<template>
  <div>
    <header class="bio">
        <h1>Juana Copello</h1>
      <div class="navbar">
        <p>PUBLISHED WORK</p>
        <p>ABOUT ME</p>
      </div>
    </header>
    <ProjectsLN />
  </div>
</template>
<style scoped>
.bio {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: unset;
  padding: 2rem 0;
  background-color: #0c2332; /*#f4f0f0 #0c2332*/
  color: white;
  /*position: fixed;
  width: 100%;
  z-index: 3;
  top: 0;*/
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

@media screen and (min-width: 1000px) {

  .bio h2 {
    padding-bottom: 1.5rem;
  }
}
</style>

<script>
import ProjectsLN from "./components/ProjectsLN.vue";
export default {
  name: "app",
  components: {
    ProjectsLN,
  },
};
</script>