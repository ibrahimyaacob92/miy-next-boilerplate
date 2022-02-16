import { ThemeName } from 'styles/themes';
import { StateMeta } from 'utils/types';

interface User {
  preference: {
    theme: ThemeName;
  };
}

export default User;
