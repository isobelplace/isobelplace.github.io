import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Button from '../Button'
import ExternalLink from '../ExternalLink'

const BannerStyle = styled.div`
  background-image: url(https://placeimg.com/640/480/any);
  color: palevioletred;
  padding: 5em;
  text-align: center;
`;

const Title = styled.h1`
  font-size = 1em;
`;

const Banner = ({ title, subtitle, photo }) => (
  <BannerStyle>
    <Title>
      {title}
    </Title>
  </BannerStyle>
)

export default Banner