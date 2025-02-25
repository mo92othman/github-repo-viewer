type RepoListItemProps = {
  name: string;
};
export default function RepoListItem({ name }: RepoListItemProps) {
  return <li>Repository Name: {name}</li>;
}
