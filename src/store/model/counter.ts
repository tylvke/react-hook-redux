const promise = (payload: any)=> {
  return new Promise((resolve)=> {
    setTimeout(()=> {
      resolve(payload);
    },2000)
  })
}

export const state = {
  loading:false,
  count: 1,
};

export const actions = {
  add: async (payload: any,commit: (type: string, payload: any)=>{}) => {
    commit('updateLoading',true);
    const res = await promise(payload);
    commit('updateLoading',false);
    commit('save', res);
  },
};

export const mutations = {
  save: (state: object, payload: any) => {
    return {
      ...state,
      count: payload,
    };
  },
  updateLoading:(state: object, payload: any) => {
    return {
      ...state,
      loading: payload,
    };
  }
};

export default{
  state,
  actions,
  mutations
}
