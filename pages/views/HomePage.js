import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import TopicCard from '../components/TopicCard.js';
import MaterialsModal from '../modals/MaterialsModal.js';
import AddTopicModal from '../modals/AddTopicModal.js';
import { initialTopics } from '../data/topics.js';

const { useState } = React;

// Home Page Component
const HomePage = () => {
    const [topics, setTopics] = useState(initialTopics);
    const [showMaterials, setShowMaterials] = useState(false);
    const [showAddTopic, setShowAddTopic] = useState(false);

    const handleAddTopic = ({ title, description }) => {
        const newTopic = {
            id: topics.length + 1,
            title,
            description,
            progress: 0,
            icon: "fa-book"
        };
        setTopics([...topics, newTopic]);
    };

    const handleSelectTopic = (topic) => {
        alert(`Selected: ${topic.title}\n\nProgress: ${topic.progress}%`);
    };

    return React.createElement('div', { className: 'min-h-screen bg-gray-100' },
        // Header
        React.createElement(Header),
        
        // Main Content
        React.createElement('main', { className: 'container mx-auto px-4 py-6' },
            // Welcome Section
            React.createElement('div', { className: 'bg-gradient-to-r from-primary to-primary-light text-white rounded-2xl p-6 mb-6 shadow-lg' },
                React.createElement('h2', { className: 'text-2xl font-bold mb-2' },
                    React.createElement('i', { className: 'fa-solid fa-hand-wave mr-2' }),
                    'Welcome to ISYA301 Study App!'
                ),
                React.createElement('p', { className: 'opacity-90' }, 'Track your progress and master your topics')
            ),

            // View Materials Button
            React.createElement('button', {
                onClick: () => setShowMaterials(true),
                className: 'w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary-dark transition mb-6 flex items-center justify-center space-x-2 shadow-md'
            },
                React.createElement('i', { className: 'fa-solid fa-folder-open' }),
                React.createElement('span', null, 'View Study Materials')
            ),

            // Topics Header
            React.createElement('div', { className: 'flex items-center justify-between mb-4' },
                React.createElement('h3', { className: 'text-lg font-bold text-gray-800' },
                    React.createElement('i', { className: 'fa-solid fa-list-check mr-2 text-primary' }),
                    'Your Study Topics'
                ),
                React.createElement('span', { className: 'text-sm text-gray-500' }, `${topics.length} topics`)
            ),

            // Topics Grid
            React.createElement('div', { className: 'grid gap-4 md:grid-cols-2' },
                topics.map(topic => 
                    React.createElement(TopicCard, {
                        key: topic.id,
                        topic: topic,
                        onSelect: handleSelectTopic
                    })
                )
            )
        ),

        // Floating Action Button
        React.createElement('button', {
            onClick: () => setShowAddTopic(true),
            className: 'fixed bottom-6 right-6 bg-primary text-white w-14 h-14 rounded-full shadow-lg hover:bg-primary-dark transition flex items-center justify-center text-xl hover:scale-110'
        },
            React.createElement('i', { className: 'fa-solid fa-plus' })
        ),

        // Modals
        React.createElement(MaterialsModal, { isOpen: showMaterials, onClose: () => setShowMaterials(false) }),
        React.createElement(AddTopicModal, { isOpen: showAddTopic, onClose: () => setShowAddTopic(false), onAdd: handleAddTopic }),

        // Footer
        React.createElement(Footer)
    );
};

export default HomePage;
