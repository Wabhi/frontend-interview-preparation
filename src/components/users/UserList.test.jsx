import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserList from '../users/UserList';
import { useUsers } from '../hooks/useUsers';

// Mock the custom hook
jest.mock('../hooks/useUsers');