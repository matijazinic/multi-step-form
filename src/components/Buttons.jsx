import React from "react";

export default function Buttons({
  currentStep,
  setCurrentStep,
  formValid,
  setDisplayErrors,
  selectedPackage,
}) {
  const handleNextStep = () => {
    if (currentStep == 1) {
      if (formValid) {
        setCurrentStep((prev) => prev + 1);
        setDisplayErrors(false);
      } else setDisplayErrors(true);
    } else if (currentStep == 2) {
      if (selectedPackage.length > 0) {
        setCurrentStep((prev) => prev + 1);
        setDisplayErrors(false);
      } else setDisplayErrors(true);
    } else setCurrentStep((prev) => prev + 1);
  };
  return (
    <>
      {currentStep < 5 && (
        <div className="button-wrap">
          {currentStep > 1 && (
            <button
              className="btn-secondary"
              onClick={() => setCurrentStep((prev) => prev - 1)}
            >
              Go back
            </button>
          )}
          <button className="btn-primary" onClick={handleNextStep}>
            {currentStep == 4 ? "Confirm" : "Next Step"}
          </button>
        </div>
      )}
    </>
  );
}
