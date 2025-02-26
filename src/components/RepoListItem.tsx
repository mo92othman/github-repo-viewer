import Link from 'next/link';

type RepoListItemProps = {
  name: string;
  description: string | null;
};

export default function RepoListItem({ name, description }: RepoListItemProps) {
  return (
    <li className="border p-4 rounded shadow transition transform hover:scale-105">
      <Link href={`/repo/${name}`}>
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-500">{description}</p>
        </div>
      </Link>
    </li>
  );
}
