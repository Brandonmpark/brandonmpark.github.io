import "./home.scss";

function Home() {
    return (
        <div id="home">
            <h1>
                <span id="animateB">b</span>
                <span className="reveal">randon </span>
                <span id="animateP">p</span>
                <span className="reveal">ark</span>
            </h1>
            <h2 className="reveal">
                cs & math @ ucsd &apos;26 <br />
                ai/ml, nlp, and webdev
            </h2>
        </div>
    );
}

export default Home;
