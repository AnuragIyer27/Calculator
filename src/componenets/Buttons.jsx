const Buttons = ()=> {
    let buttons = ["C","1","2","+","3","4","-","5","6","x","7","8","/","0","9","="]
    return (
        <>
            {buttons.map((items)=>(
                <button key={items} className="button">{items}</button>
            ))}
        </>
    )
}

export default Buttons;