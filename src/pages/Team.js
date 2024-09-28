import React from 'react';

const teamMembers = [
  { avatar: '/assets/xameryn.jpg', name: 'xameryn', role: 'Lead Developer', link: 'https://github.com/xameryn' },
  { avatar: '/assets/sciencebird.jpg', name: 'Science Bird', role: 'Artist', link: 'https://x.com/TheScienceBird' },
  { avatar: '/assets/spektrum.jpg', name: 'spektrum', role: 'Community Manager / Idea Guy', link: 'https://x.com/spekkyR6' },
  { avatar: '/assets/michielderuyter.jpg', name: 'Michiel de Ruyter', role: 'Translator / Idea Guy', link: 'https://x.com/AlecvdeB' },
];

function Team() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };
  
  return (
    <div>
      <h1>Meet the Team</h1>
      <p>
        We're a small development team based in Canada comprised of highschool friends!
        <br></br><br></br>
        The Rasa Novum Modding project is an extrapolation of our efforts to run a small, private, Minecraft modded server for our friend circles. We felt we had some really solid, unique ideas for the modded Minecraft space, so we decided to take things a step further and start developing our own mods.
      </p>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index} className='item-list' onClick={() => handleClick(member.link)}>
            <img src={member.avatar} alt={member.name} className='item-avatar'/>
            <div className='item-info'><strong>{member.name}</strong> - {member.role}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Team;
