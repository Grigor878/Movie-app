import React, { useEffect } from 'react'
import Main from '../main/Main'

function HomePage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Main />
    </>
  )
}

export default HomePage