export default function MessageCard({
  name,
  message,
  time,
  unread,
  image,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover"
          />

          <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
        </div>

        <div>
          <h2 className="font-semibold text-lg">{name}</h2>

          <p className="text-gray-500">{message}</p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-3">
        <span className="text-sm text-gray-400">{time}</span>

        {unread && (
          <div className="w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
            {unread}
          </div>
        )}
      </div>
    </div>
  );
}