import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import employeService from './employeService'

const initialState = {
  employes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new employe
export const createEmploye = createAsyncThunk(
  'employes/create',
  async (employeData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await employeService.createEmploye(employeData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user employes
export const getEmployes = createAsyncThunk(
  'employes/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await employeService.getEmployes(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// update an employe
export const updateEmploye = createAsyncThunk(
  'employes/update',
  async (employeId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await employeService.updateEmploye(employeId, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
export const getEmploye = createAsyncThunk(
  'employes/getOne',
  async (employeId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await employeService.getEmploye(employeId, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// update all employes
export const updateAllEmployes = createAsyncThunk(
  'employes/updateAll',
  async (newemployes, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await employeService.updateAllEmployes(newemployes, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// pay an employe
export const payEmploye = createAsyncThunk(
  'employes/pay',
  async (employeId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await employeService.payEmploye(employeId, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)


// Delete user employe
export const deleteEmploye = createAsyncThunk(
  'employes/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await employeService.deleteEmploye(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const employeSlice = createSlice({
  name: 'employe',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEmploye.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createEmploye.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.employes.push(action.payload)
      })
      .addCase(createEmploye.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getEmployes.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getEmployes.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.employes = action.payload
      })
      .addCase(getEmployes.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteEmploye.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteEmploye.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.employes = state.employes.filter(
          (employe) => employe._id !== action.payload.id
        )
      })
      .addCase(deleteEmploye.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = employeSlice.actions
export default employeSlice.reducer
