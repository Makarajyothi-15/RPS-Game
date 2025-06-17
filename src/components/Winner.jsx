import RepeatIcon from '@mui/icons-material/Repeat';

const Winner = ({ winner, onReset }) => {
  return (
    <div className="text-center mt-6">
      <p className="text-2xl font-bold text-green-600">{winner}</p>

      <button
        onClick={onReset}
        className="mt-4 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded flex items-center gap-2 mx-auto"
      >
        <RepeatIcon />
        Play Again
      </button>
    </div>
  );
};

export default Winner;
