<template>
    <div>
        <!--h1>esto se repite en todas las paginas</h1-->
        <navbar />
        
        <div class="container-fluid">
            <nuxt />
        </div>
        
        
    </div>
</template>

<script>
import navbar from '../components/navbar'
export default {
    components: {navbar},

}
</script>
