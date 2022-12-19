import { useEffect, useState } from "react";
import "./styles/App.css";
import PersonalInfo from "./components/PersonalInfo";
import Buttons from "./components/Buttons";
import SelectPackage from "./components/SelectPackage";
import Addons from "./components/Addons";
import FinalScreen from "./components/FinalScreen";
import ThankYou from "./components/ThankYou";
import {
  initialAddons,
  initialPackages,
  initialFormData,
  initialSteps as steps,
} from "./constants/initialItems";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [planPrice, setPlanPrice] = useState(0);
  const [addonPrice, setAddonPrice] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const [addons, setAddons] = useState(initialAddons);
  const [packages, setPackages] = useState(initialPackages);
  const [formData, setFormData] = useState(initialFormData);
  const [finalSelection, setFinalSelection] = useState([]);
  const selectedPackage = packages.filter((item) => item.isSelected);
  const totalPrice = +planPrice + +addonPrice;
  const [formValid, setFormValid] = useState(false);
  const [displayErrors, setDisplayErrors] = useState(false);
  const handlePlanSwitch = (e) => {
    if (e.target.checked) {
      setSelectedPlan("yearly");
    } else setSelectedPlan("monthly");
  };

  const handlePackageSwitch = (e) => {
    const currId = e.currentTarget.id;
    const currValue = e.currentTarget.value;
    setPlanPrice(currValue);
    setPackages((prev) =>
      prev.map((pack) => {
        const id = pack.name.toLowerCase();
        if (currId == id) return { ...pack, isSelected: true };
        else return { ...pack, isSelected: false };
      })
    );
  };

  const handleAddonSwitch = (e) => {
    const currId = e.currentTarget.id;
    const currValue = e.currentTarget.value;
    setAddons((prev) =>
      prev.map((addon) => {
        const id = addon.name.replace(/\s/g, "-").toLowerCase();
        if (currId == id) {
          if (addon.isSelected) setAddonPrice((prev) => +prev - +currValue);
          else setAddonPrice((prev) => +prev + +currValue);
          return { ...addon, isSelected: !addon.isSelected };
        } else return { ...addon };
      })
    );
  };

  const handleFormData = (e) => {
    setFormData((prev) =>
      prev.map((item) => {
        if (e.target.id == item.type) {
          if (e.target.id == "email") {
            const regex =
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return {
              ...item,
              value: e.target.value,
              isValid: regex.test(e.target.value) === true,
            };
          }

          if (e.target.id == "phone") {
            const regex =
              /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
            return {
              ...item,
              value: e.target.value,
              isValid: regex.test(e.target.value) === true,
            };
          }

          if (e.target.id == "name") {
            return {
              ...item,
              value: e.target.value,
              isValid: e.target.value.length > 3,
            };
          }

          return {
            ...item,
            value: e.target.value,
          };
        } else return { ...item };
      })
    );
  };

  useEffect(() => {
    setFinalSelection((prev) => {
      const isSelected = selectedPackage.length > 0;

      return {
        ...prev,
        name: isSelected ? selectedPackage[0].name : "",
        plan: isSelected
          ? selectedPlan == "monthly"
            ? "(Monthly)"
            : "(Yearly)"
          : "",
        price: isSelected
          ? selectedPlan == "monthly"
            ? selectedPackage[0].priceMonthly
            : selectedPackage[0].priceYearly
          : "",
        addons: addons.filter((item) => item.isSelected),
      };
    });
  }, [selectedPackage[0], addons]);

  useEffect(() => {
    setAddons(initialAddons);
    setPackages(initialPackages);
    setPlanPrice(0);
    setAddonPrice(0);
  }, [selectedPlan]);

  useEffect(() => {
    setFormValid(formData.every((item) => item.isValid === true));
  }, [formData]);

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="left-side">
            <div className="steps">
              {steps.map((item) => {
                return (
                  <div className="step-wrap" key={item.value}>
                    <div
                      className={`step-circle ${
                        currentStep == item.value && "step-active"
                      }`}
                    >
                      {item.value}
                    </div>
                    <div className="step-text">
                      <p>Step {item.value}</p>
                      <p>{item.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="right-side">
            {currentStep == 1 && (
              <PersonalInfo
                formData={formData}
                setFormData={setFormData}
                handleFormData={handleFormData}
                displayErrors={displayErrors}
                setDisplayErrors={setDisplayErrors}
              />
            )}
            {currentStep == 2 && (
              <SelectPackage
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
                packages={packages}
                handlePackageSwitch={handlePackageSwitch}
                handlePlanSwitch={handlePlanSwitch}
                displayErrors={displayErrors}
                selectedPackage={selectedPackage}
              />
            )}
            {currentStep == 3 && (
              <Addons
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
                addons={addons}
                handleAddonSwitch={handleAddonSwitch}
              />
            )}
            {currentStep == 4 && (
              <FinalScreen
                setCurrentStep={setCurrentStep}
                selectedPlan={selectedPlan}
                finalSelection={finalSelection}
                totalPrice={totalPrice}
              />
            )}
            {currentStep == 5 && (
              <ThankYou formData={formData} currentStep={currentStep} />
            )}
            <Buttons
              formValid={formValid}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              displayErrors={displayErrors}
              setDisplayErrors={setDisplayErrors}
              selectedPackage={selectedPackage}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
