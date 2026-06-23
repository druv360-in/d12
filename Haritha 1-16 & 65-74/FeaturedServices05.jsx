import { TrendingUp } from "lucide-react";
import FeaturedServiceCard06 from "./FeaturedServiceCard06";

function FeaturedServices05() {
  const services = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400",
      title: "Modern Website...",
      desc: "I will create a fully responsive, modern websit...",
      rating: 4.9,
      days: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      name: "Emma Thompson",
      price: 299,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400",
      title: "Professional Logo...",
      desc: "Complete brand identity package including logo...",
      rating: 4.8,
      days: 3,
      avatar: "	https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      name: "Marcus Johnson",
      price: 149,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400",
      title: "Social Media Vide...",
      desc: "Professional video editing for Instagram, TikTok, or...",
      rating: 5,
      days: 2,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      name: "Sophia Chen",
      price: 99,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400",
      title: "Instagram Growth...",
      desc: "Complete social media strategy to grow your...",
      rating: 4.7,
      days: 7,
      avatar: "	https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      name: "Alex Rivera",
      price: 199,
    },
  ];

  return (
    <section className="featured-services">
      <div className="services-header">
        <TrendingUp size={20} color="#7c3aed" strokeWidth={2.5} />
        <h3 className="services-title">Featured Services</h3>
      </div>

      <div className="services-list">
        {services.map((service) => (
          <FeaturedServiceCard06 key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedServices05;