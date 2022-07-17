import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import GridLoader from "react-spinners/GridLoader";
import ClipLoader from "react-spinners/ClipLoader";
import TopNav from "./TopNav";
import SideNav from "./SideNav";

function LoadingComponent() {
    return (
        <>
            <TopNav />
            <SideNav />
            <div style={{
                marginLeft: '250px',
                width: '100vw-250px',
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
                className='loader-component'>
                <ClipLoader
                    color="var(--mint-green)"
                    margin={10}
                    size={50}
                />
            </div>
        </>
    );
}

export default LoadingComponent;