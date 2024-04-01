<template>
    <v-app>
        <v-app-bar density="compact" :elevation="2" color="primary">
            <template v-slot:prepend>
                <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
            </template>

            <v-app-bar-title>Microscope.Boilerplate.Vue</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn>AD</v-btn>
        </v-app-bar>

        <v-navigation-drawer :rail="rail" permanent v-model="drawer" location="left">
            <v-list>
                <v-list-item to="/" prepend-icon="mdi-home" title="Home"></v-list-item>
                <v-list-item to="/counter" prepend-icon="mdi-plus" title="Counter"></v-list-item>
                <v-list-item to="/posts" prepend-icon="mdi-format-list-bulleted" title="Posts"></v-list-item>
                <v-list-item to="/user" prepend-icon="mdi-format-list-bulleted" title="User"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <v-container>
                <NuxtPage />
            </v-container>
        </v-main>

    </v-app>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(true);
const rail = ref(false);

const toggleDrawer = () => rail.value = !rail.value;

</script>
