<script setup></script>
<template>
  <div class="container">
    <h1>Baby Name Generator</h1>
    <p>Choose your options and click the "Find Names" buttom bellow</p>
    <div class="options-container">
      <div class="option-container">
        <h4>1) Chosse a gender</h4>
        <div class="option-buttons">
          <button>Boy</button>
          <button>Unisex</button>
          <button>Girl</button>
        </div>
      </div>
      <div class="option-container">
        <h4>1) Chosse the name's popularity</h4>
        <div class="option-buttons">
          <button>Trendy</button>
          <button>Unique</button>
        </div>
      </div>
      <div class="option-container">
        <h4>1) Chosse name's length</h4>
        <div class="option-buttons">
          <button>Long</button>
          <button>All</button>
          <button>Short</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  @apply font-sans text-blue text-center max-w-3xl mx-auto my-0;
}

h1 {
  @apply text-5xl font-bold;
}
</style>
