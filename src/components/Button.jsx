const Button = ({ color, children, onClick, href, width }) => {

   const colorVariants = {
      primary: 'bg-primary-bg text-primary-h hover:bg-primary-bg/90',
      blue: 'bg-blue text-white hover:bg-blue/90',
      gray: 'bg-stone text-white hover:bg-stone/90',
      green: 'bg-green-700 text-white hover:bg-green-600/90',
      outline: 'border border-primary-bg text-primary-bg hover:bg-primary-bg hover:text-white',
   };

   const selectColors = colorVariants[color] || colorVariants.primary;

   const classes = `inline-flex items-center justify-center text-center px-4 py-1.5 rounded-full transition-colors duration-200 ${width || ''} ${selectColors}`;

   const renderButton = () => (
      <button className={classes} onClick={onClick}>
         <span className="button">{children}</span>
      </button>
   )

   const renderLink = () => (
      <a href={href} className={classes}>
         <span className="button">{children}</span>
      </a>
   )

  return href ? renderLink() : renderButton();
};

export default Button;
