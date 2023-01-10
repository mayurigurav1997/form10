import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const authState = {
    isError: "",
    isLoading: "",
    adminData: []

}
export const adminSlice = createSlice({
    name: "admin",
    initialState: authState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getAdminData.pending, (state, action) => {
            state.isLoading = "Pending";
        });
        builder.addCase(getAdminData.rejected, (state, action) => {
            state.isLoading = "Rejected";
            state.isError = action.error.message
        });
        builder.addCase(getAdminData.fullfilled, (state, action) => {
            state.isLoading = "Completed";
            state.adminData = action.payload.data;
        });

    }
});

export const getAdminData = createAsyncThunk(
    "getAdmin",
    async () => {
        let result = await fetch("",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Accept-Encoding":
                        "gzip" | "compress" | "deflate" | "br" | "identify" | "*",
                },
            })
            .then((response) => response.json())
            .then((data) => data)
            .then((error) => error);
        return result;
    }
);

export const adminReducer = adminSlice.reducer;