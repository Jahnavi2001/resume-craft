import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const WorkHistory = () => {
  return (
    <div className="px-6 py-4">
      <h1 className="text-xl font-semibold">Professional Experience</h1>
      <p className="text-gray-400">Tell us about your most recent job.</p>

      <div className="border rounded-sm">
        <div className="text-right mr-4 mt-4 text-red-400">
          <span className="cursor-pointer"><DeleteOutlineOutlinedIcon /></span>
        </div>
        <div className="flex gap-6 p-4">
          <div className="w-1/2">
            <label>Position Title</label>
            <input type="text" />
          </div>
          <div className="w-1/2 ">
            <label>Company Name</label>
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
          <label>Work Summary</label>
          <textarea
            rows="5"
            placeholder="Ex- Supported mentor teacher throughout lessons by preparing..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;
