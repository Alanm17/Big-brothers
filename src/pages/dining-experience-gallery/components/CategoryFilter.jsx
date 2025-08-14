import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-subtle">
      <h3 className="text-lg font-heading font-semibold text-foreground mb-4 flex items-center">
        <Icon name="Filter" size={20} className="text-primary mr-2" />
        Gallery Categories
      </h3>
      <div className="flex flex-wrap gap-2">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => onCategoryChange(category?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-body font-medium transition-all duration-200 ${
              activeCategory === category?.id
                ? 'bg-primary text-primary-foreground shadow-brand'
                : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
            }`}
          >
            <Icon 
              name={category?.icon} 
              size={16} 
              className={activeCategory === category?.id ? 'text-primary-foreground' : 'text-muted-foreground'}
            />
            <span>{category?.name}</span>
            <span className={`text-xs px-2 py-1 rounded-full ${
              activeCategory === category?.id 
                ? 'bg-primary-foreground/20 text-primary-foreground' 
                : 'bg-muted-foreground/20 text-muted-foreground'
            }`}>
              {category?.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;