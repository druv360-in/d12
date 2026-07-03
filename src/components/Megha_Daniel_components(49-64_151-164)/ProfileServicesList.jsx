function ProfileServicesList({ image, title, description, rating, price }) {

  return (

    <div className="bg-slate-800 rounded-2xl flex overflow-hidden w-full max-w-sm">

      {/* Image */}

      <div className="w-36 shrink-0">

        <img

          src={image}

          alt={title}

          className="w-full h-full object-cover"

        />

      </div>

      {/* Content */}

      <div className="flex flex-col justify-center gap-1.5 p-3 flex-1 min-w-0">

        <h3 className="text-white font-bold text-base truncate">{title}</h3>

        <p className="text-slate-400 text-sm leading-snug line-clamp-2">{description}</p>

        <div className="flex items-center gap-3 mt-1">

          <span className="flex items-center gap-1 text-sm text-white font-medium">

            <span className="text-yellow-400">⭐</span>

            {rating}

          </span>

          <span className="text-[#672AC9] font-bold text-sm">${price}</span>

        </div>

      </div>

    </div>

  );

}

export default ProfileServicesList;

  