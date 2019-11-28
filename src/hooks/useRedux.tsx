import React, { useReducer, createContext } from 'react';

export const Context = createContext(null);

interface Action {
  model: string;
  action: string;
  payload: object;
}

interface Model {
  state: object;
  actions: object;
  mutations: object;
}

const STATES = {};
const ACTIONS = {};
const MUTATIONS = {};

export const combineModels = (models: Model[]) => {
  for (const key in models) {
    if(models[key]) {
      const {state,actions, mutations} = models[key];
      STATES[key] = state
      ACTIONS[key] = actions;
      MUTATIONS[key] = mutations;
    }
  }
}

function reducer(state: object, { model, action, payload }: Action) {
  state[model]=MUTATIONS[model][action](state[model], payload);
  return {
    ...state,
  };
}

const useRedux = (models: Model[]) => {
  combineModels(models)
  const [state, rDispatch] = useReducer(reducer, STATES);
  const commit = (model: string) => {
    return (action: string, payload: any)=> {
      rDispatch({
        model,
        action,
        payload,
      });
    }
  };

  const dispatch = ({ type, payload }: any) => {
    const model = type.split('/')[0];
    const action = type.split('/')[1];
    console.log(ACTIONS)
    if(ACTIONS[model] && ACTIONS[model][action]) {
      ACTIONS[model][action](payload, commit(model));
    } else if(MUTATIONS[model] && MUTATIONS[model][action]) {
      commit(model)(action, payload);
    }
  };
  return [state, dispatch];
}

export const Provider = (props: any) => {
  return(
    <Context.Provider value={props.store}>
      {props.children}
    </Context.Provider>
  )
}

export default useRedux;
