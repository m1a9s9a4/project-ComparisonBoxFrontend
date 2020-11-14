<template>
    <v-row>
        <template v-if="isStepEven()">
            <v-col cols="5">
                <v-img :src="src"></v-img>
            </v-col>
            <v-col cols="7">
                <h3>Step {{step}}.</h3>
                <p>
                    {{text}}
                </p>
            </v-col>
        </template>
        <template v-else>
            <v-col cols="7">
                <h3>Step {{step}}.</h3>
                <p>
                    {{text}}
                </p>
            </v-col>
            <v-col cols="5">
                <v-img :src="src"></v-img>
            </v-col>
        </template>
    </v-row>
</template>

<script>
export default {
    props: {
        step: {
            type: String,
        },
        text: {
            type: String,
        },
        img: {
            type: String,
        }
    },
    data: () => ({
        src: "",
    }),
    mounted: function() {
        this.src = require("./../../assets/" + this.img);
    },
    computed: {
        stepNum: function() {
            return Number(this.step);
        }
    },
    methods: {
        isStepEven: function () {
            return this.stepNum % 2 == 0;
        }
    }
}
</script>