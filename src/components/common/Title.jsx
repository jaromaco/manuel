
function Title({text,subtitle}) {

    return (
        <>
            <div className="title">
                <h2>{text}</h2>
                <p className="subtitle"><i>{subtitle}</i></p>
                <hr />
            
            </div>
        </>
    );
};
export default Title;