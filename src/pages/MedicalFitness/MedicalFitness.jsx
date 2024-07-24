import React from "react";
import { useForm } from "react-hook-form";

const MedicalFitnessForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Medical Fitness Certificate for Trekking
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Personal Information */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <h2 className="text-xl font-semibold mb-2 col-span-2">
            1. Personal Information
          </h2>
          <div>
            <label className="block mb-2">Name of the individual</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-2">Age</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded"
              {...register("age", { required: "Age is required" })}
            />
            {errors.age && <p className="text-red-600">{errors.age.message}</p>}
          </div>
          <div>
            <label className="block mb-2">Gender</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              {...register("gender", { required: "Gender is required" })}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-600">{errors.gender.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-2">Address</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && (
              <p className="text-red-600">{errors.address.message}</p>
            )}
          </div>
        </div>

        {/* Medical History */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <h2 className="text-xl font-semibold mb-2 col-span-2">
            2. Medical History
          </h2>
          <div className="col-span-2">
            <label className="block mb-2">
              Any relevant medical conditions or history
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              rows="3"
              {...register("medicalHistory", {
                required: "Medical history is required",
              })}
            ></textarea>
            {errors.medicalHistory && (
              <p className="text-red-600">{errors.medicalHistory.message}</p>
            )}
          </div>
          <div className="col-span-2">
            <label className="block mb-2">
              Details of any ongoing treatments or medications
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              rows="3"
              {...register("treatments", {
                required: "Ongoing treatments are required",
              })}
            ></textarea>
            {errors.treatments && (
              <p className="text-red-600">{errors.treatments.message}</p>
            )}
          </div>
        </div>

        {/* Physical Examination */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <h2 className="text-xl font-semibold mb-2 col-span-2">
            3. Physical Examination
          </h2>
          <div className="col-span-2">
            <label className="block mb-2">
              Summary of a recent physical examination
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              rows="3"
              {...register("physicalExamination", {
                required: "Physical examination summary is required",
              })}
            ></textarea>
            {errors.physicalExamination && (
              <p className="text-red-600">
                {errors.physicalExamination.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-2">
              Assessment of cardiovascular health (e.g., heart rate, blood
              pressure)
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              rows="2"
              {...register("cardiovascularHealth", {
                required: "Cardiovascular health assessment is required",
              })}
            ></textarea>
            {errors.cardiovascularHealth && (
              <p className="text-red-600">
                {errors.cardiovascularHealth.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-2">
              Assessment of respiratory health (e.g., lung function)
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              rows="2"
              {...register("respiratoryHealth", {
                required: "Respiratory health assessment is required",
              })}
            ></textarea>
            {errors.respiratoryHealth && (
              <p className="text-red-600">{errors.respiratoryHealth.message}</p>
            )}
          </div>
          <div className="col-span-2">
            <label className="block mb-2">
              Musculoskeletal assessment (e.g., joint and muscle health)
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              rows="2"
              {...register("musculoskeletalAssessment", {
                required: "Musculoskeletal assessment is required",
              })}
            ></textarea>
            {errors.musculoskeletalAssessment && (
              <p className="text-red-600">
                {errors.musculoskeletalAssessment.message}
              </p>
            )}
          </div>
        </div>

        {/* Fitness for Trekking */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <h2 className="text-xl font-semibold mb-2 col-span-2">
            4. Fitness for Trekking
          </h2>
          <div className="col-span-2">
            <label className="block mb-2">
              Declaration that the individual is fit for trekking activities
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              rows="2"
              {...register("fitnessDeclaration", {
                required: "Fitness declaration is required",
              })}
            ></textarea>
            {errors.fitnessDeclaration && (
              <p className="text-red-600">
                {errors.fitnessDeclaration.message}
              </p>
            )}
          </div>
          <div className="col-span-2">
            <label className="block mb-2">
              Any specific recommendations or restrictions (e.g., altitude
              limitations)
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              rows="2"
              {...register("recommendations", {
                required: "Recommendations or restrictions are required",
              })}
            ></textarea>
            {errors.recommendations && (
              <p className="text-red-600">{errors.recommendations.message}</p>
            )}
          </div>
        </div>

        {/* Doctor’s Information */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <h2 className="text-xl font-semibold mb-2 col-span-2">
            5. Doctor’s Information
          </h2>
          <div>
            <label className="block mb-2">
              Name and qualifications of the examining physician
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              {...register("doctorName", {
                required: "Doctor's name and qualifications are required",
              })}
            />
            {errors.doctorName && (
              <p className="text-red-600">{errors.doctorName.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-2">
              Contact information of the physician
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              {...register("doctorContact", {
                required: "Doctor's contact information is required",
              })}
            />
            {errors.doctorContact && (
              <p className="text-red-600">{errors.doctorContact.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-2">Signature and date</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              {...register("doctorSignature", {
                required: "Doctor's signature and date are required",
              })}
            />
            {errors.doctorSignature && (
              <p className="text-red-600">{errors.doctorSignature.message}</p>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <h2 className="text-xl font-semibold mb-2 col-span-2">
            6. Additional Information
          </h2>
          <div className="col-span-2">
            <label className="block mb-2">
              Any special considerations or precautions for the trekker
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              rows="3"
              {...register("additionalInformation", {
                required: "Additional information is required",
              })}
            ></textarea>
            {errors.additionalInformation && (
              <p className="text-red-600">
                {errors.additionalInformation.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500  text-white p-3 rounded mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MedicalFitnessForm;
