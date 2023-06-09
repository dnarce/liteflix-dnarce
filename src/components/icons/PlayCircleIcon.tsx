interface PlayCircleIconProps {
  size?: string;
}
const PlayCircleIcon = ({ size = 'normal' }: PlayCircleIconProps) => {
  if (size === 'large') {
    return (
      <svg
        width='48'
        height='48'
        viewBox='0 0 48 48'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          cx='24'
          cy='24'
          r='23.5'
          fill='#242424'
          fillOpacity='0.5'
          stroke='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M31.9783 24.324L19.2002 15.6V32.4L31.9783 24.324Z'
          stroke='white'
        />
      </svg>
    );
  }
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='12'
        cy='12'
        r='11.5'
        fill='#242424'
        fillOpacity='0.5'
        stroke='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.9891 12.162L9.6001 7.79993V16.1999L15.9891 12.162Z'
        stroke='white'
      />
    </svg>
  );
};

export default PlayCircleIcon;
