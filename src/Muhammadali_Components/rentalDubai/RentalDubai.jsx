import BudgetCars from "./components/BudgetCars";
import LuxuryCars from "./components/LuxuryCars";
import SportCars from "./components/SportCars";

const RentalDubai = () => {
  return (
    <div className="w-full bg-[#272933] px-[190px] space-y-4">
      <BudgetCars />
      <SportCars />
      <LuxuryCars />
    </div>
  );
};

export default RentalDubai;
