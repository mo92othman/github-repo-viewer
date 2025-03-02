export const fetchUserData = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('User does not exist');
    }
    throw new Error('Error fetching user data');
  }
  return response.json();
};

export const fetchUserRepos = async (
  username: string,
  page: number,
  perPage: number,
) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`,
  );
  if (!response.ok) {
    throw new Error('Error fetching repositories');
  }
  return response.json();
};

export async function fetchCommits(username: string, repoName: string) {
  const response = await fetch(
    `https://api.github.com/repos/${username}/${repoName}/commits?per_page=5`,
  );
  if (!response.ok) throw new Error('Failed to fetch commits');
  return await response.json();
}

export async function fetchRepoDetails(username: string, repoName: string) {
  const response = await fetch(
    `https://api.github.com/repos/${username}/${repoName}`,
  );

  if (!response.ok) throw new Error('Failed to fetch repo details');

  return response.json();
}
