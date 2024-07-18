import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Element } from "react-scroll";
const Product = () => {
  const { id } = useParams();
  const { charDhamData } = useSelector((state) => state?.charDham);

  const data = charDhamData?.find((el) => el._id === id);
  console.log(data);

  return (
    <div>
      {data && (
        <div className="p-8 bg-white shadow-md rounded-lg max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <img
              src={data.banner}
              alt={data.title}
              className="w-full h-96 object-cover rounded-lg mb-4 object-center"
            />
            <h2 className="text-2xl font-bold text-gray-800">{data.title}</h2>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700">Description</h3>
            <p className="text-gray-600 mt-2">{data.description}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700">Itinerary</h3>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              {data?.itinerary.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </div>

          <div className="mt-6 flex space-x-4">
            <div className="w-1/2">
              <h3 className="text-xl font-semibold text-gray-700">Dos</h3>
              <ul className="list-none list-inside text-gray-600 mt-2">
                {data?.do.map((el, index) => {
                  return <li key={index}>{index + 1 + " : " + el}</li>;
                })}
              </ul>
            </div>
            <div className="w-1/2">
              <h3 className="text-xl font-semibold text-gray-700">
                Don &nbsp;t s
              </h3>
              <ul className="list-none list-inside text-gray-600 mt-2">
                {data?.do.map((el, index) => {
                  return <li key={index}>{index + 1 + " : " + el}</li>;
                })}
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700">Price</h3>
            <p className="text-gray-600 mt-2">
              The cost of the Jagannath Puri yatra can vary depending on the
              package chosen. On average, a 4-day tour package including
              accommodation, meals, and local sightseeing can range from ₹8,000
              to ₹15,000 per person.
            </p>
          </div>

          <div className="mt-6 ">
            <h3 className="text-xl font-semibold text-gray-700">
              Image Gallery
            </h3>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqkPA54NjTmY-FPlyOAjnlIyORpziubzCWw&s"
                alt="Jagannath Temple"
                className="w-full h-50 object-cover rounded-lg"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr07l6mDpVKUxdHw2aqgXoFbk50JoQFBo6Ww&s"
                alt="Rath Yatra"
                className="w-full h-50  object-cover rounded-lg"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvHcJuT6VvxX-KSQcNy8c3obAOiY2i9-rqg&s"
                alt="Sun Temple, Konark"
                className="w-full h-50  object-cover rounded-lg"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvHcJuT6VvxX-KSQcNy8c3obAOiY2i9-rqg&s"
                alt="Chilika Lake"
                className="w-full h-50  object-cover rounded-lg"
              />

              {data.gallery.map((el, index) => {
                <img alt={"galleryimg " + index} src={el.path} />;
              })}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Best Time to Visit
            </h3>
            <p className="text-gray-600 mt-2">
              The best time to visit Jagannath Puri is during the winter months
              from October to February when the weather is pleasant. The Rath
              Yatra festival, usually held in June or July, is also a great time
              to visit to witness the grand procession and celebrations.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
