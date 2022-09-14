import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductContextProvider } from "./storage/ProdContext";
import { ErrorBoundary } from "./ErrorBoundry";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ProductContextProvider>
      <ErrorBoundary>
      <App />
      </ErrorBoundary>
    </ProductContextProvider>
  </BrowserRouter>
);
