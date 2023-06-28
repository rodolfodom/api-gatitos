import React, { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINTFACT = 'https://catfact.ninja/fact'
const CAT_IMG_DOMAIN = 'https://cataas.com/'
export default function App () {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()
  useEffect(() => {
    if(!fact) return
    const firstWord = fact.split(' ')[0]
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImageURL(url)
      })
  }, [fact]) 

  useEffect(() => {
    fetch(CAT_ENDPOINTFACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageURL && <img src={`${CAT_IMG_DOMAIN}${imageURL}`} alt='cat'></img>}
        </main>
  )
}
