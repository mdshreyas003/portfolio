import React from 'react'

function Connect(props) {
    const { link, icon, label } = props;
    return (
      <a className='cursor-none' target="_blank" aria-label={label} rel="noopener noreferrer" href={link}>
        <img width={40} height={40} src={icon} aria-hidden="true" />
      </a>
    );
}

export default Connect