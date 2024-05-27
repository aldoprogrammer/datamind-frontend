import React, { Children } from 'react';

function CustomButton({children, onClick}) {
  return (
    <button 
      onClick={onClick}
      className="text-white bg-blue-700 hover:bg-blue-800 
       font-medium 
      rounded-lg text-sm px-5 py-2.5 me-2 mb-2
       dark:bg-blue-600 dark:hover:bg-blue-700 
       focus:outline-none 
       flex items-center justify-center
       "
    >
    {children}
    </button>
  );
}

export default CustomButton;
