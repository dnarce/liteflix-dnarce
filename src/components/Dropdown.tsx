import classNames from 'classnames';
import { useState } from 'react';
import { ArrowDownIcon, CheckIcon } from './icons';

interface DropdownProps {
  items: string[];
  onSelectItem?: Function;
}
export function Dropdown({ items, onSelectItem = () => {} }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <button
        className='inline-flex items-center justify-center align-baseline'
        onClick={toggleDropdown}
      >
        <span className='mr-2 py-0'>{selectedItem}</span> <ArrowDownIcon />
      </button>
      {isOpen && (
        <div className='absolute z-10 p-6 w-full bg-[#242424] mt-2'>
          <div className='w-[12px] h-[12px] bg-[#242424] rotate-45 absolute -top-1 right-4 invisible lg:visible'></div>
          <ul>
            {items.map((itemText, index) => {
              const isSelected = itemText === selectedItem;
              const itemClasses = classNames(
                'cursor-pointer text-left flex items-center justify-between my-2',
                {
                  'font-bold': isSelected,
                  'font-light': !isSelected,
                }
              );
              return (
                <li
                  className={itemClasses}
                  key={index}
                  onClick={() => {
                    setSelectedItem(itemText);
                    toggleDropdown();
                    handleItemClick(itemText);
                    onSelectItem(itemText);
                  }}
                >
                  <span>{itemText}</span>
                  {isSelected && (
                    <span>
                      <CheckIcon />
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}