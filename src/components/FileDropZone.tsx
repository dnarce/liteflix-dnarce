import { useRef } from 'react';
import { ClipIcon } from './icons';

interface FileDropZoneProps {
  onFileDrop: FileCallback;
}

export function FileDropZone({ onFileDrop }: FileDropZoneProps) {
  const dropzoneRef = useRef<HTMLDivElement>(null);

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileDrop(file);
    }
  };
  return (
    <div
      ref={dropzoneRef}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className='border-2 border-dashed border-white w-full h-32 flex flex-col items-center justify-center mt-12'
    >
      <p className='mb-2 flex items-center'>
        <span className='mr-2'>
          <ClipIcon />
        </span>
        Agregá un archivo o arrastralo y soltalo aquí
      </p>
      <input type='file' onChange={handleChange} className='hidden' />
    </div>
  );
}
