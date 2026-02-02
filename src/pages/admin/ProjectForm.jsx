import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import './Admin.css';

const ProjectForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEdit = !!id;

    const [formData, setFormData] = useState({
        title: '',
        category: '',
        image: '',
        description: '',
        link: '',
        content: '',
        client: '',
        role: '',
        date: new Date().toISOString().split('T')[0]
    });
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const categories = [
        "ANNUAL REPORTS", "BRAND IDENTITY", "BROCHURES AND FLYERS", "CORPORATE",
        "DOCUMENTARIES", "GOVERNMENT", "INFOGRAPHICS", "MAGAZINES",
        "POLICY", "STORY TELLING", "STRATEGIC PLAN"
    ];

    useEffect(() => {
        if (isEdit) {
            fetchProject();
        }
    }, [id]);

    const fetchProject = async () => {
        try {
            const res = await fetch(`/api/projects/${id}`);
            const data = await res.json();
            setFormData(data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const data = new FormData();
        data.append('image', file);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: data
            });
            const result = await res.json();
            setFormData({ ...formData, image: result.filePath });
        } catch (err) {
            console.error('Upload failed', err);
        }
    };

    const handleContentImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const data = new FormData();
        data.append('image', file);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: data
            });
            const result = await res.json();

            // Insert image tag at end of content (simple approach) or replace
            const imgTag = `<img src="${result.filePath}" alt="Project Detail" class="project-detail-image" />`;
            setFormData(prev => ({
                ...prev,
                content: prev.content + '\n' + imgTag
            }));
            e.target.value = null; // Reset input
        } catch (err) {
            console.error('Content image upload failed', err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess('');
        const url = isEdit ? `/api/projects/${id}` : '/api/projects';
        const method = isEdit ? 'PUT' : 'POST';

        try {
            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setSuccess('Project saved successfully!');
                setTimeout(() => navigate('/admin/projects'), 1500);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AdminLayout title={isEdit ? 'Edit Project' : 'Add New Project'}>
            {success && <div className="success-message">{success}</div>}

            <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-group">
                    <label>Title</label>
                    <input name="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <select
                        name="category"
                        value={formData.category ? formData.category.toUpperCase() : ''}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        required
                    >
                        <option value="">Select a Category</option>
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Cover Image</label>
                    <input type="file" onChange={handleImageUpload} />
                    {formData.image && <img src={formData.image} alt="Preview" className="image-preview" />}
                </div>
                <div className="form-group">
                    <label>Short Description</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} rows="3" />
                </div>
                <div className="form-group">
                    <label>Project Link (URL)</label>
                    <input name="link" value={formData.link} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Project Details (Content)</label>
                    <div className="content-tools" style={{ marginBottom: '10px' }}>
                        <label className="admin-btn secondary" style={{ cursor: 'pointer', display: 'inline-block', fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>
                            <span>📷</span> Insert Image
                            <input type="file" style={{ display: 'none' }} onChange={handleContentImageUpload} />
                        </label>
                        <small style={{ marginLeft: '10px', color: '#888' }}>Uploads image and appends it to content</small>
                    </div>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        rows="15"
                    />
                </div>
                <button type="submit" className="admin-btn" disabled={loading}>
                    {loading ? 'Saving...' : 'Save Project'}
                </button>
            </form>
        </AdminLayout>
    );
};

export default ProjectForm;
