<template>
    <nav class="header">
        <img class="logo-image" src="@/assets/DPIOpticsC2-text.png"/>
        <ul>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/">Home</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'Header',
  methods: {

  },
  components: {

  },
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 150px;
  background: white;
  display: inline-block;
}

.logo-image {
  width: 350px;
  padding: 20px 0px 0px 30px;
  vertical-align: top;
  float: left;
}

/* List of links */
ul {
  list-style-type: none;
  overflow: hidden;
  margin-right: 5%;
  margin-top: 100px;
  padding: 0px;
}

li {
  float: right;
  margin-right: 3%;
}

li a {
  color: black;
  text-align: center;
  font-size: 20px;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;
}

li a::after {
  display: block;
  background-color: red;
  width: 100%;
  left: 0;
  transform-origin: bottom left;
  height: 5px;
  position: relative;
  bottom: 2px;
  transform: scaleX(0);
  transition: .3s ease;
  content: "";
}

li a:hover::after {
  transform: scaleX(1);
}

li a:hover {
  font-weight: bold;
}

li a:active {
  font-weight: bold;
}
</style>