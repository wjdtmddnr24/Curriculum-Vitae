const GradientBackground = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-fixed bg-gradient-to-br from-pink-800 via-purple-800 to-indigo-800 opacity-0 dark:opacity-100 transition-opacity duration-500"></div>
      <div className="fixed inset-0 -z-10 bg-fixed bg-gradient-to-br from-green-400 via-cyan-500 to-blue-500 dark:opacity-0 transition-opacity duration-500"></div>
    </>
  );
};

export default GradientBackground;
