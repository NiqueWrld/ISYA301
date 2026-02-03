// Header Component
const Header = () => {
    return React.createElement('header', { className: 'bg-primary text-white shadow-lg sticky top-0 z-50' },
        React.createElement('div', { className: 'container mx-auto px-4 py-4' },
            React.createElement('div', { className: 'flex items-center justify-between' },
                React.createElement('div', { className: 'flex items-center space-x-3' },
                    React.createElement('i', { className: 'fa-solid fa-graduation-cap text-2xl' }),
                    React.createElement('h1', { className: 'text-xl font-bold' }, 'ISYA301 Study App')
                ),
                React.createElement('nav', { className: 'flex space-x-4' },
                    React.createElement('button', { className: 'hover:bg-primary-dark px-3 py-2 rounded transition' },
                        React.createElement('i', { className: 'fa-solid fa-home' })
                    ),
                    React.createElement('button', { className: 'hover:bg-primary-dark px-3 py-2 rounded transition' },
                        React.createElement('i', { className: 'fa-solid fa-cog' })
                    )
                )
            )
        )
    );
};

export default Header;
