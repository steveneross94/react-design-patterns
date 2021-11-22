export const printProps = Component => {
  return (props) => {
    console.log('props:', props)
    return <Component {...props} />
  }
}