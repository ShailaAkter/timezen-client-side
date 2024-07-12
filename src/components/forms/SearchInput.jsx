import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { useSearch } from "../../hooks/searchAuth";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({ isSearchBar, setIsSearchBar }) => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted"); // Debug log

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/product/search-product/${values.keyword}`
      );
      setValues({ ...values, searchedProducts: data });
      console.log(data)
      navigate("/search-results");
      setIsSearchBar(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsSearchBar(false);
    }
  };

  useEffect(() => {
    if (isSearchBar) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isSearchBar]);

  return (
    <motion.div
      useRef={searchRef}
      className="absolute w-[100%] sm:w-[500px] h-[50px] z-100 flex justify-left items-center"
      initial={{ y: -25, x: -250, opacity: 0 }}
      animate={{ y: -28, opacity: 1, transition: { duration: 0.2 } }}
    >
      <form role="search" onSubmit={handleSubmit} className="flex items-center">
        <input
          className="px-3 py-2 text-sm border-2 border-slate-200 rounded outline-slate-400 text-slate-700 font-semibold w-full"
          type="search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
          placeholder="Search Watch"
        />
        <button
          type="submit"
          className=""
        >
        </button>
      </form>
    </motion.div>
  );
};

export default SearchInput;
