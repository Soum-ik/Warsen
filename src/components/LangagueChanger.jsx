
import { X } from 'lucide-react';

const LanguageSelector = ({ toggleLanguage }) => {

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-black text-white rounded-lg p-4  w-full mx-auto max-w-xs relative">
                <div className="flex justify-center items-center mb-4 w-full text-center mx-auto">
                    <h2 className="text-lg font-semibold text-center">Select Language</h2>
                    <button onClick={toggleLanguage} className="text-gray-400 hover:text-white absolute top-[10px] right-[10px]">
                        <X size={20} />
                    </button>
                </div>
                <div className="mb-2">Bangladesh</div>
                <div className="flex items-center space-x-2">
                    <img src="https://download.ocms365.com/v2/TC/images/header/flag/bd.webp" alt="Bangladesh Flag" className="w-[50px] h-[30px]" />
                    <button className="px-3 py-1 text-yellow-600   rounded">English</button>
                    <button className="px-3 py-1 text-white   rounded">বাংলা</button>
                </div>
            </div>
        </div>
    );
};

export default LanguageSelector;