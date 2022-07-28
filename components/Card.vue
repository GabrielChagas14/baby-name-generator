<script setup lang="ts">
interface NameProps {
    name: string
    index:number
}
const props = defineProps<NameProps>();

const emit = defineEmits(["remove"])

const removeName = () => {
  emit("remove", props.index)
}

</script>
<template>
  <div class="card">
    <h4>{{ name }}</h4>
    <p @click="removeName">x</p>
  </div>
</template>
<style>
.card {
  @apply w-28pc bg-blue text-white relative rounded-2xl p-4 mr-2 mb-4 cursor-pointer;
}
h4 {
  @apply text-center;
}
.card p {
  @apply absolute top-0 left-3 text-slate-300;
}
</style>
