export default function ButtonRadio({ type, setType, children, disableOption }) {
    return (
        <>
            <div className="form-group-options">
                <button className={`button  ${type === true && 'active'}`}
                    onClick={() => {
                        if (disableOption === 'Yes') {
                            return;
                        }
                        setType(true);
                    }}
                    disabled={disableOption === 'Yes'}
                    type="button"
                >
                    Yes
                </button>
                <button className={`button  ${type === false && 'active'}`}
                    onClick={
                        () => {
                            if (disableOption === 'No') {
                                return;
                            }
                            setType(false);
                        }
                    }
                    disabled={disableOption === 'No'}
                    type="button"
                >
                    No
                </button>
            </div>
            {children}
        </>
    );
}
