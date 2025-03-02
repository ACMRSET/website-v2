import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import teamsData from './../../assets/Team/team_data.json';

const Team = () => {
    // State to track the currently active team
    const [activeTeam, setActiveTeam] = useState(teamsData.teams[0].id);

    // Function to retrieve data for the active team
    const getActiveTeamData = (teamId) => {
        return teamsData.teams.find((team) => team.id === teamId);
    };

    const activeTeamData = getActiveTeamData(activeTeam);

    return (
        <div>
            <Navbar />
            <div className="text-white min-h-screen flex">
                {/* Left Sidebar */}
                <div className="bg-gray-800 w-1/4 p-4">
                    <h1 className="text-3xl text-center mb-6">Our Teams</h1>
                    <ul>
                        {teamsData.teams.map((team) => (
                            <li
                                key={team.id}
                                onClick={() => setActiveTeam(team.id)}
                                className={`cursor-pointer py-2 px-2 ${team.id === activeTeam ? 'bg-gray-700' : ''
                                    } hover:bg-gray-700`}
                            >
                                {team.name}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Content Area */}
                <div className="w-3/4 p-8">
                    <h2 className="text-2xl mb-4">{activeTeamData.name}</h2>
                    <p className="mb-6">{activeTeamData.description}</p>

                    {/* Members List */}
                    <div className="md:grid md:grid-cols-2 md:gap-4  flex-col space-y-2" >
                        {activeTeamData.members.map((member, index) => (
                            <div key={index} className="bg-gray-800 p-4 rounded-lg w-80">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-80 object-fit rounded-lg mb-2"
                                />
                                <h3 className="text-lg font-bold">{member.name}</h3>
                                <p className="text-sm text-gray-400">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Team;
