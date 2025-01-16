<template>
	<div class="card" style="width: 18rem">
		<img src="" class="card-img-top" />
		<div class="card-body">
			<h5 class="card-title">
				<slot name="title"></slot>
			</h5>
			<p class="card-text">
				<slot name="txt"></slot>
			</p>
			<slot name="link"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'LearningCard',

	data() {
		return {};
	},

	mounted() {},

	methods: {},
};
</script>

<style lang="scss" scoped></style>
