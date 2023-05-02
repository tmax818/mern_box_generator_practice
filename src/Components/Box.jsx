export const Box = ({color}) => {

    const box = {
        width: '100px',
        height: '100px',
        backgroundColor: color,
        padding: '10px',
        margin: "5px"
    }

    return (
        <div style={box}>

        </div>
    )
}