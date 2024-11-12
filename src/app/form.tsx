'use client';
import { Controller, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

// Define the schema using yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required").max(100, "Name can't exceed 100 characters"),
  portfolioLink: yup
    .string()
    .required("Portfolio link is required")
    .url("Enter a valid URL"),
  socialLink: yup
    .string()
    .required("Social link is required")
    .url("Enter a valid URL"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\+\d{1,3}\d{7,14}$/, "Enter a valid phone number (e.g., +1234567890)"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email address"),
  category: yup.string().required("Category is required"),
});

export default function Form() {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const { control, handleSubmit, formState: { errors } } = methods;

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <FormProvider {...methods}>
        <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4 text-center">Please Fill The Form</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium">Name</label>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <>
                  <input
                    className="border p-2 rounded w-full"
                    placeholder="Enter Your Name"
                    {...field}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </>
              )}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Portfolio Link</label>
            <Controller
              control={control}
              name="portfolioLink"
              render={({ field }) => (
                <>
                  <input
                    className="border p-2 rounded w-full"
                    placeholder="Please Provide The Link"
                    {...field}
                  />
                  {errors.portfolioLink && <p className="text-red-500 text-xs mt-1">{errors.portfolioLink.message}</p>}
                </>
              )}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Social Link</label>
            <Controller
              control={control}
              name="socialLink"
              render={({ field }) => (
                <>
                  <input
                    className="border p-2 rounded w-full"
                    placeholder="Please Provide the Link"
                    {...field}
                  />
                  {errors.socialLink && <p className="text-red-500 text-xs mt-1">{errors.socialLink.message}</p>}
                </>
              )}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Phone</label>
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <>
                  <input
                    className="border p-2 rounded w-full"
                    placeholder="+91 8603127350"
                    {...field}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </>
              )}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <>
                  <input
                    className="border p-2 rounded w-full"
                    placeholder="Sharmaneeraj1810@gmail.com"
                    {...field}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </>
              )}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Category</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="radio" value="General" {...methods.register("category")} className="mr-2" />
                General
              </label>
              <label className="flex items-center">
                <input type="radio" value="Career" {...methods.register("category")} className="mr-2" />
                Career
              </label>
            </div>
            {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
