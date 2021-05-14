import Vue from "vue";

import Icon from "vue-awesome/components/Icon";

import iconDef from "@/plugins/icons.js";

Icon.register(iconDef);

Vue.component("v-icon", Icon);
