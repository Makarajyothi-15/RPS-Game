import React from 'react';

const ChoiceButtons = ({ choices, onChoice, disabled }) => {
  return (
    <div className="flex justify-center gap-4 mb-6">
      {choices.map((choice) => (
        <button
          key={choice}
          onClick={() => onChoice(choice)}
          className="text-black bg-gradient-to-r  from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 font-bold cursor-pointer py-2 px-4"
          disabled={disabled}
        >
          {choice}
        </button>
      ))}
    </div>
  );
};

export default ChoiceButtons;