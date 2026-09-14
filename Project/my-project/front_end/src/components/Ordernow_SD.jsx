import React, { useState } from "react";
import {
  ArrowLeft,
  CreditCard,
  Wallet,
  Lock,
  CheckCircle2,
  Clock3,
  LoaderCircle,
  Menu,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import SidebarMenu24 from "./Sidebarmenu24";

function OrdernowSD() {
  const navigate = useNavigate();

  // =========================================================
  // SIDEBAR STATE
  // =========================================================
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // =========================================================
  // PAGE STATE
  // =========================================================
  const [currentPage, setCurrentPage] = useState("checkout");

  // =========================================================
  // PAYMENT STATE
  // =========================================================
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("John Doe");

  // =========================================================
  // ORDER FILTER STATE
  // =========================================================
  const [activeTab, setActiveTab] = useState("All Orders");

  const tabs = [
    "All Orders",
    "Pending",
    "In Progress",
    "Completed",
  ];

  // =========================================================
  // MOCK ORDERS
  // =========================================================
  const orders = [
    {
      id: 1,
      status: "In Progress",
      date: "2026-03-08",
      title: "Modern Website Development",
      category: "Client: Tech Startup Co.",
      dueDate: "2026-03-13",
      price: "$299",
      progress: 65,
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800",
    },
    {
      id: 2,
      status: "Pending",
      date: "2026-03-09",
      title: "Professional Logo Design",
      category: "Client: Sarah's Bakery",
      dueDate: "2026-03-12",
      price: "$149",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
    },
    {
      id: 3,
      status: "Completed",
      date: "2026-03-05",
      title: "Social Media Video Editing",
      category: "Client: Fitness Influencer",
      dueDate: "2026-03-07",
      price: "$99",
      image:
        "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800",
    },
  ];

  // =========================================================
  // PLACE ORDER
  // =========================================================
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    setCurrentPage("orders");
    setActiveTab("All Orders");
  };

  // =========================================================
  // FILTER ORDERS
  // =========================================================
  const filteredOrders =
    activeTab === "All Orders"
      ? orders
      : orders.filter(
          (order) => order.status === activeTab
        );

  // =========================================================
  // STATUS ICON
  // =========================================================
  const getStatusIcon = (status) => {
    if (status === "Pending") {
      return <Clock3 size={17} />;
    }

    if (status === "In Progress") {
      return <LoaderCircle size={17} />;
    }

    return <CheckCircle2 size={17} />;
  };

  // =========================================================
  // MOBILE TOP BAR
  // =========================================================
  const MobileTopBar = () => (
    <div
      className="
        lg:hidden
        fixed
        top-0
        left-0
        right-0
        z-50
        h-16
        bg-white
        border-b
        border-gray-100
        flex
        items-center
        justify-between
        px-4
      "
    >
      <button
        type="button"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Open menu"
        className="
          w-10
          h-10
          rounded-full
          bg-[#F3F1FF]
          flex
          items-center
          justify-center
          text-gray-700
        "
      >
        <Menu size={21} />
      </button>

      <div className="text-lg font-bold text-gray-900">
        SkillBuster
      </div>

      <div className="w-10 h-10" />
    </div>
  );

  // =========================================================
  // SIDEBAR
  // =========================================================
  const SidebarSection = () => (
    <>
      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="
            lg:hidden
            fixed
            inset-0
            z-40
            bg-black/30
          "
        />
      )}
    </>
  );

  // ===========================================================
  // CHECKOUT PAGE
  // ===========================================================
  if (currentPage === "checkout") {
    return (
      <div className="min-h-screen bg-[#F8F8FA]">

        {/* SIDEBAR */}
        <SidebarSection />

        {/* MOBILE TOP BAR */}
        <MobileTopBar />

        {/* MAIN AREA */}
        <div className="min-h-screen lg:ml-[260px]">

          {/* =================================================
              CHECKOUT HEADER
              ================================================= */}
          <header
            className="
              h-[74px]
              bg-white
              border-b
              border-gray-100
              flex
              items-center
              justify-between
              px-5
              sm:px-8
              lg:px-10
              mt-16
              lg:mt-0
              relative
              z-30
            "
          >

            {/* LEFT */}
            <div className="flex items-center gap-4">

              <button
                type="button"
                onClick={() => navigate(-1)}
                aria-label="Go back"
                className="
                  relative
                  z-40
                  flex-shrink-0
                  w-10
                  h-10
                  rounded-full
                  bg-[#F3F1FF]
                  flex
                  items-center
                  justify-center
                  text-gray-700
                  border
                  border-transparent
                  hover:bg-[#EAE6FF]
                  transition
                  cursor-pointer
                "
              >
                <ArrowLeft
                  size={22}
                  strokeWidth={2.5}
                  className="text-gray-700"
                />
              </button>

              <h1
                className="
                  text-[24px]
                  sm:text-[28px]
                  font-semibold
                  text-gray-900
                "
              >
                Checkout
              </h1>

            </div>

            {/* USER */}
            <div
              className="
                flex
                items-center
                gap-3
                rounded-full
                bg-white
                border
                border-gray-200
                px-3
                py-2
                shadow-sm
              "
            >

              <div
                className="
                  hidden
                  sm:flex
                  w-10
                  h-10
                  rounded-full
                  bg-[#E9E4FF]
                  items-center
                  justify-center
                  text-[#6C5CE7]
                  font-semibold
                "
              >
                JD
              </div>

              <div className="hidden sm:block">

                <p className="text-sm font-semibold text-gray-900">
                  John Doe
                </p>

                <p className="text-xs text-gray-500">
                  Client
                </p>

              </div>

            </div>

          </header>

          {/* =================================================
              CHECKOUT CONTENT
              ================================================= */}
          <main
            className="
              w-full
              max-w-[1180px]
              mx-auto
              px-4
              sm:px-6
              lg:px-6
              py-5
              sm:py-6
              pb-6
            "
          >

            <form
              id="checkout-form"
              onSubmit={handlePlaceOrder}
            >

              {/* =================================================
                  ORDER SUMMARY
                  ================================================= */}
              <section className="mb-7">

                <h2
                  className="
                    text-[20px]
                    sm:text-[22px]
                    font-semibold
                    text-gray-900
                    mb-3
                  "
                >
                  Order Summary
                </h2>

                <div
                  className="
                    bg-white
                    rounded-2xl
                    p-5
                    sm:p-6
                    shadow-[0_3px_14px_rgba(17,24,39,0.08)]
                  "
                >

                  <div
                    className="
                      flex
                      flex-col
                      lg:flex-row
                      lg:items-center
                      lg:justify-between
                      gap-6
                    "
                  >

                    {/* SERVICE */}
                    <div className="flex items-center gap-4">

                      <div
                        className="
                          w-[90px]
                          h-[78px]
                          sm:w-[105px]
                          sm:h-[88px]
                          rounded-xl
                          overflow-hidden
                          bg-gray-100
                          flex
                          items-center
                          justify-center
                          flex-shrink-0
                        "
                      >
                        <img
                          src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800"
                          alt="Modern Website Development"
                          className="
                            w-full
                            h-full
                            object-cover
                          "
                        />
                      </div>

                      <div>

                        <h3
                          className="
                            text-base
                            sm:text-lg
                            font-semibold
                            text-gray-900
                          "
                        >
                          Modern Website Development
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          by Emma Thompson
                        </p>

                        <p className="text-xs text-gray-400 mt-1">
                          Delivery in 5 days
                        </p>

                      </div>

                    </div>

                    {/* PRICE BREAKDOWN */}
                    <div
                      className="
                        w-full
                        lg:w-[280px]
                        lg:border-l
                        lg:border-gray-100
                        lg:pl-7
                      "
                    >

                      <div className="flex justify-between text-sm mb-2">

                        <span className="text-gray-500">
                          Gross Price
                        </span>

                        <span className="font-medium text-gray-900">
                          $299
                        </span>

                      </div>

                      <div className="flex justify-between text-sm mb-3">

                        <span className="text-gray-500">
                          Service Fee
                        </span>

                        <span className="font-medium text-gray-900">
                          $20
                        </span>

                      </div>

                      <div
                        className="
                          border-t
                          border-gray-100
                          pt-3
                          flex
                          justify-between
                          items-center
                        "
                      >

                        <span className="font-semibold text-gray-900">
                          Total
                        </span>

                        <span className="text-xl font-bold text-[#6C5CE7]">
                          $329
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              </section>

              {/* =================================================
                  PAYMENT METHOD
                  ================================================= */}
              <section className="mb-7">

                <h2
                  className="
                    text-[20px]
                    sm:text-[22px]
                    font-semibold
                    text-gray-900
                    mb-3
                  "
                >
                  Payment Method
                </h2>

                <div className="grid grid-cols-1 gap-3">

                  {/* CREDIT / DEBIT CARD */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`
                      text-left
                      bg-white
                      rounded-[16px]
                      border-2
                      p-4
                      transition
                      ${
                        paymentMethod === "card"
                          ? "border-[#6C5CE7] bg-[#FAF9FF]"
                          : "border-[#E5E7EB] hover:border-gray-300"
                      }
                    `}
                  >

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-3">

                        <div
                          className={`
                            w-11
                            h-11
                            rounded-xl
                            flex
                            items-center
                            justify-center
                            ${
                              paymentMethod === "card"
                                ? "bg-[#EDE9FE] text-[#6C5CE7]"
                                : "bg-gray-100 text-gray-500"
                            }
                          `}
                        >
                          <CreditCard size={22} />
                        </div>

                        <div>

                          <p className="font-semibold text-gray-900">
                            Credit/Debit Card
                          </p>

                          <p className="text-xs text-gray-500 mt-1">
                            Visa, Mastercard, RuPay
                          </p>

                        </div>

                      </div>

                      <div
                        className={`
                          w-5
                          h-5
                          rounded-full
                          border-2
                          flex
                          items-center
                          justify-center
                          ${
                            paymentMethod === "card"
                              ? "border-[#6C5CE7]"
                              : "border-gray-300"
                          }
                        `}
                      >
                        {paymentMethod === "card" && (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#6C5CE7]" />
                        )}
                      </div>

                    </div>

                  </button>

                  {/* PAYPAL */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("paypal")}
                    className={`
                      text-left
                      bg-white
                      rounded-[16px]
                      border-2
                      p-4
                      transition
                      ${
                        paymentMethod === "paypal"
                          ? "border-[#6C5CE7] bg-[#FAF9FF]"
                          : "border-[#E5E7EB] hover:border-gray-300"
                      }
                    `}
                  >

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-3">

                        <div
                          className={`
                            w-11
                            h-11
                            rounded-xl
                            flex
                            items-center
                            justify-center
                            ${
                              paymentMethod === "paypal"
                                ? "bg-[#EDE9FE] text-[#6C5CE7]"
                                : "bg-gray-100 text-gray-500"
                            }
                          `}
                        >
                          <Wallet size={22} />
                        </div>

                        <div>

                          <p className="font-semibold text-gray-900">
                            PayPal / Perf
                          </p>

                          <p className="text-xs text-gray-500 mt-1">
                            Fast and secure payment
                          </p>

                        </div>

                      </div>

                      <div
                        className={`
                          w-5
                          h-5
                          rounded-full
                          border-2
                          flex
                          items-center
                          justify-center
                          ${
                            paymentMethod === "paypal"
                              ? "border-[#6C5CE7]"
                              : "border-gray-300"
                          }
                        `}
                      >
                        {paymentMethod === "paypal" && (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#6C5CE7]" />
                        )}
                      </div>

                    </div>

                  </button>

                </div>

              </section>

              {/* =================================================
                  CARD DETAILS
                  ================================================= */}
              {paymentMethod === "card" && (
                <section className="mb-7">

                  <h2
                    className="
                      text-xl
                      sm:text-2xl
                      font-semibold
                      text-gray-900
                      mb-4
                    "
                  >
                    Card Details
                  </h2>

                  <div
                    className="
                      bg-white
                      border
                      border-[#E5E7EB]
                      rounded-2xl
                      p-5
                      sm:p-6
                    "
                  >

                    {/* CARD NUMBER */}
                    <div className="mb-5">

                      <label
                        htmlFor="cardNumber"
                        className="
                          block
                          text-sm
                          font-medium
                          text-gray-600
                          mb-2
                        "
                      >
                        Card Number
                      </label>

                      <input
                        id="cardNumber"
                        type="text"
                        value={cardNumber}
                        onChange={(e) =>
                          setCardNumber(e.target.value)
                        }
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="
                          w-full
                          h-12
                          px-4
                          rounded-xl
                          border
                          border-gray-200
                          bg-white
                          text-gray-900
                          outline-none
                          focus:border-[#6C5CE7]
                          focus:ring-2
                          focus:ring-[#6C5CE7]/10
                          transition
                        "
                      />

                    </div>

                    {/* EXPIRY + CVV */}
                    <div className="grid grid-cols-2 gap-4 mb-5">

                      <div>

                        <label
                          htmlFor="expiry"
                          className="
                            block
                            text-sm
                            font-medium
                            text-gray-600
                            mb-2
                          "
                        >
                          Expiry Date
                        </label>

                        <input
                          id="expiry"
                          type="text"
                          value={expiryDate}
                          onChange={(e) =>
                            setExpiryDate(e.target.value)
                          }
                          placeholder="MM/YY"
                          maxLength={5}
                          className="
                            w-full
                            h-12
                            px-4
                            rounded-xl
                            border
                            border-gray-200
                            bg-white
                            text-gray-900
                            outline-none
                            focus:border-[#6C5CE7]
                            focus:ring-2
                            focus:ring-[#6C5CE7]/10
                          "
                        />

                      </div>

                      <div>

                        <label
                          htmlFor="cvv"
                          className="
                            block
                            text-sm
                            font-medium
                            text-gray-600
                            mb-2
                          "
                        >
                          CVV
                        </label>

                        <input
                          id="cvv"
                          type="password"
                          value={cvv}
                          onChange={(e) =>
                            setCvv(e.target.value)
                          }
                          placeholder="123"
                          maxLength={3}
                          className="
                            w-full
                            h-12
                            px-4
                            rounded-xl
                            border
                            border-gray-200
                            bg-white
                            text-gray-900
                            outline-none
                            focus:border-[#6C5CE7]
                            focus:ring-2
                            focus:ring-[#6C5CE7]/10
                          "
                        />

                      </div>

                    </div>

                    {/* CARDHOLDER */}
                    <div>

                      <label
                        htmlFor="cardholder"
                        className="
                          block
                          text-sm
                          font-medium
                          text-gray-600
                          mb-2
                        "
                      >
                        Cardholder Name
                      </label>

                      <input
                        id="cardholder"
                        type="text"
                        value={cardholderName}
                        onChange={(e) =>
                          setCardholderName(e.target.value)
                        }
                        placeholder="John Doe"
                        className="
                          w-full
                          h-12
                          px-4
                          rounded-xl
                          border
                          border-gray-200
                          bg-white
                          text-gray-900
                          outline-none
                          focus:border-[#6C5CE7]
                          focus:ring-2
                          focus:ring-[#6C5CE7]/10
                        "
                      />

                    </div>

                  </div>

                </section>
              )}

              {/* =================================================
                  SECURE PAYMENT
                  ================================================= */}
              <section className="mb-2">

                <div
                  className="
                    bg-[#F8F7FF]
                    border
                    border-[#E7E2FF]
                    rounded-2xl
                    p-4
                    sm:p-5
                    flex
                    items-start
                    gap-3
                  "
                >

                  <div
                    className="
                      w-10
                      h-10
                      rounded-full
                      bg-[#EDE9FE]
                      text-[#6C5CE7]
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                    "
                  >
                    <Lock size={19} />
                  </div>

                  <div>

                    <p className="font-semibold text-gray-900 text-sm">
                      Secure Payment
                    </p>

                    <p className="text-sm text-gray-500 mt-1 leading-6">
                      Your payment information is encrypted and secure.
                      We never store your card details.
                    </p>

                  </div>

                </div>

              </section>

            </form>

          </main>

          {/* =================================================
              PLACE ORDER
              ================================================= */}
          <div
            className="
              w-full
              bg-white
              border-t
              border-gray-200
              shadow-[0_-4px_18px_rgba(0,0,0,0.06)]
              px-4
              py-4
            "
          >

            <div className="w-full max-w-[1180px] mx-auto flex items-center justify-center">

              <button
                type="submit"
                form="checkout-form"
                className="
                  w-full
                  sm:w-[430px]
                  h-[58px]
                  rounded-[16px]
                  bg-gradient-to-r
                  from-[#5F20C8]
                  to-[#7A2FE8]
                  hover:from-[#551BB7]
                  hover:to-[#7027D8]
                  text-white
                  font-semibold
                  text-base
                  flex
                  items-center
                  justify-center
                  shadow-[0_7px_18px_rgba(109,40,217,0.28)]
                  transition-all
                  active:scale-[0.99]
                "
              >
                Place Order&nbsp; • &nbsp;$329
              </button>

            </div>

          </div>

        </div>
      </div>
    );
  }

  // ===========================================================
  // MY ORDERS PAGE
  // ===========================================================
  return (
    <div className="min-h-screen bg-[#F9FAFB]">

      {/* =====================================================
          SIDEBAR
          ===================================================== */}
      <SidebarSection />

      {/* =====================================================
          MOBILE TOP BAR
          ===================================================== */}
      <MobileTopBar />

      {/* =====================================================
          MAIN AREA
          ===================================================== */}
      <div className="min-h-screen lg:ml-[260px]">

        {/* =================================================
            HEADER
            ================================================= */}
        <header
          className="
            h-[74px]
            bg-white
            border-b
            border-gray-100
            flex
            items-center
            justify-between
            px-5
            sm:px-8
            lg:px-10
            mt-16
            lg:mt-0
          "
        >

          {/* LEFT */}
          <div className="flex items-center gap-4">

            <button
              type="button"
              onClick={() => setCurrentPage("checkout")}
              aria-label="Back to checkout"
              className="
                w-10
                h-10
                rounded-full
                bg-[#F3F1FF]
                flex
                items-center
                justify-center
                text-gray-600
                hover:bg-[#EAE6FF]
                transition
                flex-shrink-0
              "
            >
              <ArrowLeft
                size={20}
                strokeWidth={2}
              />
            </button>

            <h1
              className="
                text-[26px]
                sm:text-[30px]
                font-semibold
                text-gray-900
              "
            >
              My Orders
            </h1>

          </div>

          {/* USER PROFILE */}
          <div
            className="
              flex
              items-center
              gap-3
              bg-white
              border
              border-gray-200
              rounded-full
              px-3
              py-1.5
              shadow-[0_2px_8px_rgba(0,0,0,0.06)]
            "
          >

            <div
              className="
                w-10
                h-10
                rounded-full
                bg-[#E9E4FF]
                border-2
                border-[#6C5CE7]
                flex
                items-center
                justify-center
                text-[#6C5CE7]
                font-semibold
                text-xs
                flex-shrink-0
              "
            >
              JD
            </div>

            <div className="hidden sm:block leading-tight">

              <p className="text-sm font-semibold text-gray-900">
                John Doe
              </p>

              <p className="text-[11px] text-gray-500">
                View Profile
              </p>

            </div>

            <span className="hidden sm:block text-gray-400 text-lg">
              ›
            </span>

          </div>

        </header>

        {/* =================================================
            MY ORDERS CONTENT
            ================================================= */}
        <main
          className="
            w-full
            max-w-[1200px]
            mx-auto
            px-4
            sm:px-6
            lg:px-6
            py-5
            sm:py-6
            pb-12
          "
        >

          {/* =================================================
              TABS
              ================================================= */}
          <div
            className="
              flex
              items-center
              gap-2
              overflow-x-auto
              pb-2
              mb-5
            "
          >

            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`
                  flex-shrink-0
                  px-5
                  py-2.5
                  rounded-full
                  text-[15px]
                  font-medium
                  transition-all
                  ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-[#6421C9] to-[#7C2FE8] text-white shadow-[0_4px_12px_rgba(109,40,217,0.25)]"
                      : "bg-[#F3F1FC] text-[#5D6680] hover:bg-[#EAE7F8]"
                  }
                `}
              >
                {tab}
              </button>
            ))}

          </div>

          {/* =================================================
              ORDER LIST
              ================================================= */}
          <div className="space-y-4">

            {filteredOrders.map((order) => (

              <div
                key={order.id}
                className="
                  bg-white
                  rounded-2xl
                  border
                  border-gray-100
                  shadow-[0_3px_14px_rgba(17,24,39,0.07)]
                  overflow-hidden
                "
              >

                {/* ===========================================
                    ORDER HEADER
                    =========================================== */}
                <div
                  className="
                    min-h-[78px]
                    px-4
                    sm:px-5
                    flex
                    items-center
                    justify-between
                    gap-4
                    border-b
                    border-gray-200
                  "
                >

                  {/* STATUS */}
                  <div className="flex flex-col gap-1.5">

                    <div
                      className={`
                        flex
                        items-center
                        gap-2
                        text-[15px]
                        font-medium
                        ${
                          order.status === "Pending"
                            ? "text-[#D49B00]"
                            : order.status === "In Progress"
                            ? "text-[#125ED6]"
                            : "text-[#00A878]"
                        }
                      `}
                    >

                      <div
                        className={`
                          w-8
                          h-8
                          rounded-full
                          flex
                          items-center
                          justify-center
                          ${
                            order.status === "Pending"
                              ? "bg-[#FFF7D8]"
                              : order.status === "In Progress"
                              ? "bg-[#EEF4FF]"
                              : "bg-[#E9FBF4]"
                          }
                        `}
                      >
                        {getStatusIcon(order.status)}
                      </div>

                      <span>
                        {order.status}
                      </span>

                    </div>

                    <p className="text-[13px] text-[#93A0B8]">
                      Placed on {order.date}
                    </p>

                  </div>

                  {/* ORDER NUMBER */}
                  <span
                    className="
                      text-[13px]
                      sm:text-sm
                      text-[#8B96AA]
                      whitespace-nowrap
                    "
                  >
                    Order #{order.id}
                  </span>

                </div>

                {/* ===========================================
                    ORDER BODY
                    =========================================== */}
                <div
                  className="
                    px-4
                    sm:px-5
                    py-5
                    sm:py-6
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >

                    {/* IMAGE */}
                    <div
                      className="
                        w-[90px]
                        h-[90px]
                        sm:w-[100px]
                        sm:h-[100px]
                        rounded-xl
                        overflow-hidden
                        bg-gray-100
                        flex-shrink-0
                      "
                    >
                      <img
                        src={order.image}
                        alt={order.title}
                        className="
                          w-full
                          h-full
                          object-cover
                        "
                      />
                    </div>

                    {/* DETAILS */}
                    <div className="flex-1 min-w-0">

                      <h2
                        className="
                          text-[19px]
                          sm:text-[21px]
                          font-semibold
                          text-gray-900
                          leading-tight
                        "
                      >
                        {order.title}
                      </h2>

                      <p
                        className="
                          text-[15px]
                          sm:text-base
                          text-[#60708C]
                          mt-1.5
                        "
                      >
                        {order.category}
                      </p>

                      {/* DUE DATE */}
                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          text-sm
                          sm:text-[15px]
                          text-[#718096]
                          mt-3
                        "
                      >
                        <Clock3
                          size={17}
                          strokeWidth={1.8}
                        />

                        <span>
                          Due: {order.dueDate}
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* =========================================
                      PROGRESS
                      ========================================= */}
                  {order.status === "In Progress" && (
                    <div className="mt-4">

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          mb-2
                        "
                      >

                        <span
                          className="
                            text-sm
                            sm:text-[15px]
                            text-[#68768E]
                          "
                        >
                          Progress
                        </span>

                        <span
                          className="
                            text-sm
                            sm:text-[15px]
                            font-medium
                            text-[#5D20C8]
                          "
                        >
                          {order.progress}%
                        </span>

                      </div>

                      <div
                        className="
                          w-full
                          h-2.5
                          rounded-full
                          bg-[#EEEAF9]
                          overflow-hidden
                        "
                      >

                        <div
                          className="
                            h-full
                            rounded-full
                            bg-gradient-to-r
                            from-[#5E20C7]
                            to-[#8435EC]
                          "
                          style={{
                            width: `${order.progress}%`,
                          }}
                        />

                      </div>

                    </div>
                  )}

                </div>

                {/* ===========================================
                    ORDER FOOTER
                    =========================================== */}
                <div
                  className="
                    mx-4
                    sm:mx-5
                    border-t
                    border-gray-200
                    min-h-[70px]
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >

                  {/* PRICE */}
                  <p
                    className="
                      text-[22px]
                      sm:text-2xl
                      font-bold
                      text-[#5D20C8]
                    "
                  >
                    {order.price}
                  </p>

                  {/* ACTION */}
                  <div>

                    {/* PENDING */}
                    {order.status === "Pending" && (
                      <button
                        type="button"
                        className="
                          px-5
                          py-2.5
                          rounded-full
                          bg-gradient-to-r
                          from-[#6421C9]
                          to-[#7C2FE8]
                          text-white
                          text-sm
                          font-semibold
                          shadow-[0_4px_12px_rgba(109,40,217,0.25)]
                          hover:from-[#551BB7]
                          hover:to-[#7027D8]
                          transition-all
                        "
                      >
                        Accept Order
                      </button>
                    )}

                    {/* IN PROGRESS */}
                    {order.status === "In Progress" && (
                      <button
                        type="button"
                        onClick={() =>
                          console.log(
                            "View order",
                            order.id
                          )
                        }
                        className="
                          px-5
                          py-2.5
                          rounded-full
                          bg-[#F3F1FC]
                          text-[#64708A]
                          text-sm
                          font-medium
                          hover:bg-[#EAE7F8]
                          transition
                        "
                      >
                        View Details
                      </button>
                    )}

                    {/* COMPLETED */}
                    {order.status === "Completed" && (
                      <button
                        type="button"
                        className="
                          px-5
                          py-2.5
                          rounded-full
                          bg-[#F3F1FC]
                          text-[#64708A]
                          text-sm
                          font-medium
                          hover:bg-[#EAE7F8]
                          transition
                        "
                      >
                        Leave Review
                      </button>
                    )}

                  </div>

                </div>

              </div>

            ))}

            {/* =================================================
                EMPTY STATE
                ================================================= */}
            {filteredOrders.length === 0 && (
              <div
                className="
                  bg-white
                  border
                  border-gray-200
                  rounded-2xl
                  p-12
                  text-center
                "
              >
                <p className="text-gray-500 text-base">
                  No orders found.
                </p>
              </div>
            )}

          </div>

        </main>

      </div>

    </div>
  );
}

export default OrdernowSD;