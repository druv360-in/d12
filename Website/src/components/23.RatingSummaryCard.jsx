import React from "react";
import '../index.css'

function StarIcons({value, size = 20}){
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const stars = [];
  for(let i=1;i<=5;i++){
    if(i<=full) stars.push(<svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="#f6c941" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.431L23.5 9.75l-5.75 5.602L19.335 24 12 19.897 4.665 24l1.585-8.648L.5 9.75l7.832-1.732L12 .587z"/></svg>);
    else if(i===full+1 && half) stars.push(<svg key={i} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id={`g${i}`}><stop offset="50%" stopColor="#f6c941"/><stop offset="50%" stopColor="#e6e9ee"/></linearGradient></defs><path fill={`url(#g${i})`} d="M12 .587l3.668 7.431L23.5 9.75l-5.75 5.602L19.335 24 12 19.897 4.665 24l1.585-8.648L.5 9.75l7.832-1.732L12 .587z"/></svg>);
    else stars.push(<svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="#e6e9ee" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.431L23.5 9.75l-5.75 5.602L19.335 24 12 19.897 4.665 24l1.585-8.648L.5 9.75l7.832-1.732L12 .587z"/></svg>);
  }
  return <div style={{display:'flex',gap:6,alignItems:'center'}}>{stars}</div>;
}

function RatingBar({percent}){
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-3 bg-[#f2f6fb] rounded-full overflow-hidden">
        <div className="h-full bg-yellow-400" style={{width:`${percent}%`}} />
      </div>
      <div className="w-9 text-right text-sm text-gray-500">{percent}%</div>
    </div>
  )
}

function RatingSummaryCard({rating = 4.9, totalReviews = 342, breakdown = {5:80,4:15,3:5,2:5,1:5}}){
  return (
    <div className=" flex items-center gap-6 p-5 bg-yellow-50 rounded-lg border border-gray-100 max-w-[760px]">
            <div className="flex-none w-[140px] flex flex-col items-center gap-2">
        
        <div className="text-[48px] font-extrabold text-gray-900">{rating.toFixed(1)}</div>
        <StarIcons value={Math.round(rating*2)/2} size={18} />
        <div className="text-sm text-gray-500">{totalReviews} reviews</div>
      </div>

      <div className="flex-1 flex flex-col gap-2.5">
        { [5,4,3,2,1].map(star => (
          <div key={star} className="flex items-center gap-3">
            <div className="w-[60px] flex items-center gap-2">
              <div className="text-sm font-semibold text-gray-900">{star} star</div>
            </div>
            <div className="flex-1">
              <RatingBar percent={breakdown[star] ?? 0} />
            </div>
          </div>
        )) }
      </div>
    </div>
  )
}

export default RatingSummaryCard;