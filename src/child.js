function Child(props)
{
 const handleClick = () =>
 {
  props.parentcall("sangee")
 }
return (
  <div>
    <button onClick = {handleClick}>Click</button>
  </div>
)
}
export default Child;