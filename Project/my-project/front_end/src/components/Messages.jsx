import { useNavigate } from "react-router-dom";

const chats = [
  {
    id: 1,
    name: "Tech Startup Co.",
    message: "Thanks! Looking forward to the final design.",
    time: "10:30 AM",
    unread: 2,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
  },
  {
    id: 2,
    name: "Sarah Martinez",
    message: "Can you make the logo a bit more colorful?",
    time: "Yesterday",
    unread: 0,
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
  },
  {
    id: 3,
    name: "Mike Chen",
    message: "Perfect! Approved the design.",
    time: "2 days ago",
    unread: 0,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
  },
];


export default function Messages() {

  const navigate = useNavigate();


  return (

    <div
      className="
        w-full
        min-h-screen
        overflow-x-hidden
      "
    >



      {/* Full Width Header Card */}
      <div
        className="
          w-full

          h-28

          px-8

          flex

          items-center

          bg-white/75

          backdrop-blur-md

          border-b

          border-gray-200

          shadow-sm
        "
      >

        <div>

          <h1
            className="
              text-3xl
              font-bold
              text-gray-900
            "
          >
            Messages
          </h1>


          <p
            className="
              mt-1
              text-gray-500
            "
          >
            {chats.length} conversations
          </p>


        </div>


      </div>






      {/* Chat List */}
      <div
        className="
          w-full

          px-8

          py-8

          space-y-4
        "
      >


        {chats.map((chat) => (

          <div
            key={chat.id}

            onClick={() =>
              navigate(`/chat/${chat.id}`, {
                state: chat,
              })
            }

            className="
              cursor-pointer
              transition
              hover:scale-[1.01]
            "
          >


            <div
              className="
                w-full

                bg-white

                rounded-3xl

                p-4

                shadow-sm

                border
                border-gray-100

                flex

                items-center

                justify-between
              "
            >




              {/* Left */}
              <div
                className="
                  flex

                  items-center

                  gap-4

                  flex-1

                  min-w-0
                "
              >


                <div
                  className="
                    relative
                    shrink-0
                  "
                >

                  <img
                    src={chat.avatar}
                    alt={chat.name}

                    className="
                      w-14
                      h-14

                      rounded-full

                      object-cover
                    "
                  />


                  <span
                    className="
                      absolute

                      bottom-0

                      right-0

                      w-3

                      h-3

                      bg-green-500

                      rounded-full

                      border-2

                      border-white
                    "
                  />

                </div>






                <div
                  className="
                    min-w-0
                  "
                >

                  <h3
                    className="
                      font-semibold

                      text-gray-900

                      whitespace-nowrap
                    "
                  >
                    {chat.name}
                  </h3>



                  <p
                    className="
                      text-sm

                      text-gray-500

                      truncate
                    "
                  >
                    {chat.message}
                  </p>


                </div>


              </div>








              {/* Right */}
              <div
                className="
                  flex

                  flex-col

                  items-end

                  gap-2

                  shrink-0
                "
              >


                <span
                  className="
                    text-xs

                    text-gray-400
                  "
                >
                  {chat.time}
                </span>





                {chat.unread > 0 && (

                  <div
                    className="
                      w-6

                      h-6

                      rounded-full

                      bg-purple-600

                      text-white

                      text-xs

                      font-semibold

                      flex

                      items-center

                      justify-center
                    "
                  >
                    {chat.unread}
                  </div>

                )}


              </div>



            </div>


          </div>

        ))}


      </div>


    </div>

  );
}