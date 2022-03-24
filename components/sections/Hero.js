import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './Hero.module.css'
import client from '../../client'
import ReactMarkdown from 'react-markdown'
import Cta from '../Cta'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

function Hero(props) {
  const { heading, backgroundImage, tagline, ctas } = props

  const style = backgroundImage
    ? {
      backgroundImage: `url("${urlFor(backgroundImage).width(2000).auto('format').url()}")`,
    }
    : {}

  return (
    <div className={styles.root} style={style}>
      <div className={styles.content}>
        <h1 className={styles.title} data-sb-field-path=".heading">{heading}</h1>
        <div className={styles.tagline} data-sb-field-path=".tagline">{tagline && <ReactMarkdown>{tagline}</ReactMarkdown>}</div>
        {ctas && (
          <div className={styles.ctas} data-sb-field-path=".ctas">
            {ctas.map((cta, idx) => (
              <Cta {...cta} idx={idx} key={cta._key} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

Hero.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.string,
  ctas: PropTypes.arrayOf(PropTypes.object),
}

export default Hero
