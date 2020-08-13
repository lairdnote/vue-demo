<template>
    <v-container>
        <v-layout column>
            <v-flex class="display-2 text-xs-center my-5"
                >Get Post</v-flex
            >
            <v-flex>
                <div class="headline mt-3">Lorem ipsum</div>
                <h2>{{ msg }}</h2>
                <p class="subheading mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </v-flex>
            <v-flex>
                <div class="headline mt-3">Lorem ipsum</div>
                <p class="subheading mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <p class="subheading mt-3">
                    Nullam nec massa eu est fringilla lobortis. Praesent in enim
                    in justo blandit varius. Cras placerat arcu in sapien
                </p>

                <p class="subheading mt-3">
                    Aenean erat metus, imperdiet eget nisl laoreet, venenatis
                </p>
            </v-flex>
            <v-flex>
                <div class="headline mt-3">Lorem ipsum</div>
                <p class="subheading mt-3">
                    Nullam nec massa eu est fringilla lobortis. Praesent in enim
                </p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name: 'HomeDetails',
    data() {
        return {
            msg: 'replate'
        };
    },
    mounted() {
        axios
            .get('http://home.resonanat.com/api/v1/index')
            .then(response => (this.msg = response.data.msg));
  
    }
};
</script>

<style scoped></style>
