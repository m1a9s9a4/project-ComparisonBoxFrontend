<template>
    <v-main>
        <h2 v-if="playerType" class="text-center">{{playerType.japanese}}</h2>
        <p class="text-center subtitle">アンケートに回答したいもしくは結果をみたい{{playerType.japanese}}を一つタップしましょう。</p>
        <template v-if="players.length > 0">
            <v-row>
                <v-col md="3" cols="6" v-for="(p, i) in players" :key="i">
                    <Language 
                        :name=p.japanese
                        :english=p.english
                        :imgsrc=p.img
                    />
                </v-col>
            </v-row>
        </template>
        <template v-else>
            <Loading />
        </template>
    </v-main>
</template>

<script>
import Language from './components/Home/Language';
import Loading from './components/Common/Loading';
import axios from 'axios';

export default {
    components: {
        Language,
        Loading,
    },
    data () {
        return {
            title: null,
            playerType: {},
            players: [],
            siteUrl: '',
        }
    },
    methods: {
        _getTypeById(id) {
            axios
            .get(process.env.VUE_APP_API_URL + "/api/v1/player_type/"+id)
            .then(res => {
                this.playerType = res.data;
            })
            .catch(e => {
                console.error(e);
            })
        },
        _getPlayerByTypeId(id) {
            axios
            .get(process.env.VUE_APP_API_URL + "/api/v1/players/type/"+id)
            .then(res => {
                this.players = res.data;
            })
            .catch(e => {
                console.error(e);
            });
        }
    },
    mounted: function () {
        this._getTypeById(this.$route.params["tid"]);
        this._getPlayerByTypeId(this.$route.params["tid"]);
        this.siteUrl = process.env.VUE_APP_URL;
    },
}
</script>