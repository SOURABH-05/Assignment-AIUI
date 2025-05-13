export default function Header() {
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return 'Good Morning';
      if (hour < 18) return 'Good Afternoon';
      return 'Good Evening';
    };
  
    return (
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">AI Dashboard</h1>
          <p className="text-gray-600 mt-2">
            {getGreeting()}, User! Welcome back to your dashboard.
          </p>
        </div>
      </header>
    );
  }