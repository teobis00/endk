<style lang="less">
.not-found {
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100vw;
	height: 100vh;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: "Open Sans", sans-serif;
	.bloque {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		h1 {
			font-size: 104px;
			font-weight: 700;
			color: #7f7b6b;
			padding: 0;
			margin: 0;
			line-height: 104px;
			@media screen and (min-width: 1440px) {
				font-size: calc(104px + 40%);
				line-height: calc(104px + 20%);
			}
		}
		p {
			margin-left: 20px;
			line-height: 2px;
			font-family: "Open Sans", sans-serif;
			a {
				color: black;
			}
		}
	}
}
</style>
<template>
	<div class="not-found">
		<div class="bloque">
			<h1>404</h1>
			<p>
				Aquí no hay nada...
				<a v-on:click="goInicio">Ir al inicio</a>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	layout: "blank",
	meta: {
		section: "inicio",
	},
	methods: {
		goInicio() {
			console.log("window.location", window.location);
			//window.location.href = window.location.host;
		},
	},
};
</script>
