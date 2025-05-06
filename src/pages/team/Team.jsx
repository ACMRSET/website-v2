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
        <div >
            <div className="text-white min-h-screen flex">
                {/* Left Sidebar */}
                <div className=" w-1/4 p-0 md:p-6 m-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-lg text-sm lg:text-lg">
                    <h1 className="text-xl md:text-3xl text-center mb-6">Our Teams</h1>
                    <ul>
                        {teamsData.teams.map((team) => (
                            <li
                                key={team.id}
                                onClick={() => setActiveTeam(team.id)}
                                className={`cursor-pointer text-center py-2 px-4 rounded-xl transition-colors e ${team.id === activeTeam ? 'bg-blue-600 bg-opacity-50' : 'hover:bg-white/10'
                                    } hover:bg-gray-700`}
                            >
                                {team.name}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Content Area */}
                <div className="w-3/4 p-2 lg-p-8">
                    <div className="mb-8 bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl p-6 shadow-lg">
                        <h2 className="text-3xl font-bold mb-2">{activeTeamData.name}</h2>
                        <p className="text-gray-200">{activeTeamData.description}</p>
                    </div>

                    {/* Members List */}
                    <div className="lg:grid lg:grid-cols-3 lg:gap-2 flex-col space-y-2 " >
                        {activeTeamData.members.map((member, index) => (
                            <div key={index} className="bg-gray-800 p-4 rounded-lg w-52 lg:w-72 bg-white/10 border border-white/20 backdrop-blur-md">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-52 lg:h-72 object-cover rounded-lg mb-2"
                                />
                                <h3 className="text-lg font-bold">{member.name}</h3>
                                <p className="text-sm text-gray-400">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
