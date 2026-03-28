import Button from './Button';
import {navigation} from '../constants/data_navigation.js';

const Navbar = () => {
  return (
    <div className="container fixed top-0 left-0 right-0 z-50 flex w-full max-w-full p-4 border-b border-b-primary-bg/20 bg-secondary-bg lg:px-8 md:px-4">
      <div className="flex w-full items-center justify-between">
        {/* Logo */}
        <a href="#home" className="inline-flex items-center">
          <span className="text-xl font-semibold tracking-tight">
            Homifest Industry
          </span>
        </a>

        {/* Menu */}
        <div className="hidden lg:block">
          <div className="flex items-center gap-4">
            {navigation.map(item => (
              <a id={item.id} href={item.url} className="font-semibold font-manrope hover:text-secondary-h/80 cursor-pointer text-sm px-2 py-1.5 tracking-wide">
                {item.title}
              </a>
            ))}
          </div>
        </div>

        {/* Button Action login / register */}
        <div className="hidden items-center gap-3 md:flex">
          <Button href={'#logon'} children={'Login'} color={'gray'} />
          <Button href="#register" children={'Register'} color={'blue'} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
