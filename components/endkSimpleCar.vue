<style lang="less">
/* FADE IN */
.fade-enter-active {
	transition: opacity 1s;
}
.fade-enter {
	opacity: 1;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
	transition: transform 0.62s ease-in-out, opacity 0.62s ease-in-out;
}
.slide-next-enter-active {
	opacity: 1;
}
.slide-next-enter {
	transform: translate(40%) scale(0.7);
	opacity: 0;
	@media screen and (max-width: 580px) {
		transform: translate(70%) scale(0.7);
	}
}
.slide-next-leave-to {
	transform: translate(-40%) scale(0.7);
	opacity: 0;
	@media screen and (max-width: 580px) {
		transform: translate(-70%) scale(0.7);
	}
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
	transition: transform 0.62s ease-in-out, opacity 0.62s ease-in-out;
}
.slide-prev-enter-active {
	opacity: 1;
}
.slide-prev-enter {
	transform: translate(-40%) scale(0.7);
	opacity: 0;
	@media screen and (max-width: 580px) {
		transform: translate(-70%) scale(0.7);
	}
}
.slide-prev-leave-to {
	transform: translate(40%) scale(0.7);
	opacity: 0;
	@media screen and (max-width: 580px) {
		transform: translate(70%) scale(0.7);
	}
}

#slider {
	width: 100%;
	height: 100%;
	position: relative;
}

.slide {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
<template>
	<div id="slider">
		<transition-group tag="div" :name="transitionName" class="slides-group">
			<div v-if="show" :key="current" class="slide">
				<img :src="slides[current]" alt="" />
			</div>
		</transition-group>
	</div>
</template>
<script>
export default {
	data() {
		return {
			current: 0,
			direction: 1,
			transitionName: "fade",
			show: false,
		};
	},
	props: ["indice", "slides"],
	methods: {
		slide(dir) {
			this.direction = dir;
			dir === 1
				? (this.transitionName = "slide-next")
				: (this.transitionName = "slide-prev");
			var len = this.slides.length;
			this.current = (this.current + (dir % len) + len) % len;
		},
	},
	mounted() {
		this.show = true;
	},
	watch: {
		indice(n, o) {
			if (o < n) {
				this.slide(1);
			} else {
				this.slide(-1);
			}
		},
	},
};
</script>
