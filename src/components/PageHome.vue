<script setup>
import { ref } from "vue";
import sourceData from "../data.json";

const threads = ref(sourceData.threads)
const posts = ref(sourceData.posts)
const users = ref(sourceData.users)

function postById(postId) {
    return posts.value.find(p => p.id === postId)
}

function userById(userId) {
    return users.value.find(u => u.id === userId)
}
</script>

<template>
    <h1>Threads</h1>
    <div v-for="thread in threads" :key="thread.id">
        <h2>{{ thread.title }}</h2>
        <div v-for="postId in thread.posts" :key="postId">
            <p>{{ userById(postById(postId).userId).name }}</p>
            <p>{{ postById(postId).text }}</p>
        </div>
    </div>
</template>
