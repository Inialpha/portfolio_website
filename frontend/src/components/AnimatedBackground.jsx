function AnimatedBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-10">
      <div className="absolute w-25 h-25 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 animate-float" 
           style={{
             top: '20%',
             left: '10%',
             animationDelay: '0s'
           }}>
      </div>
      <div className="absolute w-15 h-15 rounded-full bg-gradient-to-br from-pink-500 to-red-500 animate-float-delayed" 
           style={{
             top: '60%',
             right: '20%',
             animationDelay: '7s'
           }}>
      </div>
      <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 animate-float-delayed-2" 
           style={{
             bottom: '30%',
             left: '70%',
             animationDelay: '14s'
           }}>
      </div>
    </div>
  )
}

export default AnimatedBackground