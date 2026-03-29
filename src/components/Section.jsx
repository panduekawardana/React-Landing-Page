const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  children,
  costumPadding,
}) => {
  return (
    <div
      id={id}
      className={`relative ${costumPadding || `py-6 px-10 lg:py-16 xl:py-20 ${crosses ? `lg:py-24 xl:pt-48` : ``}`} ${className || ''}`}>
      {children}
      <div className="hidden absolute top-0 left-5 w-0 h-full bg-primary-bg pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0 h-full bg-primary-bg pointer-events-none md:block lg:left-7.5 xl:left-10" />
      
      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-[0.25px] bg-stone-700 ${crossesOffset || ''} pointer-events-none lg:block xl:left-10 right-10`}
          />
        </>
      )}
    </div>
  );
};

export default Section;
