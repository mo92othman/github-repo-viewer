type RepoListItemProps = {
  name: string;
  description: string | null;
};

export default function RepoListItem({ name, description }: RepoListItemProps) {
  return (
    <li className="p-4 border rounded-lg shadow">
      <h2 className="font-bold">{name}</h2>
      <p className="text-gray-500">{description}</p>
    </li>
  );
}
