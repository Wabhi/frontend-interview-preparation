import React from "react";
import QueryExplained from "./components/query-explained/QueryExplained";
import FetchMock from "./components/fetch-mock/FetchMock";

const App = () => {
  return (
    <>
      {/* <QueryExplained/> */}
      <FetchMock userId={999} />
    </>
  );
};

export default App;
