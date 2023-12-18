import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import PageNavigation from "../PageNavigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setSkillsData } from "../../store/userSlice";

const Skills = () => {
  const dispatch = useDispatch();
  const skillsData = useSelector((store) => store.user.skillsData);

  const formik = useFormik({
    initialValues: {
      skillsData,
    },
    validate: () => {
      let errors = {};
      return errors;
    },
  });


  useEffect(() => {
    dispatch(setSkillsData(formik.values.skillsData));
  }, [formik.values]);

  const handleAddSkill = () => {
    const newSkillsData = [
      ...formik.values.skillsData,
      {
        id: uuidv4(),
        name: "",
      },
    ];
    formik.setFieldValue("skillsData", newSkillsData);
  };

  const handleDeleteSkill = (id) => {
    if (formik.values.skillsData.length <= 1) {
      formik.setErrors({ skill: "At least one skill set should be present" });
      return;
    }

    const newSkillsData = formik.values.skillsData.filter(
      (item) => item.id !== id
    );
    formik.setFieldValue("skillsData", newSkillsData);
  };


  return (
    <>
      <PageNavigation prev="/editor/skills-tips" next="/editor/summary-tips" />
        <div
          className="px-6 py-4 rounded-md border"
          style={{
            boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.24)",
            fontFamily: "Poppins",
            borderTop: "3px solid #0091ff",
          }}
        >
          <h1 className="text-xl font-semibold">Key Skills</h1>
          <p className="text-gray-400">
            Add relevant professional key skills and proficiencies.
          </p>

          {formik.values.skillsData.map((item, index) => (
            <div className="flex items-center gap-4 py-2" key={item.id}>
              <div className="border rounded-md w-[95%]">
                <div className="w-1/2 flex p-4 items-center gap-4">
                  <label>Skill</label>
                  <div>
                    <input
                      type="text"
                      className="dark:text-black"
                      id={`skillsData[${index}].name`}
                      value={formik.values.skillsData[index].name}
                      onChange={formik.handleChange}
                    />
                    {index === 0 && formik.errors.skill && (
                      <div className="text-red-400 text-sm">
                        {formik.errors.skill}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <span
                  className="text-red-400 cursor-pointer"
                  onClick={() => handleDeleteSkill(item.id)}
                >
                  <DeleteOutlineOutlinedIcon />
                </span>
              </div>
            </div>
          ))}

          <button
            className="flex items-center text-[#0091ff]"
            onClick={handleAddSkill}
          >
            <AddOutlinedIcon />
            Add more skills
          </button>
        </div>
    </>
  );
};

export default Skills;
