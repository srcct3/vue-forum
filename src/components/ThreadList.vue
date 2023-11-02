<script setup>
import { ref } from "vue";
import sourceData from "../data.json";
import { RouterLink } from "vue-router";

defineProps({
    threads: {
        type: Array,
        required: true
    }
})

const users = ref(sourceData.users)

function userById(userId) {
    return users.value.find(u => u.id === userId)
}
</script>

<template>
    <div class="col-full">
        <div class="thread-list">
            <h2 class="list-title">Threads</h2>
            <div class="thread" v-for="thread in threads" :key="thread.id">
                <div>
                    <p>
                        <router-link :to="{ name: 'ThreadShow', params: { id: thread.id } }">{{ thread.title
                        }}</router-link>
                    </p>

                    <p class="text-faded text-xsmall">
                        By <a href="#">{{ userById(thread.userId).name }}, {{ thread.publishedAt }}</a>
                    </p>

                </div>

                <div class="activity">
                    <p class="replies-count">
                        {{ thread.posts.length }} replies
                    </p>

                    <img :src="userById(thread.userId).avatar" alt="" class="avatar-medium">

                    <div>
                        <p class="text-xsmall">
                            <a href="#">{{ userById(thread.userId).name }}</a>
                        </p>
                        <p class="text-xsmall text-faded">{{ thread.publishedAt }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>