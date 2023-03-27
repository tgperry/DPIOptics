<template>
    <footer class="footer">
        <p class="footer-text">&copy; 2021 DPIOptics LLC, All Rights Reserved</p>
        <a target="_blank" href="https://www.linkedin.com/in/david-perry-3b82641/" class="fa fa-linkedin"></a>
        <p class="footer-phone">+1 206 920 8930</p>
    </footer>
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
.footer {
    width: 100%;
    background-color: #efefef;
    height: 75px;
    position: absolute;
    bottom: 0;
    display: inline-block;
}

.footer-text {
    color: gray;
    font-size: 16px;
    font-weight: lighter;
    text-align: left;
    padding: 15px 0px 0px 30px;
    float: left;
}

.fa {
    padding: 16px 18px 20px 18px;
    font-size: 25px;
    width: 20px;
    border-radius: 50%;
    text-decoration: none;
    float: right;
    background: #cccccc;
    color: white;
    margin-right: 4%;
    margin-top: 12px;
    height: 18px;
}

.fa:hover {
    opacity: 0.7;
}

.footer-phone {
    color: gray;
    font-size: 16px;
    font-weight: lighter;
    text-align: left;
    padding: 15px 0px 0px 30px;
    float: right;
    margin-right: 2%;
}
</style>