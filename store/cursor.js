export const state = () => ({
  cursor: false,
  config: {},
});

export const getters = {
  getCursor(state) {
    return state.cursor;
  },
  getConfig(state) {
    return state.config;
  },
};

export const mutations = {
  setCursor(state, payload) {
    state.cursor = payload.e;
    state.config = payload.config;
  },
};
