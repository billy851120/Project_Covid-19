<template>
	<GmapMap
		:center="center"
		:zoom="15"
		:options="options"
		style="width: 100%; height: 600px"
	>
		<GmapMarker
			:position="marker.position"
			:clickable="false"
			:draggable="false"
		/>
	</GmapMap>
</template>

<script>
export default {
	name: 'LearningGoogleMap',

	data() {
		return {
			marker: { position: { lat: 25.033671, lng: 121.564427 } },
			center: { lat: 25.033671, lng: 121.564427 },
			options: {
				mapTypeControl: false,
				scaleControl: false,
				streetViewControl: false,
				fullscreenControl: false,
				disableDefaultUI: true,
				scrollwheel: true,
				clickableIcons: false,
			},
		};
	},

	mounted() {},

	methods: {},
};
</script>

<style lang="scss" scoped></style>
