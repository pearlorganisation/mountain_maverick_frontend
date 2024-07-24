import React from "react";

const Cancellation = () => {
  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
          <h1 className="text-2xl font-bold text-center mb-6">
            CANCELLATION POLICY
          </h1>
          <div className="text-gray-800 space-y-4">
            <div>
              <strong>How to Cancel:</strong> To cancel your booking, please
              email us at{" "}
              <a
                href="mailto:info@mountainmavericks.in"
                className="text-blue-500"
              >
                info@mountainmavericks.in
              </a>
              .
            </div>
            <div>
              <strong>Cancellation Due to Unforeseen Events:</strong> If we need
              to cancel the trek due to unforeseen circumstances like natural
              disasters, floods, or political unrest, we will provide you with a
              trek voucher. This voucher is valid for one year and can be used
              for the same trek or any other trek of your choice.
            </div>
            <div>
              <strong>Cancellation for Personal Reasons</strong>
            </div>
            <div>
              <strong>No Cash Refunds:</strong> We do not offer cash refunds
              once a booking is completed. Instead, we provide a voucher for
              either the full amount or a reduced amount, depending on the
              timing of your cancellation.
            </div>
            <div>
              <strong>Cancellation 30 Days or More before Trek:</strong> If you
              cancel at least 30 days before the trek starts, you will receive a
              voucher for the full booking amount.
            </div>
            <div>
              <strong>Cancellation 20-29 Days before Trek:</strong> For
              cancellations made between 20 and 29 days before the trek, 50% of
              the booking amount will be deducted, and the remaining amount will
              be given as a voucher.
            </div>
            <div>
              <strong>Cancellation Less Than 20 Days before Trek:</strong> If
              you cancel less than 20 days before the trek, no voucher will be
              issued.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cancellation;
