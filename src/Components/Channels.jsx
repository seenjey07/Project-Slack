import SendMessage from "./FunctionalComponent/SendMessage";

const Channels = () => {
  return (
    <>
      <div className="bg-amber-200 h-screen">
        <div className="flex justify-between bg-red-200">
          <span>batch 30</span>
          <div className="flex w-56 justify-between">
            <span>Members</span>
            <span className="pr-2">Notes</span>
          </div>
        </div>

        <div className="bg-green-200 w-screen">
          <span>pin here</span>
        </div>

        <div className="flex justify-center items-center bg-slate-200 h-96">
          MessageBox
        </div>
        <SendMessage />
      </div>
    </>
  );
};

export default Channels;
