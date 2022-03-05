import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { currentTrackIdState } from './../atoms/songAtom';
import useSpotify from './useSpotify';

const useSongInfo = () => {
  const spotifyAi = useSpotify();
  const [currentIdTrack, setCurrentIdTrack] = useRecoilState(currentTrackIdState)
  const [songInfo, setSongInfo] = useState(null)

  useEffect(() => {
    const fetchSongInfo = async () => {
      if (currentIdTrack) {
        const trackInfo = await fetch(`https://api.spotify.com/v1/tracks/${currentIdTrack}`,
          {
            headers: {
              Authorization: `Bearer ${spotifyAi.getAccessToken()}`,
            }
          }).then(res => res.json());

        setSongInfo(trackInfo)
      }
    }

    fetchSongInfo();
  }, [currentIdTrack, spotifyAi])


  return songInfo;
}

export default useSongInfo