import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "modal",

  initialState: {
    testModal: false,
    contractsModal: false,
    CapsuleModal: false,
    isLoading: false,
    connectModal: false,
  },

  reducers: {
    toggleTestModal: (state) => {
      state.testModal = !state.testModal;
    },

    toggleContractsModal: (state) => {
      state.contractsModal = !state.contractsModal;
    },

    toggleConnectModal: (state) => {
      state.connectModal = !state.connectModal;
    },

    toggleCapsuleModal: (state, action) => {
      state.CapsuleModal = action.payload;
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  toggleTestModal,
  toggleContractsModal,
  toggleCapsuleModal,
  setLoading,
  toggleConnectModal,
} = testSlice.actions;

export default testSlice.reducer;
