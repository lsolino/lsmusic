import React, { Fragment, useState, useEffect, createRef} from 'react';
import styled from 'styled-components';
import Music from './music';
import { Button, Columns } from 'react-bulma-components';
import RecentlyHeardsService from '../../services/recently_heards';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const PlaySequenceButton = styled(Button)`
 margin-bottom: 30px;
`

const Musics = (props) => {

  const [songs, setSongs] = useState([]);
  const [playing, setPlaying] = useState([]);
  const player = createRef()

  const [playRandom, setPlayRandom] = useState(false);

  const NextSong = () => {
    console.log('oi')
    if (playRandom) {
      let index = Math.floor(Math.random() * props.songs.length);
      setPlaying(props.songs[index]);
    } else
      setPlaying([]);
  }

  const SwitchRandom = () => {
    if (playRandom) {
      setPlayRandom(false);
      setPlaying([]);
    } else
      setPlayRandom(true);
  }

  useEffect(() => {
    if (playRandom)
      NextSong();
  }, [playRandom]);

  useEffect(() => {
    if (player.current !== null) {
      player.current.audio.current.pause();
      player.current.audio.current.load();
      if (playing.id) {
        player.current.audio.current.play();
        RecentlyHeardsService.create(playing.album_id)
      }
    }
  }, [playing]);

  useEffect(() => {
    setSongs(props.songs.map((song, key) =>
      <Music
        song={song}
        playing={playing.id == song.id}
        setPlaying={setPlaying}
        key={key}
        artist_name={props.artist_name}
      />
    ));

  }, [props.songs, playing]);

  return (
    <Fragment>
      <Columns className='is-mobile is-centered'>
        <Columns.Column desktop={{ size: 2 }} mobile={{ size: 12 }} className='has-text-centered'>
          <PlaySequenceButton
            className='is-medium'
            color='primary'
            outlined
            onClick={() => SwitchRandom()}
          >
            {playRandom == true ? 'Parar de tocar' : 'Tocar aleatoriamente'}
          </PlaySequenceButton>
        </Columns.Column>
      </Columns>
      {songs}
      <AudioPlayer
        ref={player}
        src={playing.file_url}
        onEnded={() => NextSong()}
        onClickNext={() => NextSong()}
      />
    </Fragment>
  );
}

export default Musics;