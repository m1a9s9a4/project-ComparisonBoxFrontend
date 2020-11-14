<template>
    <v-btn block @click="twitterShare" color="info" target="_blank"><v-icon>mdi-twitter</v-icon> {{ text }}</v-btn>
</template>
<script>
export default {
    data: () => ({
        baseUrl: 'https://twitter.com/intent/tweet',
    }),
    props: {
        title: {
            Type: String,
            Default: '',
        },
        url: {
            Type: String,
            Default: '/',
        },
        text: {
            Type: String,
            Default: 'シェアする',
        },
    },
    methods: {
        twitterShare() {
           window.open(this._createShareUrl(), '_blank');
        },
        _createShareUrl() {
            return this.baseUrl+'?text='+this.title+"%0a言語別、フレームワーク別で知りたかった「どれが書きやすい？」「個人開発に向いてるのは？」アンケート結果公開中！！%0a%20%23combox%0a"+'&url='+this.url;
        },
    }
}
</script>