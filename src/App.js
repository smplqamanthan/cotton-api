import React, { useState } from "react";
import CottonResults from "./components/CottonResults.jsx";
import Summary from "./components/Summary.jsx";
import Issue from "./components/Issue.jsx";
import Analysis from "./components/analysis/Analysis.jsx";

function App() {
  const [activeTab, setActiveTab] = useState("cotton");

  const tabs = [
    { id: "cotton", label: "Cotton Results" },    
    { id: "issues", label: "Issue Update" },
    { id: "summary", label: "Summary Report" },
    { id: "analysis", label: "Analysis" },
  ];

  return (
    <div className="min-h-screen w-full p-2 bg-orange-100">
      {/* Dashboard title */}
      <h1 className="text-4xl font-extrabold text-center mb-6 text-red-600">
        Cotton Quality Dashboard
      </h1>

      {/* Tabs */}
      <div className="flex justify-start gap-6 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-3 font-semibold rounded-full text-white text-lg transition-transform duration-300
              ${
                activeTab === tab.id
                  ? "bg-purple-800 shadow-xl transform scale-105"
                  : "bg-purple-500 hover:bg-purple-600"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="bg-white shadow-2xl rounded-xl p-8 min-h-[300px] w-full">
        {activeTab === "cotton" && <CottonResults />}
        {activeTab === "analysis" && <Analysis />}
        {activeTab === "issues" && <Issue />}
        {activeTab === "summary" && <Summary />}
      </div>
    </div>
  );
}

export default App;
