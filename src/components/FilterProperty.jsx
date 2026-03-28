import Button from "./Button";

const FilterProperty = () => {
  return (
    <div
      className={`container flex items-center justify-center mx-auto relative py-4 px-6 h-[4.70rem] rounded-full border max-w-4xl`}>
      <div className="flex flex-row items-center">
        <div className="">
          <div className="flex">Okederh</div>
          <div>Okederh</div>
        </div>
        <div>
          <div>Okederh</div>
          <div>Okederh</div>
        </div>
        <div>
          <div>Okederh</div>
          <div>Okederh</div>
        </div>
        <div>
         <Button>Search</Button>
        </div>
      </div>
    </div>
  );
};

export default FilterProperty;
