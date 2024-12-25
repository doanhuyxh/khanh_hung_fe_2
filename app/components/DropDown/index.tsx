import { useState, useEffect } from 'react';

interface DropdownItem {
    icon: React.ReactNode;
    label?: string;
    onClick: () => void;
    className?: string;
}

export default function Dropdown({ 
    icon, 
    items,
    className
}: { 
    icon: React.ReactNode; 
    items: DropdownItem[];
    className?: string;
}) {
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

    const handleClickOutside = (event: MouseEvent) => {
        if (!event.target || !(event.target as Element).closest('.dropdown-container')) {
            setIsOpen(false);
        }
    };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={`dropdown-container relative inline-block ${className}`}>
      <button className="px-4 py-2 rounded-md hover:bg-red-100" onClick={toggleDropdown}>
        {icon}
      </button>

        {isOpen && (
        <div className="absolute top-8 translate-y-[0%] mt-2 w-auto bg-white rounded-md shadow-2xl z-1000">
          {items.map((item, index) => (
            <button
              key={index}
              className={`flex items-center w-full px-4 py-2 text-left gap-2 hover:bg-gray-100 text-nowrap ${item.className}`}
              onClick={item.onClick}
            >
              <span className={`mr-2 text-nowrap`}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
