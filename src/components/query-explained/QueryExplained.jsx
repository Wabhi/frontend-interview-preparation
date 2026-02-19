import { useState, useEffect } from "react";

function QueryExplained() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData("Data Loading Is Finished!");
      setLoading(false);
    }, 5000);
  });
  if (loading) {
    return <p>Data Loading Is Started!</p>;
  }
  return (
    <>
      <p>{data}</p>
    </>
  );
}

export default QueryExplained;
