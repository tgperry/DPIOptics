<template>
    <div class="about-view">
        <vue-headful
            title="DPIOptics"
            description="DPIOptics provides optical engineering consulting backed by over forty years of industry experience."
        />
        <About />
    </div>
</template>

<script>
import About from '@/components/About.vue'

export default {
    name: 'AboutView',
    components: {
        About
    }
}
</script>