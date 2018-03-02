import React from 'react'

const ExternalLink = ({url, text}) => (
  <a href={url} target="_blank">{text}</a>
)

export default ExternalLink