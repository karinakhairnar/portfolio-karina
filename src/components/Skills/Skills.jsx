import React, { useContext } from 'react';
import Marquee from 'react-fast-marquee';

import './Skills.css';

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData';
import { skillsImage } from '../../utils/skillsImage';

function Skills() {
  const { theme } = useContext(ThemeContext);

  const skillBoxStyle = {
    backgroundColor: theme.secondary,
    boxShadow: `0px 0px 30px ${theme.primary30}`,
  };

  return (
    <div className='skills' style={{ backgroundColor: theme.secondary }} id='skill'>
      <div className='skillsHeader'>
        <h2 style={{ color: theme.primary }}>Skills</h2>
      </div>
      <div className='skillsContainer'>
        <div className='skill--scroll'>
          <Marquee
            gradient={false}
            speed={60}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction='right'>
            {skillsData.map((skill, id) => (
              <div className='skill--box' key={id} style={skillBoxStyle}>
                <img
                  src={
                    skill === 'ExpressJS'
                      ? 'https://blog.amt.in/wp-content/uploads/2017/12/e16da876-c2fd-4eb8-ae72-4b193c534938-Edited.png'
                      : skillsImage(skill)
                  }
                  alt={skill}
                />
                <h3 style={{ color: theme.tertiary }}>{skill}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Skills;
