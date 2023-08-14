import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsYoutube, BsSearch } from "react-icons/bs";

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/videos/${search}`);
  };
  useEffect(() => {
    setSearch(keyword || "");
  }, [keyword]);
  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <div>
        <Link to="/" className="flex items-center">
          <BsYoutube className="text-4xl text-brand" />
          <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="search..."
          value={search}
          onChange={e => {
            setSearch(e.target.value);
          }}
        />
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
