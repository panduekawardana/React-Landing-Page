import Button from './Button';

const Navbar = () => {
  return (
    <div className="container flex bg-transparent w-full max-w-full py-3.5 px-4 lg:px-8 md:px-4">
      <div className="flex w-full items-center justify-between">
        {/* Logo */}
        <a href="#home" className="inline-flex items-center ">
          {/* <img src={logo} width={50} height={50} /> */}
          <span className="text-xl font-semibold tracking-tight">
            Homifest Industry
          </span>
        </a>

        {/* Menu */}
        <div className="hidden lg:block">
         <div className='flex items-center gap-4'>
            <a className='font-semibold hover:text-secondary-h/80 cursor-pointer text-sm px-2 py-1.5 tracking-wide'>Product</a>
            <a className='font-semibold hover:text-secondary-h/80 cursor-pointer text-sm px-2 py-1.5 tracking-wide'>Service</a>
            <a className='font-semibold hover:text-secondary-h/80 cursor-pointer text-sm px-2 py-1.5 tracking-wide'>Quality</a>
            <a className='font-semibold hover:text-secondary-h/80 cursor-pointer text-sm px-2 py-1.5 tracking-wide'>Pricing</a>
            <a className='font-semibold hover:text-secondary-h/80 cursor-pointer text-sm px-2 py-1.5 tracking-wide'>Contact</a>
         </div>
        </div>

        {/* Button Action login / register */}
        <div className='hidden items-center gap-3 md:flex'>
          <Button href={'#logon'} children={'Login'} color={'gray'} />
          <Button children={'Register'} color={'blue'} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
