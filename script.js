// Theme Toggle
document.getElementById('light-mode').addEventListener('click', () => {
    document.body.classList.remove('dark-mode', 'eye-saver');
});

document.getElementById('dark-mode').addEventListener('click', () => {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('eye-saver');
});

document.getElementById('eye-saver').addEventListener('click', () => {
    document.body.classList.add('eye-saver');
    document.body.classList.remove('dark-mode');
});

// Encryption/Decryption Logic
function encryptText(text, password) {
    return CryptoJS.AES.encrypt(text, password).toString();
}

function decryptText(encryptedText, password) {
    const bytes = CryptoJS.AES.decrypt(encryptedText, password);
    return bytes.toString(CryptoJS.enc.Utf8);
}

// Event Listeners
document.getElementById('encrypt-btn').addEventListener('click', () => {
    const text = document.getElementById('input-text').value;
    const password = document.getElementById('password').value;
    if (!text || !password) {
        alert('Please enter text and password!');
        return;
    }
    const encrypted = encryptText(text, password);
    document.getElementById('output-text').value = encrypted;
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
    const encryptedText = document.getElementById('input-text').value;
    const password = document.getElementById('password').value;
    if (!encryptedText || !password) {
        alert('Please enter encrypted text and password!');
        return;
    }
    try {
        const decrypted = decryptText(encryptedText, password);
        document.getElementById('output-text').value = decrypted;
    } catch (e) {
        alert('Failed to decrypt! Check your password.');
    }
});

document.getElementById('copy-btn').addEventListener('click', () => {
    const outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
});
