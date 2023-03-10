import SpinnerGif from "../assets/cuteSpinner.gif";

const Spinner = () => {
    return(
        <>
        <img src={SpinnerGif} alt="لطفا منتظر بمانید" className="d-block m-auto" style={{width:"250px"}} />
        </>
    )
}

export default Spinner;