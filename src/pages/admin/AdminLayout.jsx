import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Admin.css';

const AdminLayout = ({ children, title, actions }) => {
    const { user, logout } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <div className="admin-layout">
            {/* Sidebar */}
            <aside className="admin-sidebar">
                <div className="sidebar-header">
                    <h2>PecPod<span>.</span></h2>
                    <p className="role-badge">Admin Panel</p>
                </div>

                <nav className="sidebar-nav">
                    <ul>
                        <li>
                            <Link to="/admin/dashboard" className={isActive('/admin/dashboard')}>
                                <span className="icon">📊</span> Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/projects" className={isActive('/admin/projects')}>
                                <span className="icon">💼</span> Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/insights" className={isActive('/admin/insights')}>
                                <span className="icon">💡</span> Insights
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="sidebar-footer">
                    <div className="user-info">
                        <div className="avatar">{user?.username?.[0]?.toUpperCase()}</div>
                        <div className="details">
                            <span className="name">{user?.username}</span>
                            <span className="status">Online</span>
                        </div>
                    </div>
                    <button onClick={handleLogout} className="logout-btn" title="Logout">
                        🚪
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="admin-main">
                <header className="admin-header">
                    <div className="header-title">
                        <h1>{title}</h1>
                    </div>
                    <div className="header-actions">
                        {actions}
                    </div>
                </header>

                <div className="content-area">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
