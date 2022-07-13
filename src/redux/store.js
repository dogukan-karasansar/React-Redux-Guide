import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasks/taskSlice";

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});
