import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import './Admin.css';

const Dashboard = () => {
    return (
        <AdminLayout title="Dashboard">
            <div className="dashboard-cards">
                <div className="card">
                    <h3>Quick Actions</h3>
                    <div className="action-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link to="/admin/projects/new" className="admin-btn">
                            <span>+</span> Create Project
                        </Link>
                        <Link to="/admin/insights/new" className="admin-btn">
                            <span>+</span> Create Insight
                        </Link>
                    </div>
                </div>

                <div className="card">
                    <h3>System Status</h3>
                    <p style={{ color: '#aaa', marginBottom: '0.5rem' }}>Server: <span style={{ color: '#4cd964' }}>Online</span></p>
                    <p style={{ color: '#aaa' }}>Database: <span style={{ color: '#4cd964' }}>Connected</span></p>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Dashboard;
