// Footer Component
const Footer = () => {
    return React.createElement('footer', { className: 'bg-white border-t mt-8 py-4' },
        React.createElement('div', { className: 'container mx-auto px-4 text-center text-gray-500 text-sm' },
            React.createElement('p', null,
                React.createElement('i', { className: 'fa-solid fa-graduation-cap mr-1' }),
                'ISYA301 Study App © 2026'
            )
        )
    );
};

export default Footer;
