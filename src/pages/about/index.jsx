import React from 'react'
import { useLocation } from 'react-router-dom'


export default function About() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const index = params.get('num');

  return (
    <div>About + {index}</div>
  )
}
