const Button = ({ children, text, color = "black", a, b, c }) => {
    // 이벤트 객체
    const onClickButton = (e) => {
        console.log(e.target.textContent);
    }
    return (
        <button
            // onClick={() => {
            //     console.log(text);
            // }}
            onClick={onClickButton}
            // onMouseEnter={onClickButton}
            style={{ color: color }}>
            {text} - {color.toUpperCase()} - {a}
            {children}
        </button>
    )
}


export default Button;