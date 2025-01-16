<template>
	<div>
		<input type="file" ref="files" @change="aa" />
		<div>
			<img :src="fileData" alt="" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'LearningUploadVedio',

	data() {
		return {
			fileData: '',
		};
	},

	mounted() {},

	methods: {
		aa() {
			var file = this.$refs.files.files[0];
			// console.log(this.$refs.files.files[0]);
			const reader = new FileReader();
			reader.addEventListener('load', this.Loaded);
			reader.readAsDataURL(file);
		},
		Loaded(event) {
			this.fileData = event.target.result;
		},
	},
};
</script>

<style lang="scss" scoped></style>
