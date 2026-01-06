"use client";

import React, { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";

const ProductsPage = () => {

  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "RAHUL";

  const [data, setData] = useState(null);

  useEffect(() => {
    const getAllData = async () => {
      const userData = await fetch(
        `https://api.genderize.io/?name=${name}`
      );
      const res = await userData.json();
      setData(res);
    };

    getAllData();
  }, [name]);

  if (!data) return <h1>Loading...</h1>;

  return (


    <div className="flex flex-col items-center justify-center py-24 rounded-lg shadow-md bg-yellow-100">

      <h1 className="text-xl font-bold">Products Page</h1>

      <h2 className="text-blue-700 font-bold">
        Name: {data.name}
      </h2>
      <h2 className="text-2xl text-red-600 font-bold">
        Gender: {data.gender}
      </h2>
      
      <h2 className="text-green-800 font-bold">
        Probability: {data.probability}
      </h2>
    </div>
  );
};

export default ProductsPage;
