function Heading() {
    const userName = localStorage.getItem('userName');

    return (
        <div id="header">
            <h1 className="font-heading text-4xl font-bold leading-7 text-black">
                Hi 👋 {userName}
            </h1>
            <p className="font-body text-base text-black ">
                Ready to create a new listing? Don’t be afraid to contact us if you need help
                setting up your new venue.
            </p>
        </div>
    );
}

export default Heading;
