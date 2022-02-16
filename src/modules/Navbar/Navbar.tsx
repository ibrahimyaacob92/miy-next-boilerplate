import { GitHubIcon } from 'components/Icons';
import { useDispatch } from 'react-redux';
import { toggleTheme } from 'store/user/user.slice';
import NavbarContainer from './Navbar.styles';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <NavbarContainer>
      <a href="https://github.com/ibrahimyaacob92/my-next-boilerplate">
        <GitHubIcon size={35} />
      </a>
      <h1>Rush Next Boilerplate</h1>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </NavbarContainer>
  );
};

export default Navbar;
