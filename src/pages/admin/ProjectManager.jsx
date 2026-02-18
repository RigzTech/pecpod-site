import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_ENDPOINTS } from '../../config/api';
import AdminLayout from './AdminLayout';
import './Admin.css';

const ProjectManager = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await fetch(API_ENDPOINTS.projects);
            const data = await res.json();
            setProjects(data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            try {
                await fetch(API_ENDPOINTS.projectById(id), { method: 'DELETE' });
                setProjects(projects.filter(p => p._id !== id));
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <AdminLayout
            title="Manage Projects"
            actions={
                <Link to="/admin/projects/new" className="admin-btn">
                    <span>+</span> Add Project
                </Link>
            }
        >
            <div className="table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project._id}>
                                <td>{project.title}</td>
                                <td>{project.category}</td>
                                <td>
                                    <div className="table-actions">
                                        <Link to={`/admin/projects/edit/${project.id || project._id}`} className="edit-btn">Edit</Link>
                                        <button onClick={() => handleDelete(project._id)} className="delete-btn">Delete</button>
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

export default ProjectManager;
