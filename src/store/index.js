import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// export const actions = {
//   INCREMENT: "increment",
//   DECREMENT: "decrement",
//   INCREASE: "increase",
//   TOGGLE: "toggle-counter",
// };

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = { isAuthenticated: false };

const AuthSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: AuthSlice.reducer},
});

export const counterActions = counterSlice.actions;
export const authActions = AuthSlice.actions;
export default store;
