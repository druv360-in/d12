import { Star, Zap } from "lucide-react";

function FeaturedFreelancerCard65() {
  const freelancers = [
    {
      id: 1,
      firstName: 'Emma',
      lastName: 'Thompson',
      school: 'Stanford University',
      rating: 4.9,
      projects: 89,
      rate: '$35/hr',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
    {
      id: 2,
      firstName: 'Marcus',
      lastName: 'Johnson',
      school: 'MIT',
      rating: 4.8,
      projects: 76,
      rate: '$40/hr',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    }
  ];

  return (
    <div style={{ background: '#ffffff', padding: '16px', borderRadius: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1e293b', fontSize: '16px', fontWeight: '700' }}>
          <Star size={18} color="#f59e0b" strokeWidth={2} />
          <span>Featured Freelancers</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#fef3c7', color: '#92400e', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>
          <Zap size={14} color="#92400e" strokeWidth={2.5} />
          <span>Premium</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '12px' }}>
        {freelancers.map((freelancer) => (
          <div key={freelancer.id} style={{ background: '#fefce8', border: '1.5px solid #fde047', borderRadius: '12px', padding: '12px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <img 
                src={freelancer.avatar} 
                alt={freelancer.firstName} 
                style={{ width: '48px', height: '48px', borderRadius: '10px', objectFit: 'cover', display: 'block' }} 
              />
              <div style={{ position: 'absolute', top: '-4px', right: '-4px', background: '#fbbf24', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fefce8' }}>
                <Star size={10} fill="#ffffff" color="#ffffff" />
              </div>
            </div>
            
            <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', minWidth: 0 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', color: '#0f172a', fontSize: '15px', fontWeight: '700', lineHeight: '1.2', marginBottom: '2px' }}>
                  <span>{freelancer.firstName}</span>
                  <span>{freelancer.lastName}</span>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '12px', fontWeight: '400', margin: '0 0 4px 0', lineHeight: '1.2' }}>{freelancer.school}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                  <Star size={12} fill="#f59e0b" color="#f59e0b" />
                  <span style={{ color: '#475569', fontWeight: '600' }}>{freelancer.rating}</span>
                  <span style={{ color: '#cbd5e1' }}>•</span>
                  <span style={{ color: '#64748b', fontWeight: '500' }}>{freelancer.projects} projects</span>
                </div>
              </div>
              <div style={{ flexShrink: 0, color: '#7c3aed', fontSize: '15px', fontWeight: '700', paddingTop: '2px' }}>
                {freelancer.rate}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p style={{ color: '#94a3b8', fontSize: '12px', textAlign: 'center', lineHeight: '1.4', margin: 0 }}>
        Featured listings get 5x more visibility. Want to feature your services?
      </p>
    </div>
  );
}

export default FeaturedFreelancerCard65;