import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/index.js";

const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Suspense
      fallback={
        <div class="flex flex-col items-center justify-center h-screen">
          <div class="loader flex flex-col gap-4 items-center">
            <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            <p class="text-gray-500 text-lg mt-4">Loading, please wait...</p>
          </div>
        </div>
      }
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </Provider>
);
