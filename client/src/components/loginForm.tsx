
import { useNavigate } from "react-router";
import Logo from "../images/logo.png"
import { useForm } from 'react-hook-form';

type LoginProps = {
    email: string;
    password: string;
}

const LoginForm = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginProps>();

    const onSubmit = (data: any) => {

        console.log('Form Data:', data);
        // Handle login logic here
        if (data.email && data.password) {
            navigate('/dashboard')
        }

    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <img
                    src={Logo}
                    alt="Logo"
                    className="mx-auto mb-6 w-24"
                />
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">Welcome Back</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Enter a valid email address',
                                },
                            })}
                            className={`w-full px-4 py-2 text-sm bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                } rounded-lg focus:outline-none focus:ring ${errors.email ? 'focus:ring-red-500' : 'focus:ring-blue-300'
                                }`}
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters',
                                },
                            })}
                            className={`w-full px-4 py-2 text-sm bg-gray-50 border ${errors.password ? 'border-red-500' : 'border-gray-300'
                                } rounded-lg focus:outline-none focus:ring ${errors.password ? 'focus:ring-red-500' : 'focus:ring-blue-300'
                                }`}
                            placeholder="Enter your password"
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
