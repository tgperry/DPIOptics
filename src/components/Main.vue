<template>
    <div class="main">
        <Header />
        <div class="body">
            <p class="copyright">Copyright &copy; 2020 Thomas Perry</p> 
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Main',
  methods: {
    
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
.body {
    padding-top: 200px;
    width: 35%;
    margin-right: auto;
    margin-left: auto;
    line-height: 1.5;
}

.main {
    position: relative;
    min-height: 100vh;
}

.copyright {
    padding-top: 40px;
    padding-bottom: 20px;
    color: gray;
    font-size: 12px;
}
</style>
