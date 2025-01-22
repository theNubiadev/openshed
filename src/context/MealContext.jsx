import {useState, createContext} from 'react';
export const Mealcontext = createContext();

function MealContext(props) {
    
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (item) => {
        if (
          cartItems.length > 0 &&
          cartItems[0].restaurantId !== item.restaurantId
        ) {
          if (
            !confirm(
              "Adding items from a different restaurant will clear your current cart. Continue?"
            )
          ) {
            return;
          }       setCartItems([{ ...item, quantity: 1 }]);
        } else {
          setCartItems((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if (existing) {
              return prev.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              );
            }
            return [...prev, { ...item, quantity: 1 }];
          });
        }
      };

      const removeFromCart = (itemId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== itemId));
      };
      const cartTotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );  
      const value = {
        addToCart,
        removeFromCart,
        cartTotal,
        cartItems,
        setCartItems,
        isCartOpen,
        setIsCartOpen,
      }
  return (
   <MealContext.Provider value={value} > {props.children}
    </MealContext.Provider>
  )
}

export default MealContext