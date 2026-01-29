
const SummaryCard = ({ title, value, color }) => {
  return (
    <div className="bg-base-200 rounded-xl p-5">
      <p className="text-sm text-gray-400">{title}</p>
      <h2
        className={`text-2xl font-bold mt-2 ${
          color === "success"
            ? "text-success"
            : color === "warning"
              ? "text-warning"
              : ""
        }`}
      >
        {value}
      </h2>
    </div>
  );
};

export default SummaryCard;
