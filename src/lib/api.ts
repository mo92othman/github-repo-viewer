export const fetchUserData = async () => {
  const response = await fetch('https://api.github.com/users/JakeWharton');
  if (!response.ok) {
    throw new Error('Error fetching user data');
  }
  return response.json();
};
