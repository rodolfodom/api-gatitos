import React, { useEffect, useState } from 'react'
import './App.css'
import getNewFact from './logic/getNewFact'

const CAT_IMG_DOMAIN = 'https://cataas.com/'
export default function App () {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()

  const handleClick = async () => {
    const newFact = await getNewFact()
    setFact(newFact)
  }

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImageURL(url)
      })
  }, [fact])

  useEffect(async () => {
    const newFact = await getNewFact()
    setFact(newFact)
  }, [])

  return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageURL && <img src={`${CAT_IMG_DOMAIN}${imageURL}`} alt='cat'></img>}
            <button onClick={handleClick}>new fact</button>
        </main>
  )
}
