const isObject = x => typeof x === 'object' && x !== null
export const RecursiveComponent = ({ data }) => {
  if (!isObject(data)){
    return (
      <li>{data}</li>
    );
  }

  const pairs = Object.entries(data); //returns an array of k/v pairs from object 

  return (
    <>
      {pairs.map(([key, value]) => (
        <li>
          {key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  )
}