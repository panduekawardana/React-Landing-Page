import Section from './Section';
import { propertyData } from '../constants/property_data';
import Button from './Button';

const CategoryFilter = () => {
  const categories = [...new Set(propertyData.map((item) => item.type))];

  return (
    <Section>
      <div className="flex items-center justify-center px-4 py-2 gap-2 overflow-auto">
        {categories.map((category) => {
          return <Button key={category}>{category}</Button>;
        })}
      </div>
    </Section>
  );
};

export default CategoryFilter;
