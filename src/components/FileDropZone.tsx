import { useRef } from 'react';
import { ClipIcon } from './icons';

interface FileDropZoneProps {
  onFileDrop: FileCallback;
}

export function FileDropZone({ onFileDrop }: FileDropZoneProps) {
  const dropzoneRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      onFileDrop(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileDrop(file);
    }
  };
  return (
    <div
      className='border-2 border-dashed border-white w-full min-h-[64px] flex flex-col items-center justify-center mt-[60px] cursor-pointer'
      ref={dropzoneRef}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <p className='flex items-center'>
        <span className='mr-2'>
          <ClipIcon />
        </span>
        Agregá un archivo o arrastralo y soltalo aquí
      </p>
      <input
        type='file'
        onChange={handleChange}
        className='hidden'
        ref={fileInputRef}
      />
    </div>
  );
}
