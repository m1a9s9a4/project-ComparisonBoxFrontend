<template>
    <v-row>
        <v-col>
            <Twitter />
        </v-col>
        <v-col>
            <Facebook />
        </v-col>
    </v-row>
</template>

<script>
import Twitter from './Twitter';
import Facebook from './Facebook';

export default {
    components: {
        Twitter,
        Facebook,
    }
}
</script>