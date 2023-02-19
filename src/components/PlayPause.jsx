import {FaPauseCircle, FaPlayCircle} from 'react-icons/fa'
 
const PlayPause = ({isPlaying, handlePause, handlePlay, activeSong, song}) => (isPlaying && activeSong?.title === song.title ? 
  (
    <FaPauseCircle
    size={35} className='text-gray-300' onClick={handlePause} />
  ) : 
  (
    <FaPlayCircle
    size={35} className='text-green-500' onClick={handlePlay} />
  )
);

export default PlayPause;
