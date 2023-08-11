const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  name: "",
  currentPlan: "",
  prevPlans: [],
  stripeCustomerId: "",
  userEmail: "",
};

//creating a slice for our redux store that will store all the mentors as well as our current selected mentor
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload;
    },
    setUserEmail(state, action) {
      state.userEmail = action.payload;
    },
    setCustomerId(state, action) {
      state.stripeCustomerId = action.payload;
    },
    setCurrentPlan(state, action) {
      state.currentPlan = action.payload;
    },
  },
});

export const { setUser, setCustomerId, setCurrentPlan, setUserEmail } =
  userSlice.actions;
export default userSlice.reducer;
