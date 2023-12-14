import { useState } from "react";

const PersonalInfo = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="px-6 py-4">
      <h1 className="text-xl font-semibold">Personal Details</h1>
      <p className="text-gray-400">
        Get started with the basics: your name and contact information.
      </p>

      <div className="flex gap-6 py-2">
        <div className="w-1/2 flex gap-4 items-center">
          <div>
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview Image"
                className="w-16 h-14"
              />
            ) : (
              <div className="w-16 h-14 bg-slate-300 rounded-sm"></div>
            )}
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              hidden
              id="actual-btn"
            />
            <label
              for="actual-btn"
              className="border border-[#063970] rounded-full px-2 text-xs text-[#063970] cursor-pointer"
            >
              Upload Photo
            </label>
          </div>
        </div>
        <div className="w-1/2 ">
          <label>Job Title</label>
          <input type="text" />
        </div>
      </div>

      <div className="flex gap-6 py-2">
        <div className="w-1/2">
          <label>First Name</label>
          <input type="text" />
        </div>
        <div className="w-1/2 ">
          <label>Last Name</label>
          <input type="text" />
        </div>
      </div>

      <div className="flex gap-6 py-2">
        <div className="w-1/2">
          <label>Phone</label>
          <input type="text" />
        </div>
        <div className="w-1/2 ">
          <label>Email Address</label>
          <input type="email" />
        </div>
      </div>

      <div className="flex gap-6 py-2">
        <div className="w-1/2">
          <label>City</label>
          <input type="text" />
        </div>
        <div className="w-1/2 ">
          <label>State</label>
          <input type="text" />
        </div>
      </div>

      <div className="flex gap-6 py-2">
        <div className="w-1/2">
          <label>LinkedIn</label>
          <input type="text" />
        </div>
        <div className="w-1/2 ">
          <label>Github</label>
          <input type="text" />
        </div>
      </div>

      <div className="flex gap-6 py-2">
        <div className="w-1/2">
          <label className="text-sm">Portfolio</label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
