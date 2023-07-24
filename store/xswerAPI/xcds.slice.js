import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_xcds_list = createAsyncThunk(
  "xcds/api_v1_xcds_list",
  async payload => {
    const response = await apiService.api_v1_xcds_list(payload)
    return response.data
  }
)
export const api_v1_xcds_create = createAsyncThunk(
  "xcds/api_v1_xcds_create",
  async payload => {
    const response = await apiService.api_v1_xcds_create(payload)
    return response.data
  }
)
export const api_v1_xcds_retrieve = createAsyncThunk(
  "xcds/api_v1_xcds_retrieve",
  async payload => {
    const response = await apiService.api_v1_xcds_retrieve(payload)
    return response.data
  }
)
export const api_v1_xcds_update = createAsyncThunk(
  "xcds/api_v1_xcds_update",
  async payload => {
    const response = await apiService.api_v1_xcds_update(payload)
    return response.data
  }
)
export const api_v1_xcds_partial_update = createAsyncThunk(
  "xcds/api_v1_xcds_partial_update",
  async payload => {
    const response = await apiService.api_v1_xcds_partial_update(payload)
    return response.data
  }
)
export const api_v1_xcds_destroy = createAsyncThunk(
  "xcds/api_v1_xcds_destroy",
  async payload => {
    const response = await apiService.api_v1_xcds_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const xcdsSlice = createSlice({
  name: "xcds",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_xcds_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xcds_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_xcds_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_xcds_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xcds_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_xcds_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_xcds_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xcds_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_xcds_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_xcds_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xcds_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_xcds_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_xcds_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xcds_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_xcds_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_xcds_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xcds_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_xcds_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_xcds_list,
  api_v1_xcds_create,
  api_v1_xcds_retrieve,
  api_v1_xcds_update,
  api_v1_xcds_partial_update,
  api_v1_xcds_destroy,
  slice: xcdsSlice
}
