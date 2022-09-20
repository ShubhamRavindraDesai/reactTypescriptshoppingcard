import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductContextProvider } from "./storage/ProdContext";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallback";
// import dotenv from 'dotenv'

// dotenv.config();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
