import { User } from '@/lib/types';
import Image from 'next/image';

interface UserInfoProps {
  user: User | undefined;
}
export default function UserInfo({ user }: UserInfoProps) {
  if (!user) return <p>Loading...</p>;
  return (
    <div className="flex flex-col items-center">
      <Image
        src={user.avatar_url}
        alt={user.name}
        width={120}
        height={120}
        className="rounded-full"
      />
      <h2 className="text-2xl font-semibold">{user.name}</h2>
      <p className="text-gray-500">@{user.login}</p>
      <p className="text-center">{user.bio}</p>
    </div>
  );
}
