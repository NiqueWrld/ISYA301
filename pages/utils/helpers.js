// Get file icon based on type
export const getFileIcon = (type) => {
    switch(type) {
        case 'pdf': return 'fa-file-pdf text-red-500';
        case 'pptx': return 'fa-file-powerpoint text-orange-500';
        case 'docx': return 'fa-file-word text-blue-500';
        case 'xlsx': return 'fa-file-excel text-green-500';
        case 'txt': return 'fa-file-lines text-gray-500';
        case 'jpg':
        case 'png': return 'fa-file-image text-purple-500';
        default: return 'fa-file text-gray-400';
    }
};

// Format file size
export const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
};

// Generate unique ID
export const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
