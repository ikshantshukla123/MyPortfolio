import React from "react";
import { FiGithub } from "react-icons/fi";

const GithubCards = () => {
  const username = "ikshantshukla123";

  return (
    <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-6 md:p-8 border border-neutral-700 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <FiGithub className="w-6 h-6 text-white" />
          GitHub Highlights
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Stats */}
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=github_dark&hide_border=true`}
          alt="GitHub Stats"
          className="w-full rounded-xl"
        />

        {/* Streak */}
       

        {/* Top Languages */}
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=github_dark&hide_border=true`}
          alt="Top Languages"
          className="w-full rounded-xl md:col-span-2"
        />
      </div>
    </div>
  );
};

export default GithubCards;
