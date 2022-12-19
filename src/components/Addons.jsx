import React, { useRef } from "react";

export default function Addons({
  selectedPlan,
  handleAddonSwitch,
  addons,
  addonSelected,
  setSelectedPlan,
  handlePackageSwitch,
  handlePlanSwitch,
}) {
  return (
    <div className="main">
      <h1 className="main-title">Pick add-ons</h1>
      <p className="main-description">
        Add-ons help enhance your gaming experience
      </p>
      <div className="addons">
        {addons.map((addon) => {
          const id = addon.name.replace(/\s/g, "-").toLowerCase();
          const price =
            selectedPlan == "monthly" ? addon.priceMonthly : addon.priceYearly;
          return (
            <button
              style={{
                backgroundColor: addon.isSelected ? "hsl(217, 100%, 97%)" : "",
                outline: addon.isSelected
                  ? "1px solid hsl(243, 100%, 62%)"
                  : "",
              }}
              className="addon"
              key={id}
              onClick={handleAddonSwitch}
              id={id}
              value={price}
            >
              <input type="checkbox" checked={addon.isSelected} readOnly />
              <div className="addon-text-wrap">
                <div className="addon-text">
                  <p>{addon.name}</p>
                  <p>{addon.description}</p>
                </div>

                <p className="addon-price">
                  +${price}/{selectedPlan == "monthly" ? "mo" : "yr"}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
