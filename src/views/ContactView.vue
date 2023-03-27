<template>
    <div class="contact-view">
        <vue-headful
            title="DPIOptics"
            description="DPIOptics provides optical engineering consulting backed by over forty years of industry experience."
        />
        <Contact />
    </div>
</template>

<script>
import Contact from '@/components/Contact.vue'

export default {
    name: 'ContactView',
    components: {
        Contact
    }
}
</script>