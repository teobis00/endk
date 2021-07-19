<style lang="less">
.customCursor {
	.circle-cursor {
		position: fixed;
		left: 0;
		top: 0;
		pointer-events: none;
		border-radius: 50%;

		&--outer {
			width: 40px;
			height: 40px;
			border: 1px solid rgb(38, 50, 56);
			z-index: 12000;
			opacity: 0.2;
		}

		&--inner {
			width: 5px;
			height: 5px;
			left: -2.5px;
			top: -2.5px;
			z-index: 11000;
			background: #263238;
			svg {
				transform: translateX(-50%) translateY(-50%);
			}
		}

		&--text {
			z-index: 11000;
			font-size: 50px;
			-webkit-text-stroke-width: 2px;
			-webkit-text-stroke-color: black;
			color: transparent;
			font-weight: 700;
			transform-origin: 0 0;
			display: inline-block;
			width: auto;
			white-space: nowrap;
			left: 0px;
			top: 0px;
		}
	}
}

@media screen and (max-width: 580px) {
	.customCursor {
		display: none;
	}
}
</style>
<template>
	<div class="customCursor">
		<div
			ref="cinner"
			class="circle-cursor circle-cursor--inner"
			:style="copacity"
		>
			<div class="csvg" ref="plusvg">
				<v-icon name="plus" scale="1.2" />
			</div>
		</div>
		<div
			ref="couter"
			class="circle-cursor circle-cursor--outer"
			:style="copacity"
		></div>
	</div>
</template>

<script>
import { TweenMax } from "gsap";

export default {
	name: "endkCursor",
	data() {
		return {
			clientX: -100,
			clientY: -100,
			isStuck: false,
			isFollow: false,
			outerCursorOriginals: {},
			scursor: true,
			showCursor: false,
		};
	},
	mounted() {
		const plus = this.$refs.plusvg;

		TweenMax.to(plus, 0.2, {
			scale: 0,
		});

		this.prepareCursor();

		this.$store.subscribe((mutation, state) => {
			const e = state?.cursor?.cursor;
			const config = state?.cursor?.config;

			if (e) {
				const outerCursor = this.$refs.couter;

				/* console.log(
					"outerCursor.getBoundingClientRect()",
					outerCursor //.getBoundingClientRect()
				);
				*/

				const outerCursorBox = outerCursor.getBoundingClientRect();
				const target = e.currentTarget;

				/* console.log(
					"target.getBoundingClientRect()",
					target //.getBoundingClientRect()
				);
				*/

				const box = target
					? target.getBoundingClientRect()
					: { x: 0, y: 0 };

				/* Magnetic Cursor */
				this.isStuck = config.stop;

				if (config.showOutter) {
					TweenMax.to(outerCursor, 0.2, {
						x: box.left - 1,
						y: box.top - 1,
						width: config.size,
						height: config.size,
						opacity: 1,
						borderColor: "#212121",
					});
				} else {
					TweenMax.to(outerCursor, 0.2, {
						opacity: 0,
					});
				}

				const innerCursor = this.$refs.cinner;

				TweenMax.to(innerCursor, 0.2, {
					backgroundColor: "rgba(0, 0, 0, 0)",
				});

				const plus = this.$refs.plusvg;

				if (config.plusSize > 1) {
					TweenMax.to(plus, 0.2, {
						scale: config.plusSize,
						x: 8,
						y: 8,
					});
				} else {
					TweenMax.to(plus, 0.2, {
						scale: 1,
						x: 0,
						y: 0,
					});
				}
			} else {
				/* Normal State Cursor */
				const outerCursor = this.$refs.couter;
				this.isStuck = false;
				TweenMax.to(outerCursor, 0.2, {
					width: 40,
					height: 40,
					opacity: 0.4,
					borderColor: "#263238",
				});

				const innerCursor = this.$refs.cinner;

				TweenMax.to(innerCursor, 0.2, {
					backgroundColor: "rgba(0, 0, 0, 1)",
				});

				const plus = this.$refs.plusvg;

				TweenMax.to(plus, 0.2, {
					scale: 0,
				});
			}
		});
	},
	computed: {
		copacity() {
			return this.scursor ? { opacity: 1 } : { opacity: 0 };
		},
	},
	methods: {
		prepareCursor() {
			// console.log("begin");
			const outerCursor = this.$refs.couter;
			const innerCursor = this.$refs.cinner;

			const outerCursorBox = outerCursor.getBoundingClientRect();
			let outerCursorSpeed = 0;

			const unveilCursor = () => {
				const cursor = this.$store.getters["cursor/getCursor"];

				TweenMax.set(innerCursor, {
					x: this.clientX,
					y: this.clientY,
				});

				if (!cursor) {
					// console.log("this is happening");
					TweenMax.set(outerCursor, {
						x: this.clientX - outerCursorBox.width / 2,
						y: this.clientY - outerCursorBox.height / 2,
					});
					setTimeout(() => {
						outerCursorSpeed = 0.2;
					}, 100);
				}
			};

			document.addEventListener("mousemove", unveilCursor);
			document.addEventListener("mousemove", (e) => {
				this.clientX = e.clientX;
				this.clientY = e.clientY;
			});

			const render = () => {
				TweenMax.set(innerCursor, {
					x: this.clientX,
					y: this.clientY,
				});

				if (!this.isStuck) {
					TweenMax.to(outerCursor, outerCursorSpeed, {
						x: this.clientX - outerCursorBox.width / 2,
						y: this.clientY - outerCursorBox.height / 2,
					});
				}

				if (this.showCursor) {
					document.removeEventListener("mousemove", unveilCursor);
				}

				requestAnimationFrame(render);
			};
			requestAnimationFrame(render);
		},
	},
};
</script>
