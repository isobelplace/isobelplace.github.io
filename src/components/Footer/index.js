import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Button from '../Button'
import ExternalLink from '../ExternalLink'

const FooterLink = styled.button`
  color: palevioletred;
  text-align: center;
`;

const Footer = ({ pages, social }) => (
  <footer>
    <Button url={pages.home.url} text={pages.home.title} />
    <Button url={pages.info.url} text={pages.info.title} />
    <Button url={pages.contact.url} text={pages.contact.title} />
    <ExternalLink url={social.url} text={social.title}/>
  </footer>
)

export default Footer