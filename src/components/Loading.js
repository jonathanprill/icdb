import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import GridLoader from "react-spinners/GridLoader";

function Loading() {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
            className='loader'>
            <GridLoader
                color="var(--mint-green)"
                margin={10}
                size={30}
            />
        </div>
    );
}

export default Loading;