<template>
  <div>
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
  </div>
</template>

<style scoped>
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
}
</style>

<script>

export default {
    name: "Icons",
}
</script>