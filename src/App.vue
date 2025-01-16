<template>
	<div id="app">
		<BackHome></BackHome>
		<router-view></router-view>
	</div>
</template>

<script>
import Vue from 'vue'; //導入Vue

// 導入元件
import BackHome from './components/BackHome.vue';

//全域組件
Vue.component('BackHome', BackHome);

export default {
	return() {},
};
</script>

<style lang="scss"></style>
