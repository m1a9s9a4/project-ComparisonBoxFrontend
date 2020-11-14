<template>
    <v-app>
        <Header />
        <v-container>
            <router-view />
        </v-container>
        <Footer />
    </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
    components: {
        Header,
        Footer,
    },
    mounted() {
        this.$ga.page(this.$route.path);
    }
};
</script>