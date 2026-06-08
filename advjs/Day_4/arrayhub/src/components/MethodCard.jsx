const MethodCard = ({
  title,
  description,
  code,
  output,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-3">
        {title}
      </h2>

      <p className="mb-3">
        {description}
      </p>

      <pre className="bg-slate-900 text-green-400 p-4 rounded overflow-auto">
        {code}
      </pre>

      <div className="mt-4">
        <span className="font-bold">
          Output:
        </span>

        <p>{output}</p>
      </div>

    </div>
  );
};

export default MethodCard;