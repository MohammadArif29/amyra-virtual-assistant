# Amyra Virtual Assistant

Amyra is a modern web-based virtual assistant featuring user authentication, profile management (with photo upload), chat with speech recognition, and chat history. The project is built with a Node.js/Express backend and a stylish HTML/CSS/JS frontend.

## Features
- User registration and login (JWT-based authentication)
- Profile management (edit info, upload profile photo)
- Chat interface with speech-to-text (voice input)
- Persistent chat history (localStorage)
- View, search, and clear chat history
- Responsive, modern UI with Vanta.js backgrounds

## Project Structure
```
Virtual Assistant (Amyra)
├── backend
│   └── server.js
├── frontend
│   ├── amyra.html         # Main chat interface
│   ├── profile.html       # Profile settings
│   ├── history.html       # Chat history
│   ├── styles.css         # Shared styles
│   └── uploads/           # Profile photo uploads
├── README.md
└── ...
```

## Getting Started

### Prerequisites
- Node.js & npm
- MongoDB (local or cloud)

### Backend Setup
1. `cd backend`
2. Install dependencies:
   ```sh
   npm install express cors mongoose dotenv bcryptjs jsonwebtoken multer
   ```
3. Create a `.env` file with:
   ```env
   MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/<database_name>?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret_key
   ```
4. Start the server:
   ```sh
   node server.js
   ```

### Frontend Setup
- Open `frontend/amyra.html` in your browser to use the chat.
- Use `profile.html` to manage your profile.
- Use `history.html` to view/search/clear chat history.

## Usage
- Register or log in.
- Chat with Amyra using text or voice.
- Your chat is saved in your browser (localStorage).
- Manage your profile and upload a photo.
- View and search your chat history.

## Customization
- Update styles in `frontend/styles.css`.
- Backend logic in `backend/server.js`.
- Add more features as needed!

## License
MIT 
