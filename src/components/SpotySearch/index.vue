<template>
  <div class="SpotySearch">
    <input v-model="artist" />
    <button block outline="primary" @click="submitSearch">Search</button>
  </div>
</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass" scoped></style>