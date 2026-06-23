import { Star } from "lucide-react";

function ProfileServicesList({ image, title, description, rating, price }) {
  return (
    <button className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden active:scale-95 w-80">
      <div className="flex gap-4">
        <img
          src={image}
          alt={title}
          className="w-28 h-28 object-cover shrink-0"
        />
        <div className="flex-1 p-4 text-left">
          <h4 className="font-semibold text-gray-900 mb-1 line-clamp-1">{title}</h4>
          <p className="text-xs text-gray-600 mb-2 line-clamp-2">{description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
            <span className="text-lg font-bold text-indigo-600">${price}</span>
          </div>
        </div>
      </div>
    </button>
  );
}

export default ProfileServicesList;