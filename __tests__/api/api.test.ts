import { fetchUserData } from '@/lib/api';

// Mock the `fetch` function globally
global.fetch = jest.fn();

describe('API Functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch user data successfully', async () => {
    const mockUser = { login: 'JakeWharton', avatar_url: 'https://avatar.com' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockUser,
    });

    const result = await fetchUserData();
    expect(result).toEqual(mockUser);
    expect(fetch).toHaveBeenCalledWith(
      'https://api.github.com/users/JakeWharton',
    );
  });
});
