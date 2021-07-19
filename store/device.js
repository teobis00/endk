export const state = () => ({
  device: {},
});

export const mutations = {
  setDevice(state, value) {
    state.device = value;
  },
};

export const getters = {
  getDevice(state) {
    return state.device;
  },
};
