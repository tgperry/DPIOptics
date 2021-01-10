<template>
    <div class="main-view">
        <vue-headful
            title="DPIOptics"
            description="DPIOptics provides optical engineering consulting backed by over forty years of industry experience."
        />
        <Main />
    </div>
</template>

<script>
import Main from '@/components/Main.vue'

export default {
    name: 'MainView',
    components: {
        Main
    }
}
</script>