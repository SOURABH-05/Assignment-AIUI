import { useState } from 'react';
import Header from './components/Header';
import AvatarCard from './components/AvatarCard';
import CreateAvatarModal from './components/CreateAvatarModal';


function App() {
  // Dummy avatar data
  const dummyAvatars = [
    {
      id: 1,
      first_name: "RAM",
      last_name: "PAL",
      avatar: "https://imgs.search.brave.com/yb2VkDZkoxVEPfFQe27OfHanxMBwqUudHcVGVFwAjtQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NjQ0Yjc5MmNmYzU0/N2RkMzVmMmFkZTYv/NjZhMTI4YzRlZjE1/ZGFlZGE1ZTNjOTEw/X21hbl9hbmltZS5h/dmlm",
      email: "rampal@example.com"
    },
    {
      id: 2,
      first_name: "SOM",
      last_name: "PAL",
      avatar: "https://imgs.search.brave.com/yb2VkDZkoxVEPfFQe27OfHanxMBwqUudHcVGVFwAjtQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NjQ0Yjc5MmNmYzU0/N2RkMzVmMmFkZTYv/NjZhMTI4YzRlZjE1/ZGFlZGE1ZTNjOTEw/X21hbl9hbmltZS5h/dmlm",
      email: "sompal@example.com"
    },
    {
      id: 3,
      first_name: "SAT",
      last_name: "PAL",
      avatar: "https://imgs.search.brave.com/yb2VkDZkoxVEPfFQe27OfHanxMBwqUudHcVGVFwAjtQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NjQ0Yjc5MmNmYzU0/N2RkMzVmMmFkZTYv/NjZhMTI4YzRlZjE1/ZGFlZGE1ZTNjOTEw/X21hbl9hbmltZS5h/dmlm",
      email: "satpal@example.com"
    }
  ];

  const [avatars, setAvatars] = useState(dummyAvatars);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {avatars.map(avatar => (
            <AvatarCard 
              key={avatar.id}
              name={`${avatar.first_name} ${avatar.last_name}`}
              image={avatar.avatar}
              onEdit={() => console.log(`Edit ${avatar.id}`)}
            />
          ))}
        </div>
      </main>

      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>

      <CreateAvatarModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;