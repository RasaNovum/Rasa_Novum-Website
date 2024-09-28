import React from 'react';

const socialList = [
  { avatar: '/assets/discord.png', name: 'Discord', role: 'Our main hub of communication', link: 'https://discord.gg/yc3eGBswpm' },
  { avatar: '/assets/x.jpg', name: 'Xitter', role: 'Follow for mod and server announcments', link: 'https://x.com/Rasa_Novum' },
  { avatar: '/assets/github.png', name: 'Github', role: 'Visit to post issues and check documentation', link: 'https://github.com/RasaNovum'},
];

function Socials() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <h1>Reach out to us below 👋</h1>
      <ul>
        {socialList.map((member, index) => (
          <li key={index} className='item-list' onClick={() => handleClick(member.link)}>
            <img src={member.avatar} alt={member.name} className='item-avatar'/>
            <div className='item-info'><strong>{member.name}</strong> - {member.role}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Socials;