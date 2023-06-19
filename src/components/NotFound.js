import notFound from "../images/notfound.svg";
export default function NotFound(){
    return (
        <div className="container">
            <h3>404 Page Not Found</h3>
            <img src={notFound} alt="page not found" />
        </div>
    )
}