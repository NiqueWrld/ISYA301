// Topic Card Component
const TopicCard = ({ topic, onSelect }) => {
    return React.createElement('div', {
        className: 'bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-primary',
        onClick: () => onSelect(topic)
    },
        React.createElement('div', { className: 'flex items-start space-x-4' },
            React.createElement('div', { className: 'bg-primary-light/20 p-3 rounded-lg' },
                React.createElement('i', { className: `fa-solid ${topic.icon} text-primary text-xl` })
            ),
            React.createElement('div', { className: 'flex-1' },
                React.createElement('h3', { className: 'font-semibold text-gray-800 mb-1' }, topic.title),
                React.createElement('p', { className: 'text-gray-500 text-sm mb-3' }, topic.description),
                React.createElement('div', { className: 'flex items-center space-x-3' },
                    React.createElement('div', { className: 'flex-1 bg-gray-200 rounded-full h-2' },
                        React.createElement('div', {
                            className: 'progress-bar bg-primary h-2 rounded-full',
                            style: { width: `${topic.progress}%` }
                        })
                    ),
                    React.createElement('span', { className: 'text-primary font-bold text-sm' }, `${topic.progress}%`)
                )
            )
        )
    );
};

export default TopicCard;
