import { MdAdd } from "react-icons/md";

export default function Fab() {
  return (
    <button className="fixed bottom-4 right-4 bg-primary text-on-primary p-3 rounded-full shadow-lg hover:bg-blue-600 active:bg-blue-600/80 transition-colors cursor-pointer">
      <MdAdd className="text-2xl" />
    </button>
  )
}