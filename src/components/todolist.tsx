import useDate from "../hooks/useDate";

export default function TodoList() {
  const date = useDate();

  return (
    <div className="flex grow justify-center">
      <div className="w-full max-w-5xl bg-background p-10 rounded-3xl shadow-md flex flex-col gap-5">
        <div className="flex justify-between items-center">

          <div className="flex items-center gap-2">
            <div>{date.getDate()}</div>
            <div>
              <div>{date.toLocaleDateString("en", { month: "short" })}</div>
              <div>{date.getFullYear()}</div>
            </div>
          </div>

          <div className="flex gap-2">
            <div>Incomplete Tasks</div>
            <div>Completed Tasks</div>
          </div>

        </div>
      </div>
    </div>
  );
} 