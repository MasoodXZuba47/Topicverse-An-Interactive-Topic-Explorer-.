import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Atom, Waves, Rocket, BookOpen, X, ChevronRight } from 'lucide-react';
import './App.css';

const topics = [
  {
    id: 'quantum',
    title: 'Quantum Physics',
    subtitle: 'The Fabric of Reality',
    icon: <Atom size={32} />,
    color: 'from-purple-500 to-indigo-600',
    description: 'Explore the bizarre and fascinating world of subatomic particles, where the rules of classical physics break down.',
    content: 'Quantum mechanics is a fundamental theory in physics that provides a description of the physical properties of nature at the scale of atoms and subatomic particles. It is the foundation of all quantum physics including quantum chemistry, quantum field theory, quantum technology, and quantum information science.'
  },
  {
    id: 'deepsea',
    title: 'Deep Sea',
    subtitle: 'The Final Frontier on Earth',
    icon: <Waves size={32} />,
    color: 'from-blue-500 to-cyan-600',
    description: 'Dive into the abyssal zones where alien-like creatures thrive in complete darkness and crushing pressure.',
    content: 'The deep sea or deep layer is the lowest layer in the ocean, existing below the thermocline and above the seabed, at a depth of 1000 fathoms or more. Light does not penetrate to these depths, making it an alien ecosystem on our very own planet.'
  },
  {
    id: 'astro',
    title: 'Astrophysics',
    subtitle: 'Mysteries of the Cosmos',
    icon: <Rocket size={32} />,
    color: 'from-orange-500 to-red-600',
    description: 'Uncover the secrets of black holes, dark matter, and the origin of our expanding universe.',
    content: 'Astrophysics is a science that employs the methods and principles of physics and chemistry in the study of astronomical objects and phenomena. Among the subjects studied are the Sun, other stars, galaxies, extrasolar planets, the interstellar medium and the cosmic microwave background.'
  },
  {
    id: 'stoicism',
    title: 'Stoicism',
    subtitle: 'Philosophy of Resilience',
    icon: <BookOpen size={32} />,
    color: 'from-emerald-500 to-teal-600',
    description: 'Ancient wisdom for modern chaos. Learn how to master your mind and endure adversity.',
    content: 'Stoicism is a school of Hellenistic philosophy founded by Zeno of Citium in Athens in the early 3rd century BC. It is a philosophy of personal ethics informed by its system of logic and its views on the natural world. According to its teachings, as social beings, the path to eudaimonia (happiness) is found in accepting the moment as it presents itself, by not allowing oneself to be controlled by the desire for pleasure or fear of pain.'
  }
];

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-6">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-[#0b0f19]">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]" />
      </div>

      <header className="mb-16 text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 gradient-text track-tight"
        >
          Topicverse
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto"
        >
          Select a subject below to embark on an interactive journey of knowledge and discovery.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl z-10 px-4 md:auto-rows-[300px]">
        {topics.map((topic, index) => (
          <motion.div
            key={topic.id}
            layoutId={`card-${topic.id}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
            onClick={() => setSelectedTopic(topic)}
            className="glass-panel rounded-3xl p-6 cursor-pointer hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full group relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${topic.color} opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-500`} />
            
            <motion.div layoutId={`icon-${topic.id}`} className={`p-4 rounded-2xl bg-gradient-to-br ${topic.color} self-start mb-6 text-white shadow-lg`}>
              {topic.icon}
            </motion.div>
            
            <motion.div layoutId={`title-${topic.id}`}>
              <h2 className="text-2xl font-bold text-white mb-2">{topic.title}</h2>
              <p className="text-sm font-medium text-indigo-300 mb-4">{topic.subtitle}</p>
            </motion.div>
            
            <p className="text-gray-400 text-sm mt-auto mb-6">{topic.description}</p>
            
            <div className="flex items-center text-sm font-semibold text-white/70 group-hover:text-white mt-auto">
              Explore <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedTopic && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTopic(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            
            <motion.div
              layoutId={`card-${selectedTopic.id}`}
              className="glass-panel w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden relative z-10 flex flex-col bg-[#131b2c]"
            >
              <div className={`absolute top-0 left-0 right-0 h-48 sm:h-64 bg-gradient-to-br ${selectedTopic.color} opacity-20`} />
              
              <button 
                onClick={() => setSelectedTopic(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="p-8 sm:p-12 pt-16 sm:pt-24 relative z-10 flex-1 overflow-y-auto custom-scrollbar">
                <motion.div layoutId={`icon-${selectedTopic.id}`} className={`inline-block p-5 rounded-3xl bg-gradient-to-br ${selectedTopic.color} text-white shadow-xl mb-8`}>
                  {React.cloneElement(selectedTopic.icon, { size: 48 })}
                </motion.div>
                
                <motion.div layoutId={`title-${selectedTopic.id}`} className="mb-8">
                  <h2 className="text-4xl sm:text-6xl font-bold text-white mb-3">{selectedTopic.title}</h2>
                  <p className="text-xl text-indigo-300">{selectedTopic.subtitle}</p>
                </motion.div>

                <div className="prose prose-invert max-w-none">
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-gray-300 leading-relaxed mb-6"
                  >
                    {selectedTopic.content}
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
                  >
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <h4 className="text-white font-semibold mb-2">Did You Know?</h4>
                      <p className="text-sm text-gray-400">Deep study into this subject reshapes our understanding of reality, bridging the gap between theoretical models and observed phenomena.</p>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <h4 className="text-white font-semibold mb-2">Key Concepts</h4>
                      <ul className="text-sm text-gray-400 list-disc list-inside">
                        <li>Fundamental principles</li>
                        <li>Historical origins</li>
                        <li>Modern applications</li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
