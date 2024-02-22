const ReviewItem = (props: any) => {
  const { task, bgColor = "bg-slate-100" } = props;

  return (
    <div
      className={`border-1 mx-2 flex w-[350px] flex-col gap-y-[10px] rounded-[10px] border border-slate-300 p-5 ${bgColor}`}
    >
      <div className="flex w-full place-content-between">
        <span className="text-[15px] font-medium leading-[25.5px]">
          {task?.title}
        </span>
        <span className="text-[17px] font-bold leading-[25.5px]">
          SR {task?.budget}
        </span>
      </div>
      {task?.suburb && (
        <div className="flex items-center gap-[5px]">
          <img src={"/location.svg"} className="h-4 w-4" alt="location" />
          <span className="text-[13px]">{task?.suburb}</span>
        </div>
      )}
      <div className="flex items-center gap-[5px]">
        <img src={"/calendar.svg"} alt="calendar" className="h-4 w-4" />
        <span className="text-[13px]">{task?.due_date}</span>
      </div>
      <div className="flex items-center gap-[5px]">
        <img src={"/clock.svg"} alt="clock" className="h-4 w-4" />
        <span className="text-[13px]">{task.due_date}</span>
      </div>
      <div className="flex items-center justify-between">
        {task?.status === "open" ? (
          <span className="rounded-3xl bg-[#7db343] px-5 py-2 text-[13px] font-bold text-white">
            {task?.status}
          </span>
        ) : (
          <span className="rounded-3xl bg-black px-5 py-2 text-[13px] font-bold text-white">
            {task?.status}
          </span>
        )}
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={task?.profile_pic ? `${task?.profile_pic}` : "/wing.svg"}
          alt="wing"
        />
      </div>
    </div>
  );
};

export default ReviewItem;
