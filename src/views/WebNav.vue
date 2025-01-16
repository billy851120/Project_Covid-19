<template>
	<div class="container">
		<div class="row">
			<div class="col-4">
				<card>
					<template v-slot:title>全台快篩劑查詢</template>
					<!-- <template v-slot:txt>1111111111111111111</template> -->
					<template v-slot:link
						><router-link to="RapidTest" class="btn btn-primary"
							>前往元件</router-link
						></template
					>
				</card>
			</div>
		</div>
	</div>
</template>

<script>
//導入元件
import card_components from '../components/Card.vue';

export default {
	name: 'LearningWebNav',

	data() {
		return {};
	},

	mounted() {},

	methods: {},
	components: {
		card: card_components,
	},
};
</script>

<style lang="scss" scoped>
.nav-link {
	text-decoration: none;
}
</style>
