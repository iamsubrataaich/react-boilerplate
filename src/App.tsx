import React, { Suspense, lazy } from "react";
const Loader = lazy(() => import("./components/Loader"));
const Hello = lazy(() => import("./features/hello/Hello"));

export default function App() {
  return (
    <div className="text-3xl font-bold">
      <Suspense fallback={<Loader />}>
        <Hello />
      </Suspense>
    </div>
  );
}
