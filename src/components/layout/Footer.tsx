import React from 'react';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[--color-dark] text-white py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                            <span className="text-[--color-primary]">Oak</span>
                            <span className="text-white">flow</span>
                        </h2>
                        <p className="text-gray-300 mb-4">
                            Découvrez des contenus vidéo sélectionnés sur la technologie, l'IA et l'innovation.
                            Restez inspiré avec les dernières actualités et analyses.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-[--color-primary] transition-colors">
                                    À Propos
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-[--color-primary] transition-colors">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-[--color-primary] transition-colors">
                                    Politique de Confidentialité
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-[--color-primary] transition-colors">
                                    Conditions d'Utilisation
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Suivez-moi</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/in/de-la-rue/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[--color-primary] transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {currentYear} Oakflow Magazine. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
