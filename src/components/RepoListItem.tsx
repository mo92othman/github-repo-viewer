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
      <li className="border p-4 rounded shadow transition transform hover:scale-105 min-h-[220px] flex items-center justify-center text-center">
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
