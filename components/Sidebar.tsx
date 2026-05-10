'use client';

import React from 'react';
import Link from 'next/link';
import { FaHome, FaDonate, FaClipboardList, FaUserCog, FaSignOutAlt } from 'react-icons/fa';

interface SidebarProps {
  role: string;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ role, onLogout }) => {
  // Normalize role to lowercase for comparison
  const normalizedRole = role?.toLowerCase() || 'donor';
  const isAdminOrOrganizer = normalizedRole === 'admin' || normalizedRole === 'organizer';

  return (
    <div className="drawer lg:drawer-open">
      <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
      
      {/* Drawer content (visible on mobile when toggled) */}
      <div className="drawer-content flex flex-col">
        {/* Mobile menu button */}
        <label htmlFor="sidebar-drawer" className="btn btn-primary drawer-button lg:hidden">
          <FaClipboardList size={20} />
          Menu
        </label>
      </div>

      {/* Sidebar drawer */}
      <div className="drawer-side">
        <label htmlFor="sidebar-drawer" className="drawer-overlay" aria-label="Close menu"></label>
        
        {/* Sidebar content */}
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li className="menu-title mb-4">
            <span className="text-lg font-bold">Navigation</span>
          </li>
          
          <li>
            <Link href="/">
              <FaHome /> Home
            </Link>
          </li>
          
          <li>
            <Link href="/donation">
              <FaDonate /> Donations
            </Link>
          </li>

          {/* Admin/Organizer only sections */}
          {isAdminOrOrganizer && (
            <>
              <li className="menu-title mt-6 mb-2">
                <span className="text-sm font-bold">Management</span>
              </li>
              
              <li>
                <Link href="/campaign/campaignCards">
                  <FaClipboardList /> Campaigns
                </Link>
              </li>
              
              <li>
                <Link href="/create-campaign">
                  <FaClipboardList /> Create Campaign
                </Link>
              </li>

              {normalizedRole === 'admin' && (
                <li>
                  <Link href="/admin/users">
                    <FaUserCog /> Manage Users
                  </Link>
                </li>
              )}
            </>
          )}

          <li className="menu-title mt-6 mb-2">
            <span className="text-sm font-bold">Account</span>
          </li>
          
          <li>
            <button
              onClick={onLogout}
              className="flex items-center gap-2"
            >
              <FaSignOutAlt /> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
