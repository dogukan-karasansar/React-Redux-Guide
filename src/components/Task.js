import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { completeTask } from "../redux/tasks/taskSlice";
export const Task = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-3 gap-4">
      {tasks.map((task) => (
        <div key={task.id} className="m-5">
          <div
            className={`${
              task.priority == "low"
                ? "bg-red-200"
                : task.priority == "medium"
                ? "bg-orange-200"
                : "bg-red-500"
            } overflow-hidden sm:rounded-lg`}
          >
            <div className="px-4 py-5 sm:px-6 grid grid-cols-2">
              <h3 className="text-lg ml-24 mt-1 leading-6 font-medium text-teal-500">
                {task.title}{" "}
              </h3>
              <button
                disabled={task.status}
                onClick={() => dispatch(completeTask(task.id))}
                className="inline-block text-sm ml-6  px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-800 hover:bg-white mt-4 lg:mt-0"
              >
                TAMAMLANDI
              </button>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    GÖREVİ AÇAN
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {task.author}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">DURUM</dt>
                  <dd
                    className={`mt-1 text-sm ${
                      task.status ? "text-lime-500" : "text-red-700"
                    } sm:mt-0 sm:col-span-2`}
                  >
                    {task.status ? "Tamamlandı" : "Tamamlanmadı"}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    ÖNCELLEME
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {task.priority}
                  </dd>
                </div>

                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    AÇIKLAMA
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {task.description}
                  </dd>
                </div>
                <div
                  style={{
                    borderBottom: "none",
                    backgroundPosition: 'bottom left',
                    backgroundImage: `url('data:image/svg+xml;utf8, <svg viewBox="0 0 200 110" xmlns="http://www.w3.org/2000/svg"><path d="M -15 110 L100 10 L215 110" fill="none" stroke="%23ededed" stroke-width="4" vector-effect="non-scaling-stroke"/></svg>')`,
                    backgroundSize: "6% auto",
                    backgroundRepeat: "repeat-x",
                  }}
                  className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt className="text-sm font-medium text-gray-500">EKLER</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ul
                      role="list"
                      className="borderm mb-5 border-gray-200 rounded-md divide-y divide-gray-200"
                    >
                      <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="ml-2 flex-1 w-0 truncate">
                            {" "}
                            resume_back_end_developer.pdf{" "}
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            {" "}
                            Download{" "}
                          </a>
                        </div>
                      </li>
                      <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="ml-2 flex-1 w-0 truncate">
                            {" "}
                            coverletter_back_end_developer.pdf{" "}
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            {" "}
                            Download{" "}
                          </a>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
