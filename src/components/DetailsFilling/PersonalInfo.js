import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { validateEmail } from "../../utils/validate";
import PageNavigation from "../PageNavigation";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPersonalInfo } from "../../store/userSlice";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user.personalInfo);
  const [imagePreview, setImagePreview] = useState(null);

  const formik = useFormik({
    initialValues: userData,
    onSubmit: () => {
      navigate("/editor/work-history-tips");
    },
    validate: (values) => {
      let errors = {};
      if (!validateEmail(values.email)) {
        errors.email = "Please Enter a Valid Email Address";
      }
      if (!values.firstName.length) {
        errors.firstName = "Please Enter a First name";
      }
      if (!values.phoneNumber) {
        errors.phoneNumber = "Please Enter a Phone number";
      }
      return errors;
    },
  });

  useEffect(() => {
    dispatch(setPersonalInfo(formik.values));
  }, [formik.values]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
        formik.setFieldValue("profilePic", event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <PageNavigation
        prev="/"
        next="/editor/work-history"
        onNextClick={formik.handleSubmit}
      />
      <div
        className="px-6 py-4 rounded-md border"
        style={{
          boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.24)",
          fontFamily: "Poppins",
          borderTop: "3px solid #2a64ad",
        }}
      >
        <div>
          <h1 className="text-xl font-semibold">Personal Details</h1>
          <p className="text-gray-400">
            Get started with the basics: your name and contact information.
          </p>

          <div className="flex flex-col md:flex-row gap-6 py-2">
            <div className="md:w-1/2 flex gap-4 items-center">
              <div>
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="previewImage"
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
                  id="upload-profile-pic"
                />
                <label
                  htmlFor="upload-profile-pic"
                  className="border border-[#063970] dark:border-white rounded-full px-2 text-xs text-[#063970] dark:text-white cursor-pointer"
                >
                  Upload Photo
                </label>
              </div>
            </div>
            <div className="md:w-1/2 ">
              <label>Job Title</label>
              <input
                type="text"
                id="jobTitle"
                className="dark:text-black"
                value={formik.values.jobTitle}
                onChange={formik.handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 py-2">
            <div className="md:w-1/2">
              <label>First Name</label>
              <input
                type="text"
                id="firstName"
                className="dark:text-black"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
              {formik.errors.firstName ? (
                <div className="text-sm text-red-400">
                  {formik.errors.firstName}
                </div>
              ) : null}
            </div>
            <div className="md:w-1/2 ">
              <label>Last Name</label>
              <input
                type="text"
                id="lastName"
                className="dark:text-black"
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 py-2">
            <div className="md:w-1/2">
              <label>Phone</label>
              <input
                type="number"
                id="phoneNumber"
                className="dark:text-black"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
              />
              {formik.errors.phoneNumber ? (
                <div className="text-sm text-red-400">
                  {formik.errors.phoneNumber}
                </div>
              ) : null}
            </div>
            <div className="md:w-1/2 ">
              <label>Email Address</label>
              <input
                type="email"
                id="email"
                className="dark:text-black"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email ? (
                <div className="text-sm text-red-400">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 py-2">
            <div className="md:w-1/2">
              <label>City</label>
              <input
                type="text"
                id="city"
                className="dark:text-black"
                value={formik.values.city}
                onChange={formik.handleChange}
              />
            </div>
            <div className="md:w-1/2 ">
              <label>State</label>
              <input
                type="text"
                id="state"
                className="dark:text-black"
                value={formik.values.state}
                onChange={formik.handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 py-2">
            <div className="md:w-1/2">
              <label>LinkedIn</label>
              <input
                type="text"
                id="linkedInUrl"
                className="dark:text-black"
                value={formik.values.linkedInUrl}
                onChange={formik.handleChange}
              />
            </div>
            <div className="md:w-1/2 ">
              <label>Github</label>
              <input
                type="text"
                id="githubUrl"
                className="dark:text-black"
                value={formik.values.githubUrl}
                onChange={formik.handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 py-2">
            <div className="md:w-1/2">
              <label className="text-sm">Portfolio</label>
              <input
                type="text"
                id="portfolioLink"
                className="dark:text-black"
                value={formik.values.portfolioLink}
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PersonalInfo;
