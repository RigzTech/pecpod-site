import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_ENDPOINTS } from '../../config/api';
import AdminLayout from './AdminLayout';
import './Admin.css';

const InsightForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEdit = !!id;

    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        summary: '',
        image: '',
        content: '',
        readTime: '5 min read',
        featured: false
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isEdit) {
            fetchInsight();
        }
    }, [id]);

    const fetchInsight = async () => {
        try {
            const res = await fetch(API_ENDPOINTS.insightById(id));
            const data = await res.json();
            setFormData(data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const data = new FormData();
        data.append('image', file);

        try {
            const res = await fetch(API_ENDPOINTS.upload, {
                method: 'POST',
                body: data
            });
            const result = await res.json();
            setFormData({ ...formData, image: result.filePath });
        } catch (err) {
            console.error('Upload failed', err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const url = isEdit ? API_ENDPOINTS.insightById(id) : API_ENDPOINTS.insights;
        const method = isEdit ? 'PUT' : 'POST';

        // Add unique ID for new insights
        const dataToSubmit = {
            ...formData,
            id: formData.id || Date.now().toString()
        };

        try {
            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSubmit)
            });
            if (res.ok) {
                navigate('/admin/insights');
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AdminLayout title={isEdit ? 'Edit Insight' : 'Add New Insight'}>
            <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-group">
                    <label>Title *</label>
                    <input name="title" value={formData.title} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Excerpt (Short preview text) *</label>
                    <textarea
                        name="excerpt"
                        value={formData.excerpt}
                        onChange={handleChange}
                        rows="2"
                        placeholder="A brief description that appears on the insights list page"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Cover Image</label>
                    <input type="file" onChange={handleImageUpload} />
                    {formData.image && <img src={formData.image} alt="Preview" className="image-preview" />}
                </div>

                <div className="form-group">
                    <label>Content *</label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        rows="15"
                        placeholder="Write your article content here. Use plain text with line breaks. You can use:
- Quotes starting with &quot;
- Lists starting with -
- Subheadings (short lines without punctuation)"
                        required
                    />
                    <small style={{ color: '#888', marginTop: '0.5rem', display: 'block' }}>
                        Tip: The first paragraph will have a drop cap. Use quotes with " and lists with -
                    </small>
                </div>

                <div className="form-group">
                    <label>Summary (Optional - for SEO)</label>
                    <textarea name="summary" value={formData.summary} onChange={handleChange} rows="2" />
                </div>

                <div className="form-group">
                    <label>Read Time</label>
                    <input
                        name="readTime"
                        value={formData.readTime}
                        onChange={handleChange}
                        placeholder="e.g., 5 min read"
                    />
                </div>

                <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                    <input
                        type="checkbox"
                        name="featured"
                        checked={formData.featured}
                        onChange={handleChange}
                        id="featured-checkbox"
                        style={{ width: 'auto', margin: 0 }}
                    />
                    <label htmlFor="featured-checkbox" style={{ margin: 0 }}>
                        Mark as Featured Article
                    </label>
                </div>

                <button type="submit" className="admin-btn" disabled={loading}>
                    {loading ? 'Saving...' : 'Save Insight'}
                </button>
            </form>
        </AdminLayout>
    );
};

export default InsightForm;
