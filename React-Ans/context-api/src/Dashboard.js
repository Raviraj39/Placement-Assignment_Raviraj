import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Dashboard = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`dashboard ${theme}`}>
      <h1>Dashboard</h1>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ad deserunt nam nostrum dolor optio iure aut doloremque aperiam cupiditate dolorem fugiat, voluptas facere! Autem ea veniam est dicta magnam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, natus adipisci? Blanditiis illo eius, velit distinctio, ipsum rem sint laudantium impedit corporis fugiat officiis explicabo totam quo, sed reiciendis corrupti!
      </p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Dashboard;
