<template>
    <div class="pagenotfound-view">
        <vue-headful
            title="DPIOptics"
            description="DPIOptics provides optical engineering consulting backed by over forty years of industry experience."
        />
        <NoPage />
    </div>
</template>

<script>
import NoPage from '@/components/NoPage.vue'

export default {
    name: 'PageNotFoundView',
    components: {
        NoPage
    }
}
</script>