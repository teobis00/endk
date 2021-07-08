<style lang="less">
svg.large-path {
	width: 240vw;
	left: 20vw;
	text {
		font-family: "Open Sans", sans-serif;
		font-size: 18px;
		font-weight: 700;
		padding: 0;
		margin: 0;
		line-height: 18px;
		opacity: 0.9;
		&.ton {
			fill: url(#p1);
		}
		&.metros {
			fill: url(#p2);
		}
		&.ha {
			fill: url(#p3);
			opacity: 0.7;
		}
		&.per {
			fill: url(#p4);
			opacity: 0.7;
		}

		&.final {
			fill: url(#p5);
			opacity: 0.7;
		}
	}
}
</style>
<template>
	<svg class="large-path" ref="largePath" viewBox="-1 0 490 45" fill="blue">
		<circle
			cx="1"
			cy="26.5"
			r="1.4"
			stroke="#7F7B6B"
			stroke-width="0"
			fill="#7F7B6B"
		/>

		<circle
			cx="60"
			cy="4"
			r="1.4"
			stroke="#7F7B6B"
			stroke-width="0"
			fill="#7F7B6B"
		/>

		<circle
			cx="180"
			cy="20"
			r="1.4"
			stroke="#7F7B6B"
			stroke-width="0"
			fill="#7F7B6B"
		/>

		<circle
			cx="240"
			cy="4"
			r="1.4"
			stroke="#7F7B6B"
			stroke-width="0"
			fill="#7F7B6B"
		/>

		<circle
			cx="340"
			cy="25"
			r="1.4"
			stroke="#7F7B6B"
			stroke-width="0"
			fill="#7F7B6B"
		/>

		<circle
			cx="390"
			cy="4"
			r="1.4"
			stroke="#7F7B6B"
			stroke-width="0"
			fill="#7F7B6B"
		/>

		<circle
			cx="450"
			cy="4"
			r="1.4"
			stroke="#7F7B6B"
			stroke-width="0"
			fill="#7F7B6B"
		/>

		<path
			id="line-path-large"
			d="M 2,26 L 60,4 L 130,4 L 180,20 L 240,4 L 290,4 L 340,25 L 390,4 L 450,4"
			fill="transparent"
			stroke="#7F7B6B"
			stroke-width="0.7"
		/>

		<defs>
			<mask id="t1">
				<image
					height="500"
					width="600"
					xlink:href="~/assets/img/texture/t4.jpg"
				></image>
			</mask>

			<pattern
				width="365"
				height="160"
				x="22"
				y="22"
				id="p1"
				patternUnits="userSpaceOnUse"
			>
				<image
					height="190"
					width="190"
					xlink:href="~/assets/img/texture/t5.png"
				></image>
			</pattern>

			<pattern
				width="365"
				height="160"
				x="22"
				y="42"
				id="p2"
				patternUnits="userSpaceOnUse"
			>
				<image
					height="190"
					width="290"
					xlink:href="~/assets/img/texture/t5.png"
				></image>
			</pattern>

			<pattern
				width="365"
				height="160"
				x="22"
				y="42"
				id="p3"
				patternUnits="userSpaceOnUse"
			>
				<image
					height="190"
					width="450"
					xlink:href="~/assets/img/texture/t5.png"
				></image>
			</pattern>

			<pattern
				width="375"
				height="160"
				x="42"
				y="22"
				id="p4"
				patternUnits="userSpaceOnUse"
			>
				<image
					height="190"
					width="560"
					xlink:href="~/assets/img/texture/t5.png"
				></image>
			</pattern>

			<pattern
				width="375"
				height="160"
				x="122"
				y="22"
				id="p5"
				patternUnits="userSpaceOnUse"
			>
				<image
					height="190"
					width="560"
					xlink:href="~/assets/img/texture/t5.png"
				></image>
			</pattern>
		</defs>

		<text x="62" y="22" class="ton" mask="url(#t1)">
			{{ numbers.n1 | tnumber }} ton
		</text>
		<text x="154.5" y="36" class="metros" mask="url(#t1)">
			{{ numbers.n2 | tnumber }} m2
		</text>
		<text x="234" y="23" class="ha" mask="url(#t1)">
			{{ numbers.n3 | tnumber }} ha
		</text>
		<text x="330" y="42" class="per" mask="url(#t1)">
			{{ numbers.n4 | tnumber }}%
		</text>
		<text x="384.5" y="23" class="final" mask="url(#t1)">1 ha</text>
	</svg>
</template>

<script>
import ProgressBar from "progressbar.js";
import { TweenMax } from "gsap";

export default {
	name: "endk-large-path",
	props: ["percent"],
	data() {
		return {
			bar: null,
			numbers: { n1: 0, n2: 0, n3: 0, n4: 0 },
		};
	},
	filters: {
		tnumber(v) {
			if (v === 0) {
				return "‏‏‎ ‎ ‎ ‎";
			}
			return Math.round(v);
		},
	},
	mounted() {
		this.bar = new ProgressBar.Path("#line-path-large", {
			easing: "linear",
			duration: 200,
		});
	},
	watch: {
		percent(n) {
			// this.bar.set(n / 100);
			this.bar.animate(n / 100);
			if (n > 16) {
				TweenMax.to(this.numbers, 0.6, { n1: 33 });
			} else {
				TweenMax.to(this.numbers, 0.6, { n1: 0 });
			}

			if (n > 34) {
				TweenMax.to(this.numbers, 0.6, { n2: 200 });
			} else {
				TweenMax.to(this.numbers, 0.6, { n2: 0 });
			}

			if (n > 46) {
				TweenMax.to(this.numbers, 0.6, { n3: 120 });
			} else {
				TweenMax.to(this.numbers, 0.6, { n3: 0 });
			}
			if (n > 61) {
				TweenMax.to(this.numbers, 0.6, { n4: 90 });
			} else {
				TweenMax.to(this.numbers, 0.6, { n4: 0 });
			}
		},
	},
};
</script>
