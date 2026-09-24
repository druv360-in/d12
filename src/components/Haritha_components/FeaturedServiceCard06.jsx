import { Star, Clock } from "lucide-react";

function FeaturedServiceCard06({ service }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl flex overflow-hidden shadow-sm active:scale-[0.98] transition-all">
      <img
        src={service.image}
        alt={service.title}
        className="w-[110px] h-[110px] object-cover shrink-0"
      />

      <div className="p-3 flex flex-col justify-between flex-1 min-w-0">
        <h4 className="text-[15px] font-semibold text-gray-900 truncate">
          {service.title}
        </h4>

        <p className="text-[12px] text-gray-500 leading-[1.4] line-clamp-2">
          {service.desc}
        </p>

        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-1 text-[12px] text-gray-500 font-medium">
            <Star
              size={14}
              fill="#fbbf24"
              color="#fbbf24"
            />
            <span>{service.rating}</span>
          </div>

          <div className="flex items-center gap-1 text-[12px] text-gray-500 font-medium">
            <Clock size={14} className="text-gray-400" />
            <span>{service.days} days</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <img
              src={service.avatar}
              alt={service.name}
              className="w-5 h-5 rounded-full object-cover"
            />
            <span className="text-[12px] text-gray-600">
              {service.name}
            </span>
          </div>

          <span className="text-purple-600 font-bold text-[16px]">
            ${service.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedServiceCard06;