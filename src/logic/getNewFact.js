const CAT_ENDPOINTFACT = 'https://catfact.ninja/fact'

export default async function getNewFact () {
  const res = await fetch(CAT_ENDPOINTFACT)
  const data = await res.json()
  const { fact } = data
  return fact
}
