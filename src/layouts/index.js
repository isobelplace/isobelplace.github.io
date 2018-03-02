import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Footer from '../components/Footer'
import Menu from '../components/Menu'

import { pages, social } from '../copy/copy.js'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Isobel Place"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Menu pages={pages} />
    <div>
      {children()}
    </div>
    <Footer pages={pages} social={social}/>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
