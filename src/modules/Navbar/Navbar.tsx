import { useDispatch } from 'react-redux';
import { toggleTheme } from 'store/user/user.slice';
import NavbarContainer from './Navbar.styles';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <NavbarContainer>
      <a>Github</a>
      <h1>My Next Boilerplate</h1>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </NavbarContainer>
  );
};

export default Navbar;
