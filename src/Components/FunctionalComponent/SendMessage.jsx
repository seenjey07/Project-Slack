const SendMessage = () => {
  return (
    <>
      <div className="flex flex-col m-2 h-40 rounded-lg shadow-lg bg-white">
        <span className="w-full bg-orange-200">FormatBox </span>
        <div>
          <div className="h-32">
            Message Text Area Input
            <input type="text" />
          </div>

          <div className="flex flex-row justify-between bg-emerald-200">
            <span>Some Formatting Tools</span>

            <span>Send Button</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendMessage;
