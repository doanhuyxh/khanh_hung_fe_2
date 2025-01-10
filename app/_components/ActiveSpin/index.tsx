'use client';
interface ActiveSpinProps {
  isActive: boolean;
  onToggle: (newState: boolean) => void;
}

const ActiveSpin: React.FC<ActiveSpinProps> = ({ isActive, onToggle }) => {
  return (
    <div
      className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        isActive ? "bg-green-500" : "bg-gray-300"
      }`}
      onClick={() => onToggle(!isActive)}
    >
      <div
        className={`h-6 w-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
          isActive ? "translate-x-8" : "translate-x-0"
        }`}
      />
    </div>
  );
};

export default ActiveSpin;
