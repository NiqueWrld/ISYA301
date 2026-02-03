const { useState } = React;

// Add Topic Modal Component
const AddTopicModal = ({ isOpen, onClose, onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description) {
            onAdd({ title, description });
            setTitle('');
            setDescription('');
            onClose();
        }
    };

    return React.createElement('div', { className: 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4' },
        React.createElement('div', { className: 'bg-white rounded-2xl w-full max-w-md overflow-hidden' },
            // Header
            React.createElement('div', { className: 'bg-primary text-white p-4 flex items-center justify-between' },
                React.createElement('h2', { className: 'text-lg font-semibold' }, 'Add New Topic'),
                React.createElement('button', {
                    onClick: onClose,
                    className: 'hover:bg-primary-dark p-2 rounded-full transition'
                },
                    React.createElement('i', { className: 'fa-solid fa-times' })
                )
            ),
            // Form
            React.createElement('form', { onSubmit: handleSubmit, className: 'p-4 space-y-4' },
                // Title Input
                React.createElement('div', null,
                    React.createElement('label', { className: 'block text-gray-700 font-medium mb-2' }, 'Topic Title'),
                    React.createElement('input', {
                        type: 'text',
                        value: title,
                        onChange: (e) => setTitle(e.target.value),
                        className: 'w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary',
                        placeholder: 'Enter topic title',
                        required: true
                    })
                ),
                // Description Input
                React.createElement('div', null,
                    React.createElement('label', { className: 'block text-gray-700 font-medium mb-2' }, 'Description'),
                    React.createElement('textarea', {
                        value: description,
                        onChange: (e) => setDescription(e.target.value),
                        className: 'w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary',
                        rows: 3,
                        placeholder: 'Enter topic description',
                        required: true
                    })
                ),
                // Submit Button
                React.createElement('button', {
                    type: 'submit',
                    className: 'w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition'
                },
                    React.createElement('i', { className: 'fa-solid fa-plus mr-2' }),
                    'Add Topic'
                )
            )
        )
    );
};

export default AddTopicModal;
