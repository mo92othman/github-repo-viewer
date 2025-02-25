type RepoDetailProps = {
  params: { name: string };
};

export default function RepoDetailPage({ params }: RepoDetailProps) {
  return (
    <div>
      <h1>Repo Detail: {params.name}</h1>
    </div>
  );
}
