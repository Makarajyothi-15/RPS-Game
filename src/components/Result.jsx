import { FaRobot } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa6";

const Result = ({
  playerChoice,
  computerChoice,
  result,
  playerScore,
  computerScore,
}) => {
  return (
    <>
      {playerChoice && computerChoice && (
  <div className="text-lg mb-4 space-y-2">
    <p className="flex items-center gap-2 justify-center">
      <FaUserSecret className="text-blue-600" />
      You: <strong>{playerChoice}</strong>
    </p>
    <p className="flex items-center gap-2 justify-center">
      <FaRobot className="text-gray-700" />
      Computer: <strong>{computerChoice}</strong>
    </p>
  </div>
)}

<p className="text-xl font-semibold mt-4">{result}</p>

<p className="text-lg mt-2 flex items-center justify-center gap-4">
  <span className="flex items-center gap-1">
    <FaUserSecret className="text-blue-600" /> You: {playerScore}
  </span>
  |
  <span className="flex items-center gap-1">
    <FaRobot className="text-gray-700" /> Computer: {computerScore}
  </span>
</p>

    </>
  );
};

export default Result;