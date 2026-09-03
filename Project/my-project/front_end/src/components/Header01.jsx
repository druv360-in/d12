import { Menu, ShoppingCart, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Header01({ onMenuClick }) {
  const navigate = useNavigate();

  return (
    <header className="
      sticky
      top-0
      z-50
      border-b
      border-gray-200
      bg-white
      shadow-sm
    ">

      <div className="
        relative
        mx-auto
        flex
        h-20
        items-center
        justify-between
        px-4
        sm:px-6
        lg:px-8
      ">


        {/* Left - Mobile Menu */}
        <button
          onClick={onMenuClick}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-gray-100
            transition
            hover:bg-gray-200
            lg:hidden
          "
        >
          <Menu size={24} className="text-slate-700" />
        </button>



        {/* Mobile Center Logo */}
        <div
          onClick={() => navigate("/")}
          className="
            absolute
            left-1/2
            flex
            -translate-x-1/2
            cursor-pointer
            items-center
            gap-3
            lg:hidden
          "
        >

          <div className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-purple-600
            to-violet-700
            shadow-md
          ">
            <Zap size={18} className="text-white" />
          </div>


          <h1 className="
            text-xl
            font-bold
            text-slate-900
            sm:text-2xl
          ">
            SkillBuster
          </h1>

        </div>



        {/* Desktop Empty Space */}
        <div className="hidden lg:block">
        </div>



        {/* Cart - Mobile Only */}
        <button
          onClick={() => navigate("/template")}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-purple-50
            transition
            hover:bg-purple-100
            lg:hidden
          "
        >
          <ShoppingCart 
            size={24} 
            className="text-purple-700" 
          />
        </button>


      </div>

    </header>
  );
}

export default Header01;
