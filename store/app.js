export const state = () => ({
  detalleColeccionOpen: false,
  locomotiveOn: true,
  debugPos: false,
  scroll: {
    isScrolling: false,
    limit: {
      x: 0,
      y: 0,
    },
    x: 0,
    y: 0,
    windowWidth: 0,
    section: "",
  },
});

export const getters = {
  getDetalleColeccionOpen(state) {
    return state.detalleColeccionOpen;
  },
  getWindowWidth(state) {
    console.log("getting Window With", state.windowWidth);
    return state.windowWidth;
  },
  getLocomotiveOn(state) {
    return state.locomotiveOn;
  },
  getSection(state) {
    // console.log("getter getSection", state.section);
    return state.section;
  },
  getDebugPos(state) {
    return state.debugPos;
  },
  getX(state) {
    return Math.round(state.scroll.x);
  },
  getPInicio(state, getters) {
    /* const Inicio */
    const bloque = 0;
    const factor = 1;
    /* ************ */

    const width = state.windowWidth;

    let avance = state.scroll.x - width * bloque;
    avance = Math.round(avance) > 0 ? Math.round(avance) : 0;

    return {
      p: Math.round((100 * avance) / (width * factor)),
      b: bloque,
      a: avance,
      x: Math.round(state.scroll.x),
    };
  },
  getPColleccion(state, getters) {
    /* const Inicio */
    const bloque = 1;
    const factor = 1;
    /* ************ */

    const width = state.windowWidth;

    let avance = state.scroll.x - width * bloque;
    avance = Math.round(avance) > 0 ? Math.round(avance) : 0;
    return {
      p: Math.round((100 * avance) / (width * factor)),
      b: bloque,
      a: avance,
      x: Math.round(state.scroll.x),
    };
  },
  getPSection3(state, getters) {
    /* const Inicio */
    const bloque = 2;
    const factor = 0.8;
    /* ************ */

    const width = state.windowWidth;

    let avance = state.scroll.x - width * bloque;
    avance = Math.round(avance) > 0 ? Math.round(avance) : 0;
    return {
      p: Math.round((100 * avance) / (width * factor)),
      b: bloque,
      a: avance,
      x: Math.round(state.scroll.x),
    };
  },
  getPProyectos(state, getters) {
    /* const Inicio */
    const bloque = 2.8;
    const factor = 2;
    /* ************ */

    const width = state.windowWidth;

    let avance = state.scroll.x - width * bloque;
    avance = Math.round(avance) > 0 ? Math.round(avance) : 0;
    return {
      p: Math.round((100 * avance) / (width * factor)),
      b: bloque,
      a: avance,
      x: Math.round(state.scroll.x),
    };
  },
};

export const mutations = {
  setDetalleColeccionOpen(state, payload) {
    state.detalleColeccionOpen = payload;
  },
  setLocomotiveOn(state, payload) {
    state.locomotiveOn = payload;
  },
  setScroll: (state, payload) => {
    state.scroll = Object.assign({}, state.scroll, payload);
  },
  setWindowWidth(state, payload) {
    console.log("setting Window With", payload);
    state.windowWidth = payload;
  },
  setSection(state, payload) {
    state.section = payload;
  },
};
