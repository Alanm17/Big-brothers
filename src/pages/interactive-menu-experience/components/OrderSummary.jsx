import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OrderSummary = ({ orderItems, onRemoveItem, onUpdateQuantity, onCheckout }) => {
  const totalPrice = orderItems?.reduce((sum, item) => sum + (item?.price * item?.quantity), 0);

  if (orderItems?.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-card rounded-xl shadow-brand border border-border z-40">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="font-heading font-bold text-foreground">
            Your Order
          </h3>
          <div className="flex items-center space-x-2">
            <Icon name="ShoppingBag" size={18} className="text-primary" />
            <span className="text-sm font-body font-semibold text-primary">
              {orderItems?.length} items
            </span>
          </div>
        </div>
      </div>
      <div className="max-h-64 overflow-y-auto">
        {orderItems?.map((item) => (
          <div key={`${item?.id}-${item?.type || 'food'}`} className="p-4 border-b border-border last:border-b-0">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-body font-semibold text-foreground text-sm">
                {item?.name}
              </h4>
              <button
                onClick={() => onRemoveItem(item?.id, item?.type)}
                className="text-muted-foreground hover:text-error transition-colors duration-200"
              >
                <Icon name="X" size={16} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => onUpdateQuantity(item?.id, item?.type, Math.max(0, item?.quantity - 1))}
                  className="w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <Icon name="Minus" size={12} />
                </button>
                <span className="font-body font-medium text-foreground min-w-[20px] text-center">
                  {item?.quantity}
                </span>
                <button
                  onClick={() => onUpdateQuantity(item?.id, item?.type, item?.quantity + 1)}
                  className="w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <Icon name="Plus" size={12} />
                </button>
              </div>
              <span className="font-body font-semibold text-foreground">
                ${(item?.price * item?.quantity)?.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-border">
        <div className="flex items-center justify-between mb-4">
          <span className="font-heading font-bold text-foreground">
            Total:
          </span>
          <span className="font-heading font-bold text-primary text-lg">
            ${totalPrice?.toFixed(2)}
          </span>
        </div>

        <Button
          variant="default"
          fullWidth
          onClick={onCheckout}
          iconName="CreditCard"
          iconPosition="left"
          className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-brand"
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default OrderSummary;