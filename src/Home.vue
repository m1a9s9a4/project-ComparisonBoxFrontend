<template>
    <v-main>
        <template v-if="players.length > 0">
            <div v-for="(pt, i) in players" v-bind:key="i">
                <h2 class="text-center text-bold">{{ pt.name }}</h2>
                <v-row>
                    <v-col md="3" cols="6" v-for="(p2, i2) in pt.data" v-bind:key="i2">
                        <Language 
                            :name=p2.japanese
                            :english=p2.english
                            :imgsrc=p2.img
                        />
                    </v-col>
                </v-row>
                <v-divider v-if="i < players.length - 1" class="my-10"></v-divider>
            </div>
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
        }
    },
    methods: {
        getType() {
            axios
            .get(process.env.VUE_APP_API_URL + "/api/v1/player_types")
            .then(res => {
                res.data.map((d) => {
                    this._getPlayerByTypeId(d);
                })
                this.playerType = res.data;
            })
            .catch(e => {
                console.error(e);
            })
        },
        _getPlayerByTypeId(type) {
            axios
            .get(process.env.VUE_APP_API_URL + "/api/v1/players/type/"+type.id)
            .then(res => {
                this.players.push({name: type.japanese, data: res.data});
            })
            .catch(e => {
                console.error(e);
            });
        }
    },
    mounted: function () {
        this.getType();
    },
}
</script>