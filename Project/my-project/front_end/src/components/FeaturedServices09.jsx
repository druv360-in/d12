import { TrendingUp } from "lucide-react";
import FeaturedServiceCard08 from "./FeaturedServiceCard08";


function FeaturedServices09() {

  const services = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400",

      title: "Modern Website Design",

      desc:
        "I will create a fully responsive, modern website...",

      rating: 4.9,

      days: 5,

      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",

      name: "Emma Thompson",

      price: 299,
    },


    {
      id: 2,

      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400",

      title:
        "Professional Logo Design",

      desc:
        "Complete brand identity package including logo...",

      rating: 4.8,

      days: 3,

      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",

      name:
        "Marcus Johnson",

      price:
        149,
    },


    {
      id: 3,

      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400",

      title:
        "Social Media Videos",

      desc:
        "Professional video editing for Instagram and TikTok...",

      rating:
        5.0,

      days:
        2,

      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",

      name:
        "Sophia Chen",

      price:
        99,
    },
  ];



  return (

    <section
      className="
        px-4
        py-0
        lg:px-0
      "
    >


      {/* Heading */}
      <div
        className="
          mb-8
          flex
          items-center
          justify-between
        "
      >

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <TrendingUp
            size={28}
            className="
              text-purple-600
            "
          />


          <h3
            className="
              text-2xl
              font-bold
              text-gray-900
            "
          >
            Featured Services
          </h3>


        </div>



        


      </div>





      {/* Service Cards */}
      <div
        className="
          flex
          flex-col
          gap-8
        "
      >

        {
          services.map((service) => (

            <FeaturedServiceCard08

              key={service.id}

              service={service}

            />

          ))
        }


      </div>


    </section>

  );

}


export default FeaturedServices09;