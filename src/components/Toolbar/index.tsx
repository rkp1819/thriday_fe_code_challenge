import React from "react";
import checkIcon from "../../assets/check-circle-fill.svg";
import plusIcon from "../../assets/plus.svg";
import minusIcon from "../../assets/minus.svg";
import "./styles.css";

type FilterType = "all" | "income" | "expense";

interface ToolbarProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="toolbar">
      <button
        className={`toolbar-button ${activeFilter === "all" ? "active" : ""}`}
        onClick={() => onFilterChange("all")}
      >
        {activeFilter === "all" && (
          <img src={checkIcon} alt="" className="check-icon" />
        )}
        All
      </button>
      <button
        className={`toolbar-button ${
          activeFilter === "income" ? "active" : ""
        }`}
        onClick={() => onFilterChange("income")}
      >
        <img src={plusIcon} alt="" className="icon" />
        Income
      </button>
      <button
        className={`toolbar-button ${
          activeFilter === "expense" ? "active" : ""
        }`}
        onClick={() => onFilterChange("expense")}
      >
        <img src={minusIcon} alt="" className="icon" />
        Expense
      </button>
    </div>
  );
};

export default Toolbar;
