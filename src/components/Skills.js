const Skills = () => {
  return (
    <div className="px-6 py-4">
      <h1 className="text-xl font-semibold">Key Skills</h1>
      <p className="text-gray-400">
        Add relevant professional key skills and proficiencies.
      </p>
      <div className="border rounded-md">
        <div className="w-1/2 flex p-6 items-center gap-4">
          <label>Skill</label>
          <input type="text"/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
