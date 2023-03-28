import { PlusIcon } from './icons';

export function EmptyCard() {
  return (
    <div className='group inline-block mb-4 mr-4 p-4'>
      <div className='relative flex items-center justify-center w-[327px] h-[172px] md:w-[220px] md:h-[146px] bg-dark-grey rounded cursor-pointer'>
        <div className='flex flex-col items-center justify-center inset-0'>
          <h1 className='absolute bottom-3.5 text-center w-full text-ellipsis overflow-hidden whitespace-nowrap px-2'>
            Agregada una película.
          </h1>
        </div>
      </div>
    </div>
  );
}
