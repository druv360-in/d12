import React from "react"

function Component132() {
    return (
        <div className="max-w-4xl mx-auto my-10 p-8 bg-[#0d1117] border border-gray-800 rounded-3xl space-y-12">

    <div className="max-w-sm mx-auto bg-gray-100 p-4 rounded-2xl">

      <div className="flex flex-col items-center mb-4">
        <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center text-xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text-icon lucide-file-text"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
        </div>
        <p className="text-gray-400 text-sm mt-2">
          Tell us about your service
        </p>
      </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-asterisk-icon lucide-asterisk"><path d="M12 6v12"/><path d="M17.196 9 6.804 15"/><path d="m6.804 9 10.392 6"/></svg>
      <input
        type="text"
        placeholder="I will create professional videos"
        className="w-full bg-gray-600 text-white p-3 rounded-lg mb-4 outline-none"
      />
      <p className="text-right text-xs text-gray-400 mb-4">0/80</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-asterisk-icon lucide-asterisk"><path d="M12 6v12"/><path d="M17.196 9 6.804 15"/><path d="m6.804 9 10.392 6"/></svg>
      <select className="w-full bg-gray-600 text-white p-3 rounded-lg mb-4">
        <option>Select a category</option>
      </select>

         <select className="w-full bg-gray-600 text-white p-3 rounded-lg mb-4">
        <option>Select subcategory</option>
      </select>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-asterisk-icon lucide-asterisk"><path d="M12 6v12"/><path d="M17.196 9 6.804 15"/><path d="m6.804 9 10.392 6"/></svg>
      <textarea
        rows="5"
        placeholder="Describe your service in detail. What makes it unique? What will you deliver? What experience do you have?"
        className="w-full bg-gray-600 text-white p-3 rounded-lg outline-none"
      ></textarea>

      <p className="text-right text-xs text-gray-400 mt-1 mb-4">0/1200</p>

      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-2">
          Add tags (max 5)
        </p>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="e.g. video editing"
            className="flex-1 bg-gray-600 text-white p-3 rounded-lg outline-none"
          />

          <button className="bg-cyan-400 text-white px-4 rounded-lg">
            Add
          </button>
        </div>
      </div>
    </div>
 
     <div className="max-w-sm mx-auto bg-white p-5 space-y-3  rounded-2xl shadow">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
          $
        </div>
        <p className="text-sm text-gray-400">
          Set prices for Basic, Standard, and Premium tiers
        </p>
      </div>

      <div className="border border-blue-200 rounded-2xl p-4">


  <div className="mb-4">
    <div className="bg-blue-50 w-fit px-4 py-2 rounded-3xl">
      <span className="text-blue-500 font-medium">Basic</span>
    </div>
  </div>


  <div className="mb-4">
    <label className="text-sm text-gray-500 flex items-center gap-1 mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-asterisk-icon lucide-asterisk"><path d="M12 6v12"/><path d="M17.196 9 6.804 15"/><path d="m6.804 9 10.392 6"/></svg>
      Price ($)
    </label>

    <input
      type="number"
      defaultValue="50"
      className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none"
    />
  </div>


  <div className="mb-4">
    <label className="text-sm text-gray-500 block mb-2">
      Delivery Time
    </label>

    <select className="w-full bg-slate-800 text-white p-3 rounded-lg">
      <option>3 days</option>
      <option>5 days</option>
      <option>7 days</option>
    </select>
  </div>


  <div className="mb-4">
    <label className="text-sm text-gray-500 block mb-2">
      Revisions
    </label>

    <input
      type="number"
      defaultValue="1"
      className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none"
    />
  </div>

  <div>
    <div className="flex justify-between items-center mb-2">
      <label className="text-sm text-gray-500">
        Included Features
      </label>

      <button className="text-cyan-500 text-sm font-medium">
        + Add
      </button>
    </div>

    <input
      type="text"
      placeholder="Feature description"
      className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none"
    />
     </div>

    </div>
 
        <div className="border border-pink-300 rounded-2xl p-4">

  <div className="mb-4">
    <div className="bg-pink-200 w-fit px-4 py-2 rounded-3xl">
      <span className="text-violet-700 font-medium">Standard</span>
    </div>
  </div>

  <div className="mb-4">
    <label className="text-sm text-gray-500 flex items-center gap-1 mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-asterisk-icon lucide-asterisk"><path d="M12 6v12"/><path d="M17.196 9 6.804 15"/><path d="m6.804 9 10.392 6"/></svg>
      Price ($)
    </label>

    <input
      type="number"
      defaultValue="50"
      className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none"
    />
  </div>

  <div className="mb-4">
    <label className="text-sm text-gray-500 block mb-2">
      Delivery Time
    </label>

    <select className="w-full bg-slate-800 text-white p-3 rounded-lg">
      <option>3 days</option>
      <option>5 days</option>
      <option>7 days</option>
    </select>
  </div>

  <div className="mb-4">
    <label className="text-sm text-gray-500 block mb-2">
      Revisions
    </label>

    <input
      type="number"
      defaultValue="1"
      className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none"
    />
  </div>

  <div>
    <div className="flex justify-between items-center mb-2">
      <label className="text-sm text-gray-500">
        Included Features
      </label>

      <button className="text-cyan-500 text-sm font-medium">
        + Add
      </button>
    </div>

    <input
      type="text"
      placeholder="Feature description"
      className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none"
    />
  </div>
   </div>

             <div className="border border-amber-300 rounded-2xl p-4">

  <div className="mb-4">
    <div className="bg-orange-400 w-fit px-4 py-2 rounded-3xl">
      <span className="text-orange-700 font-medium">Premiums</span>
    </div>
  </div>

  <div className="mb-4">
    <label className="text-sm text-gray-500 flex items-center gap-1 mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-asterisk-icon lucide-asterisk"><path d="M12 6v12"/><path d="M17.196 9 6.804 15"/><path d="m6.804 9 10.392 6"/></svg>
      Price ($)
    </label>

    <input
      type="number"
      defaultValue="50"
      className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none"
    />
  </div>

  <div className="mb-4">
    <label className="text-sm text-gray-500 block mb-2">
      Delivery Time
    </label>

    <select className="w-full bg-slate-800 text-white p-3 rounded-lg">
      <option>3 days</option>
      <option>5 days</option>
      <option>7 days</option>
    </select>
  </div>

  <div className="mb-4">
    <label className="text-sm text-gray-500 block mb-2">
      Revisions
    </label>

    <input
      type="number"
      defaultValue="1"
      className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none"
    />
  </div>

  <div>
    <div className="flex justify-between items-center mb-2">
      <label className="text-sm text-gray-500">
        Included Features
      </label>

      <button className="text-cyan-500 text-sm font-medium">
        + Add
      </button>
    </div>

    <input
      type="text"
      placeholder="Feature description"
      className="w-full bg-gray-700 text-white p-3 rounded-lg outline-none"
    />
  </div>
   </div>
    </div>

        <div className="max-w-xs bg-white rounded-2xl p-4 shadow-md">

      <div className="flex items-start gap-3 mb-5">
        <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">
          <span className="text-white text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-icon lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg></span>
        </div>

        <p className="text-xs text-gray-400 leading-5">
          This is the main image buyers
          <br />
          see first
        </p>
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-2xl h-52 flex flex-col items-center justify-center">
     
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-3"
        >
          <path d="M12 3v12" />
          <path d="m7 8 5-5 5 5" />
          <path d="M5 21h14" />
        </svg>

        <p className="text-gray-500 font-medium text-sm">
          Upload cover image
        </p>

        <p className="text-xs text-gray-500 mt-1">
          PNG, JPG up to 10MB
        </p>
      </div>

    </div>

          <div className="max-w-xs bg-white rounded-2xl p-4 shadow-md">

      <div className="flex items-start gap-3 mb-5">
        <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">
          <span className="text-white text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload-icon lucide-upload"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg></span>
        </div>

        <p className="text-xs text-gray-400 leading-5">
          Show samples of your work (up to 5 images)
        </p>
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-2xl h-52 flex flex-col items-center justify-center">
        

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-3"
        >
          <path d="M12 3v12" />
          <path d="m7 8 5-5 5 5" />
          <path d="M5 21h14" />
        </svg>

        <p className="text-gray-500 font-medium text-sm">
          Add images
        </p>

      </div>

    </div>

    <div className="w-72 bg-white p-4 rounded-2xl shadow-md">

      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        </div>

        <p className="text-xs text-gray-400 leading-5">
          What do you need from
          <br />
          buyers to get started?
        </p>
      </div>

      <textarea
        rows="5"
        placeholder="E.g. Please provide the raw video footage, brand guidelines, preferred color scheme, and any specific editing references you'd like me to follow."
        className="w-full bg-slate-700 text-white text-sm p-4 rounded-xl resize-none outline-none placeholder:text-gray-400"
      />
    </div>


        </div>
    )
}

export default Component132;
