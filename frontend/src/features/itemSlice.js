// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from 'axios';
// import { url } from './api';

// const initialState = {
//     items: [],
//     status: null,
//     error: null,
// };

// export const itemCreate = createAsyncThunk(
//     'items/itemCreate',
//     async (values, { rejectWithValue }) => {
//         try {
//             const createItem = await axios.post(`${url}/items`, values);
//             return createItem.data;
//         } catch (err) {
//             console.error('Error creating item', err);
//             return rejectWithValue(err.response.data);
//         }
//     }
// );

// export const itemFetch = createAsyncThunk(
//     'items/itemFetch',
//     async (_, { rejectWithValue }) => {
//         try {
//             const fetchItem = await axios.get(`${url}/items`);
//             return fetchItem.data;
//         } catch (err) {
//             console.error('Error fetching items', err);
//             return rejectWithValue(err.response.data);
//         }
//     }
// );

// export const itemEdit = createAsyncThunk(
//     'items/itemEdit',
//     async ({ id, values }, { rejectWithValue }) => {
//         try {
//             const updateItem = await axios.put(`${url}/items/${id}`, values);
//             return updateItem.data;
//         } catch (err) {
//             console.error('Error editing item', err);
//             return rejectWithValue(err.response.data);
//         }
//     }
// );

// const itemSlice = createSlice({
//     name: 'items',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(itemCreate.pending, (state) => {
//                 state.status = 'pending';
//                 state.error = null;
//             })
//             .addCase(itemCreate.fulfilled, (state, action) => {
//                 state.status = 'success';
//                 state.items.push(action.payload);
//                 state.error = null;
//             })
//             .addCase(itemCreate.rejected, (state, action) => {
//                 state.status = 'rejected';
//                 state.error = action.payload || 'Failed to create item';
//             })
//             .addCase(itemFetch.pending, (state) => {
//                 state.status = 'pending';
//                 state.error = null;
//             })
//             .addCase(itemFetch.fulfilled, (state, action) => {
//                 state.status = 'success';
//                 state.items = action.payload;
//                 state.error = null;
//             })
//             .addCase(itemFetch.rejected, (state, action) => {
//                 state.status = 'rejected';
//                 state.error = action.payload || 'Failed to fetch items';
//             })
//             .addCase(itemEdit.pending, (state) => {
//                 state.status = 'pending';
//                 state.error = null;
//             })
//             .addCase(itemEdit.fulfilled, (state, action) => {
//                 state.status = 'success';
//                 const index = state.items.findIndex(item => item._id === action.payload._id);
//                 if (index !== -1) {
//                     state.items[index] = action.payload;
//                 }
//                 state.error = null;
//             })
//             .addCase(itemEdit.rejected, (state, action) => {
//                 state.status = 'rejected';
//                 state.error = action.payload || 'Failed to edit item';
//             });
//     }
// });

// export default itemSlice.reducer;


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { url } from './api';

const initialState = {
    items: [],
    status: null,
    error: null,
};

export const itemCreate = createAsyncThunk(
    'items/itemCreate',
    async (values, { rejectWithValue }) => {
        try {
            const createItem = await axios.post(`${url}/items`, values);
            return createItem.data;
        } catch (err) {
            console.error('Error creating item', err);
            return rejectWithValue(err.response.data);
        }
    }
);

export const itemFetch = createAsyncThunk(
    'items/itemFetch',
    async (_, { rejectWithValue }) => {
        try {
            const fetchItem = await axios.get(`${url}/items`);
            return fetchItem.data;
        } catch (err) {
            console.error('Error fetching items', err);
            return rejectWithValue(err.response.data);
        }
    }
);

export const itemEdit = createAsyncThunk(
    'items/itemEdit',
    async ({ id, values }, { rejectWithValue }) => {
        try {
            const updateItem = await axios.put(`${url}/items/${id}`, values);
            return updateItem.data;
        } catch (err) {
            console.error('Error editing item', err);
            return rejectWithValue(err.response.data);
        }
    }
);

export const itemDelete = createAsyncThunk(
    'items/itemDelete',
    async (id, { rejectWithValue }) => {
        try {
            await axios.delete(`${url}/items/${id}`);
            return id;
        } catch (err) {
            console.error('Error deleting item', err);
            return rejectWithValue(err.response.data);
        }
    }
);

const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(itemCreate.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(itemCreate.fulfilled, (state, action) => {
                state.status = 'success';
                state.items.push(action.payload);
                state.error = null;
            })
            .addCase(itemCreate.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || 'Failed to create item';
            })
            .addCase(itemFetch.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(itemFetch.fulfilled, (state, action) => {
                state.status = 'success';
                state.items = action.payload;
                state.error = null;
            })
            .addCase(itemFetch.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || 'Failed to fetch items';
            })
            .addCase(itemEdit.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(itemEdit.fulfilled, (state, action) => {
                state.status = 'success';
                const index = state.items.findIndex(item => item._id === action.payload._id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
                state.error = null;
            })
            .addCase(itemEdit.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || 'Failed to edit item';
            })
            .addCase(itemDelete.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(itemDelete.fulfilled, (state, action) => {
                state.status = 'success';
                state.items = state.items.filter(item => item._id !== action.payload);
                state.error = null;
            })
            .addCase(itemDelete.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || 'Failed to delete item';
            });
    }
});

export default itemSlice.reducer;
