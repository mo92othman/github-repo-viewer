import RepoListItem from './RepoListItem';

export default function RepoList() {
  const repoListNames = ['Repo 1', 'Repo 2', 'Repo 3'];
  return (
    <div>
      <h1>Repo List</h1>
      <ul className="grid grid-cols-3 gap-6 mt-4">
        {repoListNames.map((name) => (
          <RepoListItem key={name} name={name} />
        ))}
      </ul>
    </div>
  );
}
