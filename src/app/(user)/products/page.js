

const ProductsPage = async({ searchParams }) => {

    const name = searchParams.name || "RAHUL";

  

    
       




    const userData = await fetch(`https://api.genderize.io/?name=${name}`);

    const data = await userData.json();

    console.log(data);


  return (
    <div className="flex flex-col gap-0 items-center justify-center  py-24  w-50 ml-55 mt-30 rounded-lg shadow-md bg-yellow-100">

        <h1 className="  text-black color-red text-xl font-bold">Products Page</h1>

        <h2 className="text-blue-700 font-bold">Name: {data.name}</h2>
        <h2 className="text-2xl text-red-600 font-bold">Gender: {data.gender}</h2>
        <h2 className="text-green-800 font-bold">Probability: {data.probability}</h2>

        <button></button>
      
    </div>
  )
}

export default ProductsPage;
