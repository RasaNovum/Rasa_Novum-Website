import React from 'react';

const modList = [
  { avatar: '/assets/tf.png', name: 'Timber Frames', role: 'Build walls out of various timber frames and bring your medieval builds to the next level.', link: 'https://modrinth.com/mod/timber-frames' },
  { avatar: '/assets/vr.png', name: 'Via Romana', role: 'Introduces a fast travel system where players can link signs over paths, allowing for instant teleportation between them.', link: 'https://modrinth.com/mod/via-romana' },
  { avatar: '/assets/es.png', name: 'Ender Sender', role: 'Gives players the power to refill their inventory as they place blocks. No need to go back-and-forth!', link: 'https://www.curseforge.com/minecraft/mc-mods/ender-sender' },
];

function Mods() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <h1>Check out our mods!</h1>
      <p>Made with love ❤️</p>
      <ul>
        {modList.map((member, index) => (
          <li key={index} className='item-list' onClick={() => handleClick(member.link)}>
            <img src={member.avatar} alt={member.name} className='item-avatar'/>
            <div className='item-info'><strong>{member.name}</strong> - {member.role}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Mods;