<template>
  <div>
     <div class="socialMedia">
        <a href="https://twitter.com/copellojuana" target="_blank"
          ><font-awesome-icon icon="fa-brands fa-twitter"
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
  color: #ffffff;
  height: 1.3em;
  margin: 0 15px;
}

.socialMedia {
  display: flex;
  justify-content: center;
  flex-direction: row;
  max-width: 1100px;
  margin: auto;
  padding: 20px 0;
}
</style>

<script>

export default {
    name: "Icons",
}
</script>