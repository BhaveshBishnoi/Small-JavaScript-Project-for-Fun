function countWords() {
    const text = document.getElementById('text').value;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    document.getElementById('wordCount').textContent = `Words: ${words.length}`;
    document.getElementById('charCount').textContent = `Characters: ${text.length}`;
}