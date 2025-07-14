import React from 'react';
import GrainyGradientBg from '../components/grainy-gradient-bg';
import AnimatingWords from '../components/animating-words';
// import GradientGame from '../components/gradient-game';
import mainMemoji from '../assets/mainMemoji.png';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-linen">
            {/* Hero Section */}
            <GrainyGradientBg>
                <section className="py-20 px-5 ">
                    <div className='flex flex-row gap-10'>
                        <img src={mainMemoji} alt='mainMemoji' className='w-1/6 h-auto' />
                        <div className="max-w-4xl text-left">
                            <p className="text-xl text-gray-700 mb-8 max-w-2xl">
                                Hey, my name is Maor
                            </p>
                            <h1 className="text-6xl font-bold text-black mb-6">
                                {`I'm a `}
                                <AnimatingWords words={['developer', 'designer', 'creator']} />
                            </h1>

                            <p className="text-xl text-gray-700 mb-8 max-w-2xl">
                                I like to make great experiences
                            </p>
                            <div className="flex gap-4 justify-start">
                                <button className="bg-black text-linen px-8 py-3 rounded-full hover:bg-xanthous hover:text-black transition-all duration-300">
                                    View My Work
                                </button>
                                <button className="border-2 border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-linen transition-all duration-300">
                                    Get In Touch
                                </button>
                            </div>

                            {/* <GradientGame /> */}
                        </div>
                    </div>
                </section>
            </GrainyGradientBg>

            {/* About Section */}
            <section className="py-16 px-5 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg text-gray-700 mb-6">
                                I'm a dedicated developer with a passion for creating beautiful,
                                functional, and user-friendly applications. With expertise in
                                modern web technologies, I bring ideas to life through clean code
                                and innovative solutions.
                            </p>
                            <p className="text-lg text-gray-700">
                                When I'm not coding, you can find me exploring new technologies,
                                contributing to open-source projects, or sharing knowledge with
                                the developer community.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-xanthous via-razzmatazz to-nonphotoblue p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-white mb-4">Skills</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between text-white">
                                    <span>Frontend Development</span>
                                    <span>90%</span>
                                </div>
                                <div className="w-full bg-white/20 rounded-full h-2">
                                    <div className="bg-white h-2 rounded-full" style={{ width: '90%' }}></div>
                                </div>

                                <div className="flex justify-between text-white">
                                    <span>Backend Development</span>
                                    <span>85%</span>
                                </div>
                                <div className="w-full bg-white/20 rounded-full h-2">
                                    <div className="bg-white h-2 rounded-full" style={{ width: '85%' }}></div>
                                </div>

                                <div className="flex justify-between text-white">
                                    <span>UI/UX Design</span>
                                    <span>80%</span>
                                </div>
                                <div className="w-full bg-white/20 rounded-full h-2">
                                    <div className="bg-white h-2 rounded-full" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 px-5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">What I Do</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-xanthous rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                            <p className="text-gray-700">
                                Creating responsive, modern web applications using the latest
                                technologies and best practices.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-razzmatazz rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Mobile Development</h3>
                            <p className="text-gray-700">
                                Building native and cross-platform mobile applications that
                                provide exceptional user experiences.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-nonphotoblue rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
                            <p className="text-gray-700">
                                Designing intuitive and beautiful user interfaces that enhance
                                user engagement and satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 px-5 bg-gradient-to-r from-xanthous via-razzmatazz to-nonphotoblue">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Let's discuss how I can help bring your ideas to life.
                    </p>
                    <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 font-semibold">
                        Get In Touch
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
