import { Link } from "react-router";
import '../../Styles/breadcrum.css'
export default function Breadcrum({ title }) {
    return (
        <div className="Breadcrum">
            <div className="Container">
                <h1 className="">{title}</h1>
                <div>
                    <Link to="/" className="">Home</Link>
                    <span className="">/</span>
                    <span className="">{title}</span>
                </div>
            </div>
        </div>
    );
}