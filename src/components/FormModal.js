import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasks/taskSlice";

export const FormModal = ({ show, setShowModal }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    id: Math.random(5, 999999),
    title: "",
    description: "",
    author: "Doğukan Karasansar",
    status: false,
    priority: "low",
    images: [],
  });

  const AddTaskAction = (task, setShowModal) => {
    console.log(task);
    dispatch(addTask(task));
    setShowModal(false);
  };
  return (
    show && (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <form className="w-full md:w-auto w-5/5">
                  <div className="flex  grid grid-cols-2 flex-wrap -mx-3 mb-6">
                    <div className="w-full md px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Görevi Açan
                      </label>
                      <input
                        style={{ width: 350 }}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Doğukan"
                        onChange={(e) =>
                          setTask({ ...task, author: e.target.value })
                        }
                      />
                      <p className="text-red-500 text-left text-xs italic">
                        Bu alanın doldurulması zorunludur.
                      </p>
                    </div>
                    <div className="w-full md px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-title"
                      >
                        Başlık
                      </label>
                      <input
                        onChange={(e) =>
                          setTask({ ...task, title: e.target.value })
                        }
                        style={{ width: 350 }}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-title"
                        type="text"
                        placeholder="MYS Sorunu"
                      />
                      <p className="text-red-500 text-left text-xs italic">
                        Bu alanın doldurulması zorunludur.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Açıklama
                      </label>
                      <textarea
                        onChange={(e) =>
                          setTask({ ...task, description: e.target.value })
                        }
                        rows={5}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-password"
                        type="text"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Öncelik
                      </label>
                      <select
                        onChange={(e) => setTask({ ...task, priority: e.target.value })}
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                      >
                        <option value={"low"}>Az</option>
                        <option value={"medium"}>Orta</option>
                        <option value={"high"}>Yüksek</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full md px-3 mb-6 md:mb-0">
                    <div className="flex justify-center items-center w-full">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <div className="flex flex-col justify-center items-center pt-5 pb-6">
                          <svg
                            aria-hidden="true"
                            className="mb-3 w-10 h-10 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Yüklemek için tıklayın.
                            </span>{" "}
                            Sürükle bırak
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          multiple={true}
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            setTask({
                              ...task,
                              images: Array.from(e.target.files),
                            });
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </form>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Çıkış
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => AddTaskAction(task, setShowModal)}
                >
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    )
  );
};
