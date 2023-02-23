type State = {
  counter: number;
};

export const state = () => ({
  counter: 0,
});

export const getters = {
  getCounter(state: State) {
    return state.counter;
  },
};

export const mutations = {
  increment(state: State) {
    state.counter++;
  },
};

export const actions = {
  async fetchCounter({ state }: { state: State }) {
    // make request
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  },
};
