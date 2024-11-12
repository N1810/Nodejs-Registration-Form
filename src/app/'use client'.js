'use client'
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    console.log(data)
  } ;

  // console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Please Fill The Form</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium">Name</label>
          <input
            {...register('name', { required: "Name is required", maxLength: 100 })}
            className="border p-2 rounded w-full"
            placeholder="Enter Your Name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Portfolio Link</label>
          <input
            {...register('portfolioLink', {
              required: "Portfolio link is required",
              pattern: { value: /^https?:\/\/\S+$/i, message: "Enter a valid URL" }
            })}
            className="border p-2 rounded w-full"
            placeholder="Please Provide The Link"
          />
          {errors.portfolioLink && <p className="text-red-500 text-xs mt-1">{errors.portfolioLink.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Social Link</label>
          <input
            {...register('socialLink', {
              required: "Social link is required",
              pattern: { value: /^https?:\/\/\S+$/i, message: "Enter a valid URL" }
            })}
            className="border p-2 rounded w-full"
            placeholder="Please Provide the Link"
          />
          {errors.socialLink && <p className="text-red-500 text-xs mt-1">{errors.socialLink.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Phone</label>
          <input
            {...register('phone', {
              required: "Phone number is required",
              pattern: { value: /^\+\d{1,3}\d{7,14}$/, message: "Enter a valid phone number (e.g., +1234567890)" }
            })}
            className="border p-2 rounded w-full"
            placeholder="+91 8603127350"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            {...register('email', {
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" }
            })}
            className="border p-2 rounded w-full"
            placeholder="Sharmaneeraj1810@gmail.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Category</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input type="radio" value="General" {...register('category')} defaultChecked className="mr-2" />
              General
            </label>
            <label className="flex items-center">
              <input type="radio" value="Career" {...register('category')} className="mr-2" />
              Career
            </label>
          </div>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}