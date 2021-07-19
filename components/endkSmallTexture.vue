<style lang="less">
.endk-small-texture {
	width: 100%;
	svg {
		width: 100%;
		text {
			font-size: 145px;
			font-family: "Open Sans", sans-serif;
			font-weight: 700;
			opacity: 0.5;
		}
	}
}
</style>
<template>
	<div class="endk-small-texture">
		<svg viewBox="0 0 550 150">
			<defs>
				<mask id="texture">
					<image
						height="800"
						width="800"
						xlink:href="~/assets/img/texture/t5.png"
					/>
				</mask>
			</defs>
			<text :text-anchor="align" :x="posx" y="125" mask="url(#texture)">
				{{ text }}
			</text>
		</svg>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
	props: ["text", "align"],
	computed: {
		posx() {
			return this.align === "start" ? 0 : 552;
		},
	},
};
</script>
