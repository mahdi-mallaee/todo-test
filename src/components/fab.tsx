import { MdAdd } from "react-icons/md";

export default function Fab({ onClick }: { onClick?: () => void }) {
  return (
    <button className="fixed bottom-8 right-12 bg-primary text-on-primary p-2 rounded-full shadow-lg hover:bg-blue-600 active:bg-blue-600/80 transition-colors cursor-pointer"
      onClick={onClick}>
      <MdAdd className="w-8 h-8" />
    </button>
  )
}