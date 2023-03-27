<template>
    <div class="contact">
        <Header />
        <div class="body">
            <p class="copyright">NEW WORDS WORDS</p> 
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Contact',
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

</style>