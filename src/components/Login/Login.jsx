import React, { useState, useEffect } from 'react';

const Login = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    // Clear form inputs on mount for privacy
    setName('');
    setPhone('');
    setUsername('');
    setPassword('');
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const storedCredentials = JSON.parse(localStorage.getItem('credentials'));
    if (
      storedCredentials &&
      storedCredentials.username === username &&
      storedCredentials.password === password
    ) {
      alert('Login successful');
      onLogin(true); // Updates isLoggedIn state to true
    } else {
      alert('Invalid username or password');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (name && phone && username && password) {
      const credentials = { name, phone, username, password };
      localStorage.setItem('credentials', JSON.stringify(credentials));
      alert('Account created successfully! You can now log in.');
      setIsSignUp(false); // Switch back to login after sign-up
      setName('');
      setPhone('');
      setUsername('');
      setPassword('');
    } else {
      alert('Please fill in all fields to sign up.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          {isSignUp ? 'Sign Up' : 'Login'}
        </h2>
        <form
          onSubmit={isSignUp ? handleSignUp : handleLogin}
          className="space-y-6"
        >
          {isSignUp && (
            <>
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="text"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
                />
              </div>
            </>
          )}
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-shadow"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 rounded-lg hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-colors duration-300"
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <p className="text-center text-gray-700 mt-4">
          {isSignUp
            ? 'Already have an account?'
            : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
          >
            {isSignUp ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
