export const state = () => ({
  debugPos: true,
  scroll: {
    isScrolling: false,
    limit: {
      x: 0,
      y: 0,
    },
    x: 0,
    y: 0,
    windowWidth: 0,
  },
});

export const getters = {
  getDebugPos() {
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
  setScroll: (state, payload) => {
    state.scroll = Object.assign({}, state.scroll, payload);
  },
  setWindowWidth(state, payload) {
    state.windowWidth = payload;
  },
};
