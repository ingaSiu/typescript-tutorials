import Button from './Button';

type CategoryPillProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

const CategoryPills = ({ categories, selectedCategory, onSelect }: CategoryPillProps) => {
  return (
    <div className="overflow-x-hidden relative">
      <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => onSelect(category)}
            variant={selectedCategory === category ? 'dark' : 'default'}
            className="py-1 px-3 rouded-lg whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryPills;
