<template>
    <form action="/search">
        <v-row>
            <v-col
            cols="12"
            md="4"
            >
            <v-text-field
                v-model="word"
                label="検索キーワード"
                required
            ></v-text-field>
            </v-col>
        </v-row>
    <v-btn
        class="mb-7"
        @click="submit"
        block
        color="success"
    >検索する</v-btn>
    </form>     
</template>

<script>
export default {
    data: function() {
        return {
            word: '',
        }
    },
    methods: {
        submit() {
            if (this.word) {
                this.$router.push('/search/'+this.word);
            }
        }
    }
}
</script>