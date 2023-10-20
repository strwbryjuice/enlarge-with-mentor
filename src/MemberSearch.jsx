import React, { useState, useEffect } from 'react';

const MemberSearch = () => {
    const [members, setMembers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Fetching members data once the component is mounted
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3001/member");
                const data = await response.json();
                setMembers(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // Handling the search input change
    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    // Filtering members based on the search term
    const filteredMembers = members.filter((member) =>
    
        member.name.toLowerCase().includes(searchTerm) ||
        member.email.toLowerCase().includes(searchTerm)
    );

    return (
        <div className="member-search-container">
            {/* Search input */}
            <input 
                type="text" 
                value={searchTerm} 
                onChange={handleSearch} 
                placeholder="Search your cups" 
            />

            {/* Conditionally displaying filtered members based on search term */}
            {searchTerm && ( // The members list will only render if searchTerm is not an empty string
                <div className="search-dropdown">
                    {filteredMembers.length > 0 ? (
                        filteredMembers.map((member) => (
                            <div key={member.id}>
                                <p>{member.name}</p>
                                <p>{member.email}</p>
                            </div>
                        ))
                    ) : (
                        <p>No members found.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default MemberSearch;