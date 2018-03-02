import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Title = styled.button`
  text-align: center;
  color: palevioletred;
`;

const Button = ({ url, text }) => (
  <Title>
    <Link to={url}>
      { text }
    </Link>
  </Title>
)

export default Button