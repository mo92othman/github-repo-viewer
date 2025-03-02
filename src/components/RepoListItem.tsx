import Link from 'next/link';

type RepoListItemProps = {
  username: string;
  name: string;
  description: string | null;
};

export default function RepoListItem({
  username,
  name,
  description,
}: RepoListItemProps) {
  return (
    <Link href={`/repo/${username}/${name}`} className="w-full">
      <li className="border p-4 rounded-2xl shadow transition transform hover:scale-105 min-h-[220px] flex items-center justify-center text-center hover:bg-gray-300 dark:hover:bg-gray-950 ">
        <div className="w-full">
          <h2 className="text-xl font-semibold truncate w-full overflow-hidden whitespace-nowrap">
            {name}
          </h2>
          <p className="text-gray-400">{description}</p>
        </div>
      </li>
    </Link>
  );
}
