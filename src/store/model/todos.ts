const promise = (payload: any) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(payload);
    }, 100);
  });
};

export const state = {
  undo: 0
};

export const actions = {
  add: async (payload: any, commit: (type: string, payload: any) => {}) => {
    const res = await promise(payload);
    commit('save', res);
  }
};

export const mutations = {
  save: (state: object, payload: any) => {
    return {
      ...state,
      undo: payload
    };
  },
};

export default {
  state,
  actions,
  mutations
};
