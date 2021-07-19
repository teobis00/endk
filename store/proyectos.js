export const state = () => ({
  proyectos: [],
  catalogo: "",
  titulo: "",
  contenido: "",
});

export const getters = {
  getProyectos(state) {
    return state.proyectos;
  },
  getCatalogo(state) {
    return state.catalogo;
  },
  getTitulo(state) {
    return state.titulo;
  },
  getContenido(state) {
    return state.contenido;
  },
};

export const mutations = {
  setProyectos(state, payload) {
    state.proyectos = payload;
  },
  setCatalogo(state, payload) {
    state.catalogo = payload;
  },
  setTitulo(state, payload) {
    state.titulo = payload;
  },
  setContenido(state, payload) {
    state.contenido = payload;
  },
};
