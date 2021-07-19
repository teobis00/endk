<style lang="less">
.endkCurveText {
	width: 100%;
}
svg.textCurve {
	width: 100%;
	text {
		font-family: "Open Sans", sans-serif;
		font-weight: 700;
		fill: #212121;
		font-size: 9px;
		stroke: #9e9e9e;
		stroke-width: 0.2;
		shape-rendering: crispEdges;
	}
}
</style>
<template>
	<div class="endkCurveText">
		<svg
			class="textCurve"
			:viewBox="viewBox"
			fill="transparent"
			style="background-color:transparent"
		>
			<path :id="id" :d="linelength" stroke="transparent" />
			<text width="0" :style="cTOpacity">
				<textPath
					style="transform:translate3d(0,0,0);"
					alignment-baseline="bottom"
					:xlink:href="`#${id}`"
					id="text-path"
					:startOffset="reveal"
				>
					{{ text }}
				</textPath>
			</text>
		</svg>
	</div>
</template>
<script>
import { TweenMax } from "gsap";

export default {
	name: "endkCurveText",
	data() {
		return {
			id: "",
			offset: { value: 100 },
		};
	},
	mounted() {
		function generateRandomFloatInRange(min, max) {
			return Math.random() * (max - min + 1) + min;
		}
		this.id = `r${generateRandomFloatInRange(2.5, 10.75)}`;
	},
	props: ["text", "showtext"],
	computed: {
		cTOpacity() {
			return {
				transform: "translate3d(0,0,0)",
				opacity: 1 - this.offset.value / 100,
			};
		},
		reveal() {
			return this.offset.value + "%";
		},
		linelength() {
			const line = this.text.length * 4.7 + 24;
			return `M 8,${line} L 8,24 A1 -1, 0, 0 1, 40 24 L 40,30`;
		},
		viewBox() {
			const line = this.text.length * 4.7 + 24;
			return `00 0 50 ${line}`;
		},
	},
	watch: {
		showtext(n) {
			let nvalue = n ? 0 : 100;
			TweenMax.to(this.offset, 0.8, {
				value: nvalue,
				ease: "power3.out",
			});
		},
	},
};
</script>
