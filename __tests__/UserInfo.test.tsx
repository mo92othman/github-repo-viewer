import { render } from '@testing-library/react';
import UserInfo from '@/components/UserInfo';
import { User } from '@/lib/types';

// Mock data for testing
const mockUser: User = {
  login: 'jakewharton',
  avatar_url: 'https://avatars.githubusercontent.com/u/66577?v=4',
  bio: 'Android developer',
  name: 'Jake Wharton',
};

describe('UserInfo Component', () => {
  it('should render without crashing', () => {
    render(<UserInfo user={mockUser} />);
    expect(true).toBe(true);
  });
});
