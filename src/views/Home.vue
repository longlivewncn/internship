<template>
  <div>
    <div class="scrim"></div>
    <span>
      <h1>Building an ARC Management System With Scrum Method.</h1>
      <p>By Intern From Taksu Teknologi</p>
    </span>
  </div>
</template>

<script setup></script>

<style scoped>
div {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/images/taksu.jpg") ;
}

.scrim {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .90);
  backdrop-filter: blur(5px);
  background-image: none;
  z-index: 1;
}

span {
  padding: 2vw;
  width: 80%;
  z-index: 2;
}

h1 {
  font-size: calc(1rem + 4vw);
  text-align: left;
  line-height: 1em;
  text-transform: uppercase;
  font-weight: 900;
  color: gray; 
}

p {
  font-weight: 500;
  font-size: calc(1rem + 1vw);
  color: rgba(128, 128, 128, .80);
}
</style>
