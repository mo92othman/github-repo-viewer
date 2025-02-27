import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserInfo from '@/components/UserInfo';
import { User } from '@/lib/types';

// Mock data for testing
const mockUser: User = {
  login: 'jakewharton',
  avatar_url: 'https://avatars.githubusercontent.com/u/66577?v=4',
  name: 'Jake Wharton',
};

describe('UserInfo Component', () => {
  it('should render user information correctly', () => {
    render(<UserInfo user={mockUser} />);

    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(screen.getByText(`@${mockUser.login}`)).toBeInTheDocument();
    expect(screen.getByAltText(mockUser.name)).toBeInTheDocument();
  });
});
