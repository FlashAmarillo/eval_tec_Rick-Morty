

export default function UserItem() {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">

        <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
            <p>DV</p>
        </div>
        <div className="grow">
            <p className="text-lg font-bold">Diomar Villarroel</p>
            <p className="text-sm text-slate-500">codewithdiomar@correo.com</p>
        </div>
    </div>
  )
}
