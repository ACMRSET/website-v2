import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import teamsData from './../../assets/Team/team_data.json';

const Team = () => {

    const [activeTeam, setActiveTeam] = useState(teamsData.teams[0].id);

    const getActiveTeamData = (teamId) => {
        return teamsData.teams.find(team => team.id === teamId);
    };

    const activeTeamData = getActiveTeamData(activeTeam);

    return (
        <div>
            <Navbar />
            <div className='bg-black text-white min-h-screen'>
                <h1 className='text-3xl text-center'>Our Team</h1>
                {/* Left Sidebar */}
                <div className="bg-black text-white w-1/4 p-4">
                    <h1 className="text-3xl text-center mb-6">Our Teams</h1>
                    <ul>
                        {teamsData.teams.map((team) => (
                            <li
                                key={team.id}
                                onClick={() => setActiveTeam(team.id)}
                                className="cursor-pointer py-2 hover:bg-gray-700 px-2"
                            >
                                {team.name}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Content Area */}
                <div className="w-3/4 p-8">
                    <h2 className="text-2xl mb-4">{activeTeamData.name}</h2>
                    <p>{activeTeamData.description}</p>
                </div>


            </div>
            <Footer />
        </div>
    )
}

export default Team