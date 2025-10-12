import hazardLogo from '../assets/hazard-logo.png';
import Navbar from '../components/Navbar';

export const Landing = () => {
    return (
        <>
            <Navbar />
            <div className="full-screen-bg">
                <div className="container">
                    <div className="w-50">
                        <img src={hazardLogo} alt="Logo" width="480" height="80" />
                        {/* <h1>Hazard World</h1> */}
                        <h4 className='my-4'>Nature&apos;s Fury. A Volcanologist&apos;s Journey</h4>
                        <span>Venture through perilous regions in search of Mt. Thesaurus&apos; hidden treasure.</span>
                        <div className="mt-4">
                            <a href="https://drive.google.com/file/d/1nusEg-VZbcQxCd01No4fUFkv5lXa4q6E/view" className="btn btn-primary">
                                <i className="bi bi-download me-2"></i>
                                Download Game
                            </a>
                        </div>
                        <div className="d-flex mt-2">
                            <li className="me-4">
                                <span>Android</span>
                            </li>
                            <li className="me-4">
                                <span>APK</span>
                            </li>
                            <li className="me-4">
                                <span>337 MB</span>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}