import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Education = () => {
  return (
    <div className="px-6 py-4">
      <h1 className="text-xl font-semibold">Education</h1>
      <p className="text-gray-400">
        Add your most relevant education, including programs you're currently
        enrolled in.
      </p>

      <div className="border rounded-sm">
        <div className="text-right mr-4 mt-4 text-red-400">
          <span className="cursor-pointer"><DeleteOutlineOutlinedIcon /></span>
        </div>
        <div className="flex gap-6 p-4">
          <div className="w-1/2">
            <label>School Name</label>
            <input type="text" />
          </div>
          <div className="w-1/2 ">
            <label>School Location</label>
            <input type="text" />
          </div>
        </div>

        <div className="flex gap-6 p-4">
          <div className="w-1/2">
            <label>Start Date</label>
            <input type="date" id="birthday" name="birthday" />
          </div>
          <div className="w-1/2">
            <label>End Date</label>
            <input type="date" id="birthday" name="birthday" />
          </div>
        </div>

        <div className="flex flex-col p-4">
          <label>Description</label>
          <textarea
            rows="5"
            placeholder="Ex- Coursework toward: Degree Title, School Name, City,..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Education;
