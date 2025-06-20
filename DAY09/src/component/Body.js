import React from "react";

function Body() {
    const [profiles, setProfiles] = React.useState([]);
    const [numberOfProfiles, setNumberOfProfiles] = React.useState("");

    async function generateProfiles(count = 10) {
        try {
            const ran = Math.floor(Math.random() * 1000);
            const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
            const data = await response.json();
            setProfiles(data);
        } catch (error) {
            console.error("Error fetching profiles:", error);
        }
    }

    React.useEffect(() => {
        generateProfiles();
    }, []);

    const handleSearch = () => {
        const count = parseInt(numberOfProfiles);
        if (!isNaN(count) && count > 0) {
            generateProfiles(count);
        } else {
            alert("Please enter a valid number greater than 0");
        }
    };

    return (
        <div>
            <div className="but">
                <input
                    type="number"
                    className="input"
                    placeholder="Number of Profiles"
                    value={numberOfProfiles}
                    onChange={(e) => setNumberOfProfiles(e.target.value)}
                />
                <button onClick={handleSearch}>Search Profiles</button>
            </div>
            <div className="body">
                {profiles.map((profile) => (
                    <div className="profile" key={profile.id}>
                        <img src={profile.avatar_url} alt={profile.login} />
                        <h2>{profile.login}</h2>
                        <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
                            View Profile
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Body;
