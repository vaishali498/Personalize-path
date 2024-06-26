"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";

 function UserKnowledge() {
  const router = useRouter();
  const languageInputRef = useRef(null);
  const frameworkInputRef = useRef(null);

  const inputClass =
    "w-full p-4 bg-gray-100 dark:bg-neutral-900 text-black dark:text-white border-2 border-gray-300 dark:border-neutral-800 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-300 transition-colors";

    function handleClick() {
      const languages = languageInputRef.current.value;
      // Validation logic can be added here if needed
    
      sessionStorage.setItem("userLanguages", languages);
    
      router.push("/result");
    }

  return (
    <main
      className=" max-w-7xl mx-auto px-8 sm:px-16 w-screen"
      id="mainContent"
    >
      <div className="flex flex-col items-center h-full gap-10 justify-center">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
          Tell us what you know
        </h1>

        <div className="flex flex-col max-w-3xl w-full">
          <label className="text-gray-600 dark:text-gray-400 text-xl font-semibold mb-2">
            What languages you know?
          </label>
          <input
            ref={languageInputRef}
            type="text"
            className={inputClass}
            placeholder="Separated by comma ( , ) (eg. Python, Javascript, C++)"
          />

          
          
        </div>

        <button
          onClick={handleClick}
          className="px-12 py-4 rounded-lg text-white dark:text-black bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-gray-200 font-bold active:scale-[0.98] active:duration-200 transition"
        >
          Get Path
        </button>
      </div>
    </main>
  );
}
export default  UserKnowledge;
