export const authRole = {
  Admin: ['admin'],
  User: ['user', 'admin'],
};

export const defaultUser = {
  displayName: 'John Alex',
  email: 'demo@example.com',
  token: 'access-token',
  role: 'user',
  photoURL: '/assets/images/avatar/A11.jpg',
};
export const allowMultiLanguage = process.env.REACT_APP_MULTILINGUAL === 'true';
export const fileStackKey = process.env.REACT_APP_FILESTACK_KEY;
export const initialUrl = process.env.REACT_APP_INITIAL_URL; // this url will open after login
