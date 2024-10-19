import { useState } from 'react';
import { Eye, EyeOff, X } from 'lucide-react';
import logo from '../../public/betaing.jpg'

const RegistrationForm = ({ toggleSignUp }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        mobileNumber: '',
        referralCode: '',
        agreeToTerms: false
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const validateForm = () => {
        let newErrors = {};
        if (!formData.fullName) newErrors.fullName = 'Full Name is required';
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
        if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
        else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords must match';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.mobileNumber) newErrors.mobileNumber = 'Mobile Number is required';
        if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the Terms & Conditions and Privacy Policy';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
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
        <div className=' fixed inset-0 z-50 flex items-center justify-center bg-black  '>
            <div className="bg-gray-900 text-white p-6 rounded-lg w-full mx-auto max-w-lg relative">
                <div className='absolute top-[10px] right-[10px]'>
                    <X size={20} onClick={toggleSignUp} />
                </div>
                <div className='flex justify-center items-center mx-auto w-[100px]'>
                    <img src={logo} alt="Desh88" />
                </div>
                <p className="mb-4 text-center">Create an account on Desh88 to play</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full bg-gray-800 p-4 rounded"
                            placeholder="Full Name"
                        />
                        {errors.fullName && <div className="text-red-500 text-sm">{errors.fullName}</div>}
                    </div>

                    <div>
                        <input
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full bg-gray-800 p-4 rounded"
                            placeholder="Username"
                        />
                        {errors.username && <div className="text-red-500 text-sm">{errors.username}</div>}
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

                    <div className="relative">
                        <input
                            name="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full bg-gray-800 p-4 rounded"
                            placeholder="Confirm Password"
                        />
                        <button
                            type="button"
                            className="absolute right-2 top-2 text-gray-400"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                        {errors.confirmPassword && <div className="text-red-500 text-sm">{errors.confirmPassword}</div>}
                    </div>

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

                    <div className="flex">
                        <span className="bg-gray-800 p-4 rounded-l">+880</span>
                        <input
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            className="w-full bg-gray-800 p-4 rounded-r"
                            placeholder="Mobile Number"
                        />
                    </div>
                    {errors.mobileNumber && <div className="text-red-500 text-sm">{errors.mobileNumber}</div>}

                    <div>
                        <input
                            name="referralCode"
                            value={formData.referralCode}
                            onChange={handleChange}
                            className="w-full bg-gray-800 p-4 rounded"
                            placeholder="Referral Code"
                        />
                    </div>

                    <div>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <span className="text-sm">I agree to Terms & Condition and Privacy Policy</span>
                        </label>
                        {errors.agreeToTerms && <div className="text-red-500 text-sm">{errors.agreeToTerms}</div>}
                    </div>

                    <button type="submit" className="w-full bg-yellow-500 text-black p-4 rounded font-bold">
                        Join Now
                    </button>
                </form>
                <p className="mt-4 text-center text-sm">
                    Already have an account? <a href="#" className="text-yellow-500">Login</a>
                </p>
            </div>
        </div>
    );
};

export default RegistrationForm;