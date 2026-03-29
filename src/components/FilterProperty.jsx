import { menuFilter } from '../constants/data_navigation';
import { propertyData } from '../constants/property_data';
import Button from './Button';

// Get unique locations from property data for filter options
const uniqueLocations = [...new Set(propertyData.map((item) => item.location))];

const FilterProperty = () => {
  return (
    <form
      className={`container flex items-center justify-center mx-auto relative py-2.5 px-4 rounded-full max-w-3xl bg-stone-100`}>
      {menuFilter.map((item) => {
        return (
          <div key={item.id} className="flex-1 px-4 font-manrope border-r last:border-r-0">
            <label className="block text-xs text-secondary-h">{item.lable}</label>
            <select className="w-full bg-transparent font-semibold tracking-tighter focus:outline-none">
              {item.lable === 'Location' ? (
                <>
                  <option>Select Location</option>
                  {uniqueLocations.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </>
              ) : (
                <option value="">{`Select ${item.lable}`}</option>
              )}
            </select>
          </div>
        );
      })}
      <div className="pl-4">
        <Button color={'green'} children={'Search'} href={'#search'} />
      </div>
    </form>
  );
};

export default FilterProperty;
