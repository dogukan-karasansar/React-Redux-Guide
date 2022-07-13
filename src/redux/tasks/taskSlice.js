import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [
      {
        id: 1,
        title: "Task 1",
        description: "Task 1 description",
        status: false,
        priority: "low",
      },
    ],
    loading: false,
    error: null,
  },
  reducers: {},
});

export default taskSlice.reducer;
