import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

// Resolve directory pathing for serving static assets safely
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Instruct the server to look into the 'public' directory for index.html
app.use(express.static(path.join(__dirname, 'public')));

// Fallback path router to seamlessly redirect any requests to the homepage dashboard
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 QonnaAI Server running smoothly on http://localhost:${PORT}`);
});
