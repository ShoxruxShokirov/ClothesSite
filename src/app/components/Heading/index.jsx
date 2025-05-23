import "./style.scss"

function Heading(props) {
    // props  ==>  properties  ==>  {children:null}
    const CHILDREN = props.children ? props.children : "Text is missing...!!!"
    return (
        <h1 className="heading-wrapper">
            {CHILDREN}
        </h1>
    )
}

export default Heading