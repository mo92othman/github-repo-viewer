export const fetchUserData = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error('Error fetching user data');
  }
  return response.json();
};

export const fetchUserRepos = async (page: number, perPage: number) => {
  const response = await fetch(
    `https://api.github.com/users/JakeWharton/repos?page=${page}&per_page=${perPage}`,
  );
  if (!response.ok) {
    throw new Error('Error fetching repositories');
  }
  return response.json();
};

export async function fetchCommits(repoName: string) {
  const response = await fetch(
    `https://api.github.com/repos/JakeWharton/${repoName}/commits?per_page=5`,
  );
  if (!response.ok) throw new Error('Failed to fetch commits');
  return await response.json();
}

export async function fetchRepoDetails(repoName: string) {
  const response = await fetch(
    `https://api.github.com/repos/JakeWharton/${repoName}`,
  );

  if (!response.ok) throw new Error('Failed to fetch repo details');

  return response.json();
}
