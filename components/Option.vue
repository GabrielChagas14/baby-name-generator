<script setup lang="ts">
import { Gender, Popularity, Length } from "@/data";
interface Optionprops {
  option: {
    title: string;
    category: string;
    buttons: Gender[] | Popularity[] | Length[];
  };
  options: {
    gender: Gender;
    popularity: Popularity;
    length: Length;
  };
}
const props = defineProps<Optionprops>();

const computedButtonClasses = (value, index) =>{
    const classNames = [];
    if(props.options[props.option.category] === value) classNames.push("option-active")
    if(index === 0) classNames.push("tablet:rounded-l-2xl")
    if(index === props.option.buttons.length - 1) classNames.push("tablet:rounded-r-2xl")
    return classNames.join(" ")
}
</script>
<template>
  <div class="option-container">
    <h4>
      <b>{{ option.title }}</b>
    </h4>
    <div class="option-buttons">
      <button
        v-for="(value, index) in option.buttons"
        :key="value"
        class="option"
        :class="computedButtonClasses(value, index)"
        @click="options[option.category] = value"
      >
        {{ value }}
      </button>
    </div>
  </div>
</template>
<style scoped>
.option-container {
  @apply mb-8;
}
h4 {
  @apply mb-4;
}
.option {
  @apply bg-white outline outline-2 outline-dark-pink border-none p-3 w-48 text-base cursor-pointer font-extralight ;
}

.option-active {
  @apply bg-dark-pink text-white;
}
</style>
