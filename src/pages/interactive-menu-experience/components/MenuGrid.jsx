import React from 'react';
import MenuItem from './MenuItem';

const MenuGrid = ({ items, onAddToOrder }) => {
  if (!items || items?.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🍽️</span>
          </div>
          <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
            No items found
          </h3>
          <p className="text-muted-foreground font-body">
            Try adjusting your filters to see more menu items.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items?.map((item) => (
        <MenuItem
          key={item?.id}
          item={item}
          onAddToOrder={onAddToOrder}
        />
      ))}
    </div>
  );
};

export default MenuGrid;