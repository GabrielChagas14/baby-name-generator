<script setup lang="ts">
import { Gender, Popularity, Length, names } from "@/data";

interface OptionsState {
  gender: Gender;
  popularity: Popularity;
  length: Length;
}

const options = reactive<OptionsState>({
  gender: Gender.GIRL,
  popularity: Popularity.TRENDY,
  length: Length.SHORT,
});

const computedSelectNames = () => {
  const filterNames = names
    .filter((x) => x.gender === options.gender)
    .filter((x) => x.popularity === options.popularity)
    .filter((x) => {
      if (options.length === Length.ALL) return true;
      else return x.length === options.length;
    });
  selectedNames.value = filterNames.map((x) => x.name);
};

const selectedNames = ref<string[]>([]);
const removeName = (index:number) => {
  const filteredNames = [...selectedNames.value]
  filteredNames.splice(index,1)
  selectedNames.value = filteredNames
}
const optionsArray = [
  {
    title: "1) Chosse a gender",
    category: "gender",
    buttons: [Gender.GIRL, Gender.UNISEX, Gender.BOY],
  },
  {
    title: "2) Chosse the name's popularity",
    category: "popularity",
    buttons: [Popularity.TRENDY, Popularity.UNIQUE],
  },
  {
    title: "3) Chosse name's length",
    category: "length",
    buttons: [Length.SHORT, Length.ALL, Length.LONG],
  },
];
</script>
<template>
  <div class="container">
    <h1>Baby Name Generator</h1>
    <p>Choose your options and click the "Find Names" buttom bellow</p>
    <div class="options-container">
      <Option
        v-for="option in optionsArray"
        :key="option.category"
        :option="option"
        :options="options"
      ></Option>
      <button class="primary" @click="computedSelectNames">Find Names</button>
    </div>
    <div class="cards-container">
      <Card v-for="(name,index) in selectedNames" :key="index" :name="name" @remove="()=>removeName(index)" />
    </div>
  </div>
</template>
<style scoped>
.container {
  @apply font-sans text-blue text-center max-w-3xl mx-auto my-0;
}

h1 {
  @apply text-5xl font-bold mb-4;
}
.options-container {
  @apply bg-pink rounded-4xl p-4 w-11/12 mt-16 mx-auto relative;
}
.primary {
  @apply bg-dark-pink text-white rounded-full border-none py-3 px-16 mt-4 cursor-pointer;
}
.cards-container {
  @apply flex mt-12 flex-wrap w-full;
}
</style>
