<template>
  <div class="SpotySearch">
    <el-input placeholder="Please type artist name" v-model="artist" class="SpotySearch__search-input">
      <el-button slot="append" icon="el-icon-search"
        @click="submitSearch"
      >Search</el-button>
    </el-input>
  </div>
</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass" scoped></style>