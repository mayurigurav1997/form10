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
        builder.addCase(getAdminData.fulfilled, (state, action) => {
            state.isLoading = "Completed";
            state.adminData = action.payload;
        });
    }
});

export const getAdminData = createAsyncThunk(
    "getAdminData",
    async () => {
        let result = await fetch("https://63bd6320d660062388a3e9ef.mockapi.io/Admin",
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