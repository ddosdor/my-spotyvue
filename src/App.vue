<template>
  <div id="app">
    <el-header>
      <el-container>
        <img src="./assets/logo.png" alt="Vue.js PWA" class="vue-logo"> Vue.js my-spotyve
      </el-container>
    </el-header>
    <el-main>
      <el-container>
        <el-row :gutter="20">
          <el-col :span="24">
            <SpotySearch />
          </el-col> 
          <el-col :span="12">
            <SpotifyResults 
              type="Artists"
            />
          </el-col>
          <el-col :span="12">
            <SpotifyResults 
              type="Albums"
            />
          </el-col>
        </el-row>        
      </el-container>
    </el-main>
  </div>
</template>

<script>
import SpotySearch from '@/components/SpotySearch';
import SpotifyResults from '@/components/SpotifyResults';

export default {
  name: 'app',
  components: {
    SpotySearch,
    SpotifyResults,
  },
};
</script>
