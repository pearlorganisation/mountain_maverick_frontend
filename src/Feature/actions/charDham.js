import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";



export const getAllCharDham = createAsyncThunk("getAllCharDham",    
  async (payload, { rejectWithValue }) => {
    try {
    
    const {data} = await instance.get(`/char_dham`);

    return data?.data;

  } catch (e) {
    return rejectWithValue(e);
  }
}
);

export const getCharDham = createAsyncThunk("getCharDham",    
  async (payload, { rejectWithValue }) => {
    try {
    
    const {data} = await instance.get(`/char_dham/${payload.id}`);

    return data?.data;

  } catch (e) {
    return rejectWithValue(e);
  }
}
);



