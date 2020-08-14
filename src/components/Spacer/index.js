import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
const Spacer = (props) => {

  const {
    m,
    mt,
    mb,
    ml,
    mr,
    mx,
    my,
    className
  } = props

  const spacerClass = classnames(
    {
      [`m-${m}`]: m !== false,
      [`mt-${mt}`]: mt !== false,
      [`mb-${mb}`]: mb !== false,
      [`ml-${ml}`]: ml !== false,
      [`mr-${mr}`]: mr !== false,
      [`mx-${mx}`]: mx !== false,
      [`my-${my}`]: my !== false
    },
    className
  )

  return (
    <div className={spacerClass} style={{
      height: '1px',
      width: '1px'
    }} />
  )
}

Spacer.propTypes = {

  className: PropTypes.string,
  m: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  mx: PropTypes.number,
  my: PropTypes.number
}

Spacer.defaultProps = {
  className: '',
  m: 0,
  mt: 0,
  mb: 0,
  ml: 0,
  mr: 0,
  mx: 0,
  my: 0
}

Spacer.displayName = 'Spacer'

export default Spacer
