import React, { Fragment, useState, useEffect } from 'react';
import { Heading, Columns, Image } from 'react-bulma-components';
import styled from 'styled-components';
import ArtistsService from '../../services/artists';
import { useParams } from 'react-router-dom';
import Musics from '../musics';

const DivVSpaced = styled.div`
 margin-top: 20px;
 margin-bottom: 20px;
`

const Artists = () => {

  let { id } = useParams();
  const [artist, setArtist] = useState([]);

  async function fetchArtist() {
    const response = await ArtistsService.show(id);
    setArtist(response.data);
  }

  useEffect(() => {
    fetchArtist();
  }, []);

  return (
    <Fragment>
      <Columns className='is-vcentered is-mobile is-centered'>
        <Columns.Column desktop={{ size: 3 }} className='has-text-centered'>
          <Image src={artist.photo_url} />
          <DivVSpaced>
            <Columns>
              <Columns.Column desktop={{ size: 10 }}>
                <Heading size={5} className='has-text-white'>{artist.name}</Heading>
              </Columns.Column>
            </Columns>
          </DivVSpaced>
        </Columns.Column>
      </Columns>
      <Musics songs={artist.songs || []}/>
    </Fragment>
  );
}

export default Artists;