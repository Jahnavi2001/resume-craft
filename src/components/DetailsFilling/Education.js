import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { FaEllipsisV } from "react-icons/fa";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import PageNavigation from "../PageNavigation";
import { useDispatch, useSelector } from "react-redux";
import { setEducationData } from "../../store/userSlice";

const Education = () => {
  const [showEducationDataIndex, setShowEducationDataIndex] = useState(0);

  const dispatch = useDispatch();
  const educationData = useSelector((store) => store.user.educationData);

  const formik = useFormik({
    initialValues: {
      educationData,
    },
  });

  const handleAddEducationData = () => {
    const newEducationData = [
      ...formik.values.educationData,
      {
        id: uuidv4(),
        schoolName: "",
        schoolLocation: "",
        startDate: "",
        endDate: "",
        degree: "",
        field: "",
        description: "",
      },
    ];
    formik.setFieldValue("educationData", newEducationData);
  };

  useEffect(() => {
    dispatch(setEducationData(formik.values.educationData));
  }, [formik.values]);

  const handleDeleteEducationData = (id) => {
    if (formik.values.educationData.length <= 1) return;

    const newEducationData = formik.values.educationData.filter(
      (item) => item.id !== id
    );
    formik.setFieldValue("educationData", newEducationData);
  };

  const handleShowEducationData = (index) => {
    index !== showEducationDataIndex
      ? setShowEducationDataIndex(index)
      : setShowEducationDataIndex(-1);
  };

  return (
    <>
      <PageNavigation
        prev="/editor/education-tips"
        next="/editor/skills-tips"
      />
      <div
        className="px-6 py-4 rounded-md border"
        style={{
          boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.24)",
          fontFamily: "Poppins",
          borderTop: "3px solid #00a390"
        }}
      >
        <h1 className="text-xl font-semibold">Education</h1>
        <p className="text-gray-400">
          Add your most relevant education, including programs you're currently
          enrolled in.
        </p>

        {formik.values.educationData.map((item, index) => (
          <div className="border rounded-md my-4" key={item.id}>
            <div className="flex items-center justify-between p-3">
              <span className="text-gray-400">
                <FaEllipsisV />
              </span>
              <span className="flex gap-6">
                <span
                  className="cursor-pointer text-[#00a390]"
                  onClick={() => handleShowEducationData(index)}
                >
                  {showEducationDataIndex === index ? (
                    <KeyboardArrowUpOutlinedIcon />
                  ) : (
                    <KeyboardArrowDownOutlinedIcon />
                  )}
                </span>
                <span
                  className="cursor-pointer text-red-400"
                  onClick={() => handleDeleteEducationData(item.id)}
                >
                  <DeleteOutlineOutlinedIcon />
                </span>
              </span>
            </div>

            {showEducationDataIndex === index && (
              <div>
                <div className="flex gap-6 p-3">
                  <div className="w-1/2">
                    <label>School Name</label>
                    <input
                      type="text"
                      id={`educationData[${index}].schoolName`}
                      value={formik.values.educationData[index].schoolName}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="w-1/2 ">
                    <label>School Location</label>
                    <input
                      type="text"
                      className="dark:text-black"
                      id={`educationData[${index}].schoolLocation`}
                      value={formik.values.educationData[index].schoolLocation}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div className="flex gap-6 p-3">
                  <div className="w-1/2">
                    <label>Degree</label>
                    <input
                      type="text"
                      className="dark:text-black"
                      id={`educationData[${index}].degree`}
                      value={formik.values.educationData[index].degree}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="w-1/2 ">
                    <label>Field of Study</label>
                    <input
                      type="text"
                      className="dark:text-black"
                      id={`educationData[${index}].field`}
                      value={formik.values.educationData[index].field}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div className="flex gap-6 p-3">
                  <div className="w-1/2">
                    <label>Start Date</label>
                    <input
                      type="date"
                      className="dark:text-black"
                      id={`educationData[${index}].startDate`}
                      onChange={formik.handleChange}
                      value={formik.values.educationData[index].startDate}
                    />
                  </div>
                  <div className="w-1/2">
                    <label>End Date</label>
                    <input
                      type="date"
                      className="dark:text-black"
                      id={`educationData[${index}].endDate`}
                      onChange={formik.handleChange}
                      value={formik.values.educationData[index].endDate}
                    />
                  </div>
                </div>

                <div className="flex flex-col p-3">
                  <label>Description</label>
                  <textarea
                    id={`educationData[${index}].description`}
                    className="dark:text-black"
                    onChange={formik.handleChange}
                    value={formik.values.educationData[index].description}
                    rows="5"
                    placeholder="Ex- Supported mentor teacher throughout lessons by preparing..."
                  ></textarea>
                </div>
              </div>
            )}
          </div>
        ))}

        <button
          className="flex items-center text-[#00a390]"
          onClick={handleAddEducationData}
        >
          <AddOutlinedIcon />
          Add more education
        </button>
      </div>
    </>
  );
};

export default Education;
