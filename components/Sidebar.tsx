import React from 'react';
import { FaHome, FaDonate, FaClipboardList, FaUserCog, FaSignOutAlt } from 'react-icons/fa';

interface SidebarProps {
  role: string;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ role, onLogout }) => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          <FaSignOutAlt size={24} />
        </label>
        {/* Sidebar content based on user role */}
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li><a href="/"><FaHome /> Home</a></li>
          <li><a href="/donations"><FaDonate /> Donations</a></li>
          {role === 'admin' || role === 'organizer' ? (
            <>
              <li><a href="/campaigns"><FaClipboardList /> Campaigns</a></li>
              <li><a href="/users"><FaUserCog /> Users</a></li>
            </>
          ) : null}
          <li><a onClick={onLogout}><FaSignOutAlt /> Logout</a></li>
        </ul>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay" aria-label="close sidebar"></label>
      </div>
    </div>
  );
};

export default Sidebar;
