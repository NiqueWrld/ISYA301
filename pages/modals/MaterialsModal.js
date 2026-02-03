import MaterialCard from '../components/MaterialCard.js';
import { studyMaterials } from '../data/topics.js';

// Materials Modal Component
const MaterialsModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleOpen = (material) => {
        alert(`Opening: ${material.name}\n\nIn the real app, this would open the file.`);
    };

    return React.createElement('div', { className: 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4' },
        React.createElement('div', { className: 'bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden' },
            // Header
            React.createElement('div', { className: 'bg-primary text-white p-4 flex items-center justify-between' },
                React.createElement('div', { className: 'flex items-center space-x-3' },
                    React.createElement('i', { className: 'fa-solid fa-folder-open text-xl' }),
                    React.createElement('h2', { className: 'text-lg font-semibold' }, 'Study Materials')
                ),
                React.createElement('button', {
                    onClick: onClose,
                    className: 'hover:bg-primary-dark p-2 rounded-full transition'
                },
                    React.createElement('i', { className: 'fa-solid fa-times' })
                )
            ),
            // Content
            React.createElement('div', { className: 'p-4 overflow-y-auto max-h-[60vh]' },
                React.createElement('p', { className: 'text-gray-500 mb-4' }, 'Browse and open your study files'),
                React.createElement('div', { className: 'space-y-3' },
                    studyMaterials.map(material => 
                        React.createElement(MaterialCard, {
                            key: material.id,
                            material: material,
                            onOpen: handleOpen
                        })
                    )
                )
            )
        )
    );
};

export default MaterialsModal;
