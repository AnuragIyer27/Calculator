const Buttons = ({handleOnClick})=> {
    let buttons = ["1","2","+","3","4","-","5","6","x","7","8","/","0","9"]
    return (
        <>
            {buttons.map((items)=>(
                <button key={items} onClick={(event)=>handleOnClick(event, items)}  className="button">{items}</button>
            ))}
        </>
    )
}

export default Buttons;