import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {
  render() {
    return ( <
      div >
      <
      h1 > {
        this.name
      } < /h1> <
      h3 > {
        this.producer
      } < /h3> {
        this.hasWatermark ? < p > Has watermark < /p> : <p>Does not have watermark</p >
      } <
      p > Color: {
        this.color
      } < /p> <
      p > Weight: {
        this.weight
      } < /p> <
      /div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName) {
    if (props[propName] === undefined) {
      return new Error('Weight is required.')
    }

    if (isNaN(props[propName])) {
      return new Error('Weight must be a number.')
    }

    if (props[propName] < 80 || props[propName] > 300) {
      return new Error('Weight must be between 80 and 300.')
    }
  }
}

export default Product
