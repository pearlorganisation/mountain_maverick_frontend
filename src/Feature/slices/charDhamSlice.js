import { createSlice } from "@reduxjs/toolkit";
import { getAllCharDham, getCharDham } from "../actions/charDham";
// import { toast } from "sonner";

const initialState = {
  isLoading: false,
  isSuccess: false,
  charDhamData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

export const charDhamSlice = createSlice({
  name: "charDhamSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCharDham.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";

      })
      .addCase(getAllCharDham.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.charDhamData = action.payload;
        // console.log(state.dipData)
        // toast.success("Data Loaded Successfully...", {
        //   position: "top-center"
        // });
      })
      .addCase(getAllCharDham.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to load data !!"; // Use action.payload for error message
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export default charDhamSlice.reducer;
