const withHoc = (WrappedComp)=> (props) => {
    return <WrappedComp {...props}  title = {'likes'} count = {200}/>
}
export default withHoc