import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import styles from './TextSection.module.css'

function TextSection(props) {
  const {heading, label, text} = props

  return (
    <div className={styles.root}>
      <section className={styles.article}>
        <div className={styles.label} data-sb-field-path=".label">{label}</div>
        <h2 className={styles.heading} data-sb-field-path=".heading">{heading}</h2>
        {text && (<div data-sb-field-path=".text"><ReactMarkdown>{text}</ReactMarkdown></div>)}
      </section>
    </div>
  )
}

TextSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.string,
}

export default TextSection
