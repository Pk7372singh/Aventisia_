# Knowledge Base UI

A modern knowledge base management application built with React and Tailwind CSS.

## Features

- ✅ Create, view, and search knowledge bases
- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Local storage persistence
- ✅ Collapsible sidebar with mobile hamburger menu
- ✅ Pagination support
- ✅ Form validation

## Tech Stack
<img width="1918" height="921" alt="Screenshot 2026-04-03 203110" src="https://github.com/user-attachments/assets/1e6906d7-f6f2-4ff0-a120-4ea1ef11e2b2" />
<img width="1912" height="886" alt="Screenshot 2026-04-03 203242" src="https://github.com/user-attachments/assets/c65931ce-dac7-4d24-aba8-a8bcbb1076f0" />
<img width="1903" height="916" alt="Screenshot 2026-04-03 203559" src="https://github.com/user-attachments/assets/142f030f-7996-4b9b-aaa6-af14<img width="467" height="781" alt="Screenshot 2026-04-05 150740" src="https://github.com/user-attachments/assets/8381c9de-a201-4297-acce-e116e1725c7c" />
ad3767e6" />
<img width="1250" height="808" alt="Screenshot 2026-04-05 150700" src="https://github.com/user-attachments/assets/3b81bec2-69d5-4785-83d0-1cc0a561939f" />

- React 18
- Tailwind CSS
- Lucide Icons
- LocalStorage API

## Installation

```bash
# Clone repository
git clone https://github.com/Pk7372singh/knowledge-base-ui.git

# Navigate to project
cd knowledge-base-ui

# Install dependencies
npm install

# Start development server
npm start


#Usage
Click "Create New" to add a knowledge base

Fill in Name, Description, Vector Store, and LLM Model

Use search bar to filter knowledge bases

Click hamburger menu (☰) on mobile for sidebar

Project Structure
text
knowledge-base-ui/
├── src/
│   ├── components/
│   │   ├── Layout/       # Sidebar, Header, MainLayout
│   │   ├── KnowledgeBase/# Cards, List, EmptyState
│   │   ├── Modal/        # CreateModal
│   │   └── UI/           # Button, Pagination
│   ├── hooks/            # useLocalStorage
│   └── App.jsx
├── public/
└── package.json
