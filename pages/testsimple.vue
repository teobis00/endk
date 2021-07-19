<style lang="less">
.content-carrousel {
	width: 700px;
	height: 600px;
	margin-left: 400px;
	.carusel {
		margin-right: 400px;
		width: 100%;
		height: 400px;
	}
}
</style>
<template>
	<div class="content-carrousel">
		<div class="carusel">
			<endk-simple-car :indice="indice" />
		</div>
		<button v-on:click="prev">prev</button>
		<button v-on:click="next">next</button>
	</div>
</template>
<script>
import endkSimpleCar from "~/components/endkSimpleCar";
export default {
	name: "testsimple",
	layout: "blank",
	data() {
		return {
			indice: 0,
		};
	},
	components: {
		endkSimpleCar,
	},
	methods: {
		next() {
			this.indice++;
		},
		prev() {
			this.indice--;
		},
	},
};
</script>
