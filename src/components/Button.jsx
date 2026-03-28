const Button = ({ color, children, onClick, href, width }) => {

   const colorVariants = {
      primary: 'bg-primary-bg text-primary-h hover:bg-primary-bg/90',
      blue: 'bg-blue text-white hover:bg-blue/90',
      gray: 'bg-stone text-white hover:bg-stone/90',
      outline: 'border border-primary-bg text-primary-bg hover:bg-primary-bg hover:text-white',
   };

   const selectColors = colorVariants[color] || colorVariants.primary;

   const classes = `flex px-4 py-1.5 rounded-full transition-color diration-200 ${width || 'px-2'} ${selectColors}`;

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
