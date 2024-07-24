import React from "react";

const Disclaimer = () => {
  return (
    <div className="p-10 bg-gray-100 font-sans leading-normal tracking-normal flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Trekking Disclaimer Form
        </h1>
        <form className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Participant Information
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-gray-600">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label htmlFor="dob" className="block text-gray-600">
                  Date of Birth:
                </label>
                <input
                  type="date"
                  id="dob"
                  className="w-full border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-gray-600">
                  Address:
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="emergencyContactName"
                  className="block text-gray-600"
                >
                  Emergency Contact Name:
                </label>
                <input
                  type="text"
                  id="emergencyContactName"
                  className="w-full border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="emergencyContactPhone"
                  className="block text-gray-600"
                >
                  Emergency Contact Phone Number:
                </label>
                <input
                  type="tel"
                  id="emergencyContactPhone"
                  className="w-full border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Activity Details
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="trekName" className="block text-gray-600">
                  Trek Name:
                </label>
                <input
                  type="text"
                  id="trekName"
                  className="w-full border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label htmlFor="trekDates" className="block text-gray-600">
                  Trek Dates:
                </label>
                <input
                  type="text"
                  id="trekDates"
                  className="w-full border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label htmlFor="organizerName" className="block text-gray-600">
                  Organizer/Company Name:
                </label>
                <input
                  type="text"
                  id="organizerName"
                  className="w-full border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="organizerContact"
                  className="block text-gray-600"
                >
                  Organizer/Company Contact Information:
                </label>
                <input
                  type="text"
                  id="organizerContact"
                  className="w-full border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Acknowledgment of Risks
            </h2>
            <p className="text-gray-700 mb-4">
              I understand that trekking involves inherent risks, including but
              not limited to:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li>Physical injury</li>
              <li>Exposure to harsh weather conditions</li>
              <li>Difficulty in accessing medical care</li>
              <li>Wildlife encounters</li>
              <li>Potential for altitude sickness</li>
            </ul>
            <p className="text-gray-700 mb-4">
              I acknowledge that these risks are part of the adventure and that
              the organizers cannot guarantee my safety at all times.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Medical Fitness
            </h2>
            <p className="text-gray-700 mb-4">
              I confirm that I am in good health and physically fit to
              participate in the trekking activity. I have disclosed any medical
              conditions or concerns to the trek organizer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Insurance
            </h2>
            <p className="text-gray-700 mb-4">
              I am aware that it is my responsibility to have adequate travel
              and medical insurance for the duration of the trek. I will provide
              proof of insurance if required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Release of Liability
            </h2>
            <p className="text-gray-700 mb-4">
              I, the undersigned, agree to release and hold harmless the trek
              organizers, their employees, agents, and affiliates from any and
              all claims, liabilities, or damages arising from my participation
              in the trek, including those caused by negligence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Emergency Procedures
            </h2>
            <p className="text-gray-700 mb-4">
              I have been informed about the emergency procedures and evacuation
              plans for the trek. I agree to follow the instructions given by
              the trek leaders.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Consent
            </h2>
            <p className="text-gray-700 mb-4">
              By signing this form, I consent to participate in the trek and
              accept the risks involved. I understand that this form is a
              binding agreement.
            </p>
          </section>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label
                htmlFor="participantSignature"
                className="block text-gray-600"
              >
                Participant Signature:
              </label>
              <input
                type="text"
                id="participantSignature"
                className="w-full border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-gray-600">
                Date:
              </label>
              <input
                type="date"
                id="date"
                className="w-full border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>

          <section className="mt-6">
            <div>
              <label htmlFor="guardianName" className="block text-gray-600">
                Parent/Guardian Name (if under 18):
              </label>
              <input
                type="text"
                id="guardianName"
                className="w-full border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor="guardianSignature"
                className="block text-gray-600"
              >
                Parent/Guardian Signature:
              </label>
              <input
                type="text"
                id="guardianSignature"
                className="w-full border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label htmlFor="guardianDate" className="block text-gray-600">
                Date:
              </label>
              <input
                type="date"
                id="guardianDate"
                className="w-full border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </section>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="w-full bg-green-500  text-white p-3 rounded mt-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Disclaimer;
