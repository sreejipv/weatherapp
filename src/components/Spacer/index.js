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

export default Spacer
