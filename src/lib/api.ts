export const fetchUserData = async () => {
  const response = await fetch('https://api.github.com/users/JakeWharton');
  if (!response.ok) {
    throw new Error('Error fetching user data');
  }
  return response.json();
};

export const fetchUserRepos = async () => {
  const response = await fetch(
    'https://api.github.com/users/JakeWharton/repos',
  );
  if (!response.ok) {
    throw new Error('Error fetching repositories');
  }
  return response.json();
};
