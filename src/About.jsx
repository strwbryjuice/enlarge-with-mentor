import "./About.css";

function About() {

    return (
        <div className="about-container">
            <div className="about-left">
                <div className="about-img img1"></div>
                <div className="about-img img2"></div>
            </div>
            <div className="about-right">
                <p className="about-p"> Enlarge project seeks to broaden the public perception of refugees. Often, refugees are portrayed in the media as pitiful, lying on the ground, starving, and having a depressed stare. This project aims to change that negative imagery. By donating cups, you contribute to expanding our perception of refugees. In our homes, we have many unwanted cups — perhaps they don’t match our interior, or they were gifts we didn’t like. Like these cups, refugees are often treated as unwanted. This project transforms these cups from disposable objects into something valued and wanted. As more cups are gathered, it's a sign that more individuals are reevaluating their perspectives and choosing empathy and inclusion over indifference. Your thoughtful participation is essential for this initiative.</p>

                <a href="/Support" className="about-atag">
                    <div className="click-support">
                        <p>DONATE THE CUPS</p>
                    </div>
                </a>

            </div>

        </div>
    )
}

export { About };