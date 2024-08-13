import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

async function getTourData(id) {
  try {
    const res = await fetch(`http://localhost:9898/api/v1/tour/${id}`);
    return res.json();
  } catch (err) {
    console.log("Something went wrong");
    throw new Error("Data not found");
  }
}

const TourProduct = () => {
  const { id } = useParams();
  const [tourData, setTourData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      console.log("this is the id im goig to pas ", id);
      const data = await getTourData(id);

      setTourData(data?.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log("tour data !!", tourData);
  }, [tourData]);

  return (
    <div className="container mx-auto px-4 py-8 open-sans">
      {tourData && (
        <div className="border-2 border-gray-200 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              src={tourData.banner[0]}
              alt={tourData.title}
              className="w-full h-96 object-cover rounded-lg mb-4 "
            />
            <h2 className="text-5xl font-bold  ">{tourData.title}</h2>
          </div>
          <div className="mt-6 flex justify-center items-center flex-col">
            <h3 className=" font-semibold text-gray-700 text-3xl">
              Description
            </h3>
            <p className="text-gray-600 mt-2 open-sans text-xl">
              {tourData.tourBriefIntro}
            </p>
          </div>
          <div className="mt-6">
            <h3 className="text-4xl   font-semibold  ">Itinerary</h3>
            {tourData?.itinerary?.map((it, index) => (
              <div key={index} className="mt-4">
                <h4 className="text-lg font-medium py-2">
                  <span className="text-md font-bold">Day:{index + 1} </span>
                  {it.title}
                </h4>
                <ul className="list-disc list-inside text-gray-600">
                  {it?.itineraryData.map((data, idx) => (
                    <li className="list-none" key={idx}>
                      <span className="font-bold text-"> </span>
                      {data}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>{" "}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700">Inclusions</h3>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              {tourData.inclusion?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700">Exclusions</h3>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              {tourData?.exclusion?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex space-x-4">
            <div className="w-1/2">
              <h3 className="text-xl font-semibold text-gray-700">Dos</h3>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Respect the temple customs and dress modestly.</li>
                <li>Participate in the evening aarti if possible.</li>
                <li>Try the local cuisine.</li>
                <li>
                  Keep your belongings safe while visiting crowded places.
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <h3 className="text-xl font-semibold text-gray-700">Don'ts</h3>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>
                  Do not carry any leather items inside the temple premises.
                </li>
                <li>Avoid taking photographs inside the temple.</li>
                <li>
                  Do not enter restricted areas within the temple complex.
                </li>
                <li>Refrain from littering and keep the surroundings clean.</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700">Price</h3>
            <p className="text-gray-600 mt-2">
              The cost of the tour package can vary depending on the package
              chosen.
            </p>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Image Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
              {tourData.gallery?.map((img, index) => (
                <img
                  key={index}
                  src={img.path}
                  alt={`Gallery image ${index + 1}`}
                  className="h-[450px] w-[450px] rounded-lg"
                />
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Best Time to Visit
            </h3>
            <p className="text-gray-600 mt-2">
              The best time to visit is during the winter months from October to
              February.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourProduct;
