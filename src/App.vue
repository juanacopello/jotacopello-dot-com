<template>
  <div>
    <header class="bio" id="top">
      <h1>juana copello</h1>
      <h2>visual journalist</h2>
      <Icons />
      <a href=#myBio class="linkToBio">About Me</a> 
    </header>
    <main>
      <ProjectsLN />
      <AboutMe />
    </main>
    <!-- <a href=#top><button class="scrollTopBtn">Go back</button></a>  -->
    <footer>
     <Icons />
    </footer>

  </div>
</template>
<style scoped>
footer {
  max-width: 1000px;
  margin: 50px auto 0;
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



.scrollTopBtn {
  position: sticky;
  bottom: 0;
  right: 0;
  margin: 30px 40px;
  padding: 20px 0;
  border-radius: 10px;
}

.linkToBio{
text-transform: uppercase;
text-decoration: none;
}

.linkToBio:visited{
  color: black;
}

.linkToBio:hover{
  background-color: black;
  color: white;
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
import Icons from "./components/Icons.vue"


export default {
  name: "app",
  components: {
    ProjectsLN,
    AboutMe,
    Icons
  },
};
</script>