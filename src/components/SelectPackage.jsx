import React, { useState } from "react";

export default function SelectPackage({
  selectedPlan,
  packages,
  handlePackageSwitch,
  handlePlanSwitch,
  displayErrors,
  selectedPackage,
}) {
  const base_URL = import.meta.env.BASE_URL;
  return (
    <div className="main">
      <h1 className="main-title">Select your plan</h1>
      <p className="main-description">
        You have the option of monthly or yearly billing
      </p>
      <div className="packages">
        {packages.map((pack) => {
          const id = pack.name.toLowerCase();
          const price =
            selectedPlan == "monthly" ? pack.priceMonthly : pack.priceYearly;
          return (
            <button
              style={{
                backgroundColor: pack.isSelected ? "hsl(217, 100%, 97%)" : "",
                outline: pack.isSelected ? "1px solid hsl(243, 100%, 62%)" : "",
              }}
              className="package"
              id={id}
              onClick={handlePackageSwitch}
              value={price}
              key={id}
            >
              <img src={`${base_URL}/images/${pack.icon}`} />
              <div className="package-info">
                <p className="package-name">{pack.name}</p>
                <p className="package-price">
                  $
                  {selectedPlan == "monthly"
                    ? pack.priceMonthly
                    : pack.priceYearly}
                  /{selectedPlan == "monthly" ? "mo" : "yr"}
                </p>
                {selectedPlan == "yearly" ? (
                  <p className="package-bonus">2 months free</p>
                ) : (
                  ""
                )}
              </div>
            </button>
          );
        })}
      </div>
      <div className="plan-switcher">
        <p
          style={{
            color:
              selectedPlan == "monthly"
                ? "hsl(213, 96%, 18%)"
                : "hsl(231, 11%, 63%)",
          }}
          className="plan-switch-text"
        >
          Monthly
        </p>
        <label className="switch">
          <input
            type="checkbox"
            onChange={handlePlanSwitch}
            checked={selectedPlan == "yearly"}
          />
          <span className="slider round"></span>
        </label>
        <p
          style={{
            color:
              selectedPlan == "yearly"
                ? "hsl(213, 96%, 18%)"
                : "hsl(231, 11%, 63%)",
          }}
          className="plan-switch-text"
        >
          Yearly
        </p>
      </div>
      <p className="package-error">
        {displayErrors && selectedPackage.length < 1
          ? "Select a package before proceeding"
          : ""}
      </p>
    </div>
  );
}
