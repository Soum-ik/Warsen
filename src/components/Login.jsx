import { useState } from 'react';
import { Eye, EyeOff, X } from 'lucide-react';
import logo from '../../public/betaing.jpg'

const LoginForm = ({ toggleLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validateForm = () => {
        let newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.password) newErrors.password = 'Password is required';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted:', formData);
            // Handle form submission here
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black'>
            <div className="bg-gray-900 text-white p-6 rounded-lg w-full mx-auto max-w-lg relative">
                <div className='absolute top-[10px] right-[10px]'>
                    <X size={20} onClick={toggleLogin} />
                </div>
                <div className='flex justify-center items-center mx-auto w-[100px] h-[100px] mb-4'>
                    <img src={logo} alt="Logo placeholder" />
                </div>
                <p className="mb-4 text-center">Login to your Desh88 account</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-gray-800 p-4 rounded"
                            placeholder="Email"
                        />
                        {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                    </div>

                    <div className="relative">
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full bg-gray-800 p-4 rounded"
                            placeholder="Password"
                        />
                        <button
                            type="button"
                            className="absolute right-2 top-2 text-gray-400"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                        {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
                    </div>

                    <button type="submit" className="w-full bg-yellow-500 text-black p-4 rounded font-bold">
                        Login
                    </button>
                </form>
                {/* <p className="mt-4 text-center text-sm">
                    {` Don't have an account? `}<a href="#" className="text-yellow-500">Sign Up</a>
                </p> */}
            </div>
        </div>
    );
};

export default LoginForm;