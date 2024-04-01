<template>
    <h3 class="text-h3 mb-4">Posts</h3>
    <p>This component demonstrates fetching data from the BFF server proxying request over web services</p>
    <p class="mb-8">And the capability of persisting application state over the transition from SSR to JS</p>

    <v-progress-circular class="mt-6" :size="42" v-if="isLoading" indeterminate></v-progress-circular>
    <v-table class="mt-6" v-if="!isLoading">
        <thead>
            <tr>
                <th class="text-left">
                    <b>Id</b>
                </th>
                <th class="text-left">
                    <b>Title</b>
                </th>
                <th class="text-left">
                    <b>Completed</b>
                </th>
                <th class="text-left">
                    <b>UserId</b>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in posts" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.completed }}</td>
                <td>{{ item.userId }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const isLoading = ref(true);
    const posts = ref([]);

    onMounted(async () => {
      try {
        const data = await fetch('/api/todos').then(response => response.json());
        posts.value = data;
        isLoading.value = false;
      } catch (error) {
        console.error('Error fetching data:', error);
        isLoading.value = false;
      }
    });

    return {
      isLoading,
      posts
    };
  }
}
</script>
