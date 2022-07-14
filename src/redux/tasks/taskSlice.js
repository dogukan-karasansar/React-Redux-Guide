import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [
      {
        id: 1,
        title: "Task 1",
        author: "Doğukan Karasansar",
        description: `Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
        incididunt cillum culpa consequat. Excepteur qui ipsum
        aliquip consequat sint. Sit id mollit nulla mollit nostrud
        in ea officia proident. Irure nostrud pariatur mollit ad
        adipisicing reprehenderit deserunt qui eu.`,
        status: false,
        priority: "low",
        images: [],
      },
      {
        id: 2,
        title: "Task 2",
        author: "Doğukan Karasansar",
        description: `Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
        incididunt cillum culpa consequat. Excepteur qui ipsum
        aliquip consequat sint. Sit id mollit nulla mollit nostrud
        in ea officia proident. Irure nostrud pariatur mollit ad
        adipisicing reprehenderit deserunt qui eu.`,
        status: true,
        priority: "medium",
        images: [],
      },
      {
        id: 3,
        title: "Task 3",
        author: "Doğukan Karasansar",
        description: `Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
        incididunt cillum culpa consequat. Excepteur qui ipsum
        aliquip consequat sint. Sit id mollit nulla mollit nostrud
        in ea officia proident. Irure nostrud pariatur mollit ad
        adipisicing reprehenderit deserunt qui eu.`,
        status: false,
        priority: "high",
        images: [],
      },
    ],
    loading: false,
    error: null,
  },
  reducers: {},
});

export default taskSlice.reducer;
