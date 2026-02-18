import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_ENDPOINTS } from '../../config/api';
import AdminLayout from './AdminLayout';
import './Admin.css';

const InsightManager = () => {
    const [insights, setInsights] = useState([]);

    useEffect(() => {
        fetchInsights();
    }, []);

    const fetchInsights = async () => {
        try {
            const res = await fetch(API_ENDPOINTS.insights);
            const data = await res.json();
            setInsights(data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this insight?')) {
            try {
                await fetch(API_ENDPOINTS.insightById(id), { method: 'DELETE' });
                setInsights(insights.filter(i => i._id !== id));
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <AdminLayout
            title="Manage Insights"
            actions={
                <Link to="/admin/insights/new" className="admin-btn">
                    <span>+</span> Add Insight
                </Link>
            }
        >
            <div className="table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {insights.map((insight) => (
                            <tr key={insight._id}>
                                <td>{insight.title}</td>
                                <td>{new Date(insight.createdAt).toLocaleDateString()}</td>
                                <td>
                                    <div className="table-actions">
                                        <Link to={`/admin/insights/edit/${insight.id || insight._id}`} className="edit-btn">Edit</Link>
                                        <button onClick={() => handleDelete(insight._id)} className="delete-btn">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
};

export default InsightManager;
