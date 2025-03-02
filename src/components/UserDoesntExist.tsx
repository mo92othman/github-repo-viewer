// 'use client';
import Image from 'next/image';

export default function UserDoesntExist() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center space-y-4">
      <Image
        src={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfmq3F5jLMCd06l2ive4j-H-R0YuhrzRF9fh3vOB387CQd44iYrVWY0UR-fJmmYLbYtFc&usqp=CAU'
        }
        alt="User does not exist"
        width={200}
        height={200}
        className="rounded-full"
      />
      <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
        User does not exist
      </h1>
    </div>
  );
}
