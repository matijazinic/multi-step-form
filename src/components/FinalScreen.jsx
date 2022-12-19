import React from "react";

export default function FinalScreen({
  selectedPlan,
  finalSelection,
  setCurrentStep,
  totalPrice,
}) {
  const priceUnit = selectedPlan == "monthly" ? "mo" : "yr";
  return (
    <div className="main">
      <h1 className="main-title">Finishing up</h1>
      <p className="main-description">
        Double-check everything before confirming.
      </p>
      <div className="final-selection">
        <div className="final-selection-package-wrapper">
          <div>
            <p className="final-selection-package-title">
              {finalSelection.name} {finalSelection.plan}
            </p>
            <button
              className="btn-final-selection-change"
              onClick={() => setCurrentStep(2)}
            >
              Change
            </button>
          </div>
          <p className="final-selection-price">
            {finalSelection.name ? (
              <>
                ${finalSelection.price}/{priceUnit}
              </>
            ) : (
              ""
            )}
          </p>
        </div>
        <hr className="final-selection-split" />
        <div className="final-selection-addons">
          {finalSelection.addons.map((item) => {
            return (
              <div className="final-selection-addon" key={item.name}>
                <p>{item.name}</p>
                <p>
                  +$
                  {selectedPlan == "monthly"
                    ? item.priceMonthly
                    : item.priceYearly}
                  /{priceUnit}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="final-selection-total-wrapper">
        {finalSelection.name ? (
          <>
            <p>Total (per {selectedPlan == "monthly" ? "month" : "year"})</p>
            <p>
              ${totalPrice}/{priceUnit}
            </p>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
