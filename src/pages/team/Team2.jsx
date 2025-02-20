import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import teamsData from "../../assets/Team/team_data.json";

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
                {/* Left Sidebar with Slide-in Animation */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-800 w-1/4 p-4"
                >
                    <h1 className="text-3xl text-center mb-6">Our Teams</h1>
                    <ul>
                        {teamsData.teams.map((team) => (
                            <motion.li
                                key={team.id}
                                onClick={() => setActiveTeam(team.id)}
                                className={`cursor-pointer py-2 px-2 ${team.id === activeTeam ? "bg-gray-700" : ""
                                    } hover:bg-gray-700`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {team.name}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Right Content Area with Fade-in Effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-3/4 p-8"
                >
                    <motion.h2 className="text-2xl mb-4">{activeTeamData.name}</motion.h2>
                    <motion.p className="mb-6">{activeTeamData.description}</motion.p>

                    {/* Members List with Staggered Animation */}
                    <div className="md:grid md:grid-cols-2 md:gap-4 flex-col space-y-2">
                        {activeTeamData.members.map((member, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800 p-4 rounded-lg"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(255,255,255,0.2)" }}
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-32 object-cover rounded-lg mb-2"
                                />
                                <h3 className="text-lg font-bold">{member.name}</h3>
                                <p className="text-sm text-gray-400">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default Team;
