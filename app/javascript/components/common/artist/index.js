import React, { Fragment } from 'react';
import { Heading, Image } from 'react-bulma-components';
import styled from 'styled-components'
import { Link } from "react-router-dom";

const DivVSpaced = styled.div`
  margin-top: 10px;
`

const Artist = (props) => {
  return (
    <Link to={`/artist/${props.id}`}>
      <Image src={props.photo} />
      <DivVSpaced>
        <Heading size={6} className='has-text-white'>{props.name}</Heading>
      </DivVSpaced>
    </Link>
  );
}

export default Artist;