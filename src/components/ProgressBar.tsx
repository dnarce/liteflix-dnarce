import classNames from 'classnames';

interface ProgressBarProps {
  progress: number;
  color: string;
}

export function ProgressBar({
  progress,
  color = 'bg-primary',
}: ProgressBarProps) {
  const probressClasses = classNames('z-20 h-[8px]', color);
  return (
    <div className='w-full bg-white/50 h-[4px] flex items-center'>
      <div className={probressClasses} style={{ width: `${progress}%` }}></div>
    </div>
  );
}
