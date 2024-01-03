import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTransaction, getTransactions } from "./transactionsApi";

// this is a slice of the store

// add a slice for transactions
export const addTransactionThunk =createAsyncThunk('transaction/addTransaction', async (payload) => {
    const data = await addTransaction(payload);
    return data;
});

export const getTransactionsThunk =createAsyncThunk('transaction/getTransactions', async () => {
    const data = await getTransactions();
    return data;
});



const transactionsSlice = createSlice({
    name: "transactions",
    initialState: {
        transactions: [],
        isLoading: false,
        error: null,
    },
    extraReducers:builder=>{
        builder.addCase(addTransactionThunk.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;      
        });
        builder.addCase(addTransactionThunk.fulfilled, (state, action) => {
            state.error = null;
            state.isLoading = false;
            state.transactions.push(action.payload);
        });
        builder.addCase(addTransactionThunk.rejected, (state, action) => {
            state.isLoading = false;
       
            state.error = action.error?.message;
        });
        builder.addCase(getTransactionsThunk.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;      
        }).addCase(getTransactionsThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.transactions = action.payload;
        }).addCase(getTransactionsThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            state.transactions = [];
        });
    }
});


export default transactionsSlice.reducer;
