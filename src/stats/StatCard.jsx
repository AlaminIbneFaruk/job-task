const StatCard=({ title, value, trend, icon: Icon, gradient })=> {
  const positive = trend.includes("+");
  console.log(Icon);

  return (
    <div className="bg-base-200 rounded-xl p-5 flex items-start gap-4">
      {/* Content */}
      <div className="flex-1">
        <p className="text-sm text-gray-400">{title}</p>

        <div className="flex items-end justify-between mt-2">
          <h2 className="text-2xl font-bold">{value}</h2>
          {/* Icon Box */}
          <div
            className={`p-3 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center`}
          >
            <Icon className="text-white text-xl" />
          </div>
        </div>
        <span
          className={`text-sm font-semibold ${
            positive ? "text-success" : "text-error"
          }`}
        >
          {trend}
        </span>
      </div>
    </div>
  );
}

export default StatCard;
