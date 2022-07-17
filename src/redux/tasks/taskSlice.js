import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
let serviceUrl = "http://localhost:3001/";

export const getTask = createAsyncThunk(
  "task/getTask",
  async (dispatch, getState) => {
    return await axios
      .get(serviceUrl + "task")
      .then((response) => response.data);
  }
);

export const getTaskImage = createAsyncThunk(
  "task/getTaskImage",
  async (dispatch, getState) => {
    return await axios
      .get(serviceUrl + "image")
      .then((response) => response.data);
  }
);

export const AddTask = createAsyncThunk(
  "task/addTask",
  async (data, getState) => {
    return await axios
      .post(serviceUrl + "task/addTask", {
        title: data.title,
        author: data.author,
        description: data.description,
        status: false,
        priority: data.priority,
      })
      .then((response) => response.data);
  }
);

export const AddTaskImage = createAsyncThunk(
  "task/addTaskImage",
  (data, getState) => {
    data.images.forEach(async (image) => {
      await axios.post(
        serviceUrl + "image/addImage",
        {
          taskId: data.id,
          name: image.name,
          taskImage: image,
        },
        {
          headers: {
            "x-device-id": "stuff",
            "Content-Type": "multipart/form-data",
          },
        }
      );
    });
  }
);

export const completeTask = createAsyncThunk(
  "task/completeTask",
  async (id, getState) => {
    return await axios
      .post(serviceUrl + `task/completed`, {
        id: id,
      })
      .then((response) => response.data);
  }
);

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
    images: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getTask.pending]: (state, action) => {
      state.loading = true;
    },
    [getTask.fulfilled]: (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
    },
    [getTask.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [AddTask.pending]: (state, action) => {
      state.loading = true;
    },
    [AddTask.fulfilled]: (state, action) => {
      state.tasks.push(action.payload);
      state.loading = false;
    },
    [AddTask.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [getTaskImage.pending]: (state, action) => {
      state.loading = true;
    },
    [getTaskImage.fulfilled]: (state, action) => {
      state.images = action.payload;
      state.loading = false;
    },
    [getTaskImage.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [completeTask.pending]: (state, action) => {
      state.loading = true;
    },
    [completeTask.fulfilled]: (state, action) => {
      state.tasks.find((task) => task.id === action.payload).status = true;
      state.loading = false;
    },
    [completeTask.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },

  reducers: {},
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
