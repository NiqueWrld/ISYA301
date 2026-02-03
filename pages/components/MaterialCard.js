import { getFileIcon } from '../utils/helpers.js';

// Material Card Component
const MaterialCard = ({ material, onOpen }) => {
    const fileIcon = getFileIcon(material.type);
    
    return React.createElement('div', {
        className: 'bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow cursor-pointer flex items-center space-x-4',
        onClick: () => onOpen(material)
    },
        React.createElement('div', { className: 'text-3xl' },
            React.createElement('i', { className: `fa-solid ${fileIcon}` })
        ),
        React.createElement('div', { className: 'flex-1 min-w-0' },
            React.createElement('h4', { className: 'font-medium text-gray-800 truncate' }, material.name),
            React.createElement('p', { className: 'text-gray-400 text-sm' }, material.size)
        ),
        React.createElement('i', { className: 'fa-solid fa-chevron-right text-gray-300' })
    );
};

export default MaterialCard;
