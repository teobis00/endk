import Vue from "vue";
import LocomotiveScroll from "@/LocomotiveScroll/plugin/index.js";

import VueAnimXYZ from "@animxyz/vue";
import "@animxyz/core/dist/animxyz.min.css";

Vue.use(VueAnimXYZ);
Vue.use(LocomotiveScroll);

import Icon from "vue-awesome/components/Icon";

import iconDef from "@/plugins/icons.js";

Icon.register(iconDef);

Vue.component("v-icon", Icon);
