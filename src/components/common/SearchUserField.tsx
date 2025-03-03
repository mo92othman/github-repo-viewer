'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';

export default function SearchUserField() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      router.push(`/user/${username}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder=" Or search another user ..."
        className="px-4 border rounded-lg text-blue-950"
      />
      <button
        type="submit"
        className=" flex justify-center items-center  gap-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Search
        <FaSearch />
      </button>
    </form>
  );
}
