const FeatureCard = () => {
  return (
    <div className="w-full h-full gap-10 grid grid-cols-4">
      <div className="h-80 w-ful p-4 border border-border rounded-xl">
        <ProjectView />
        <div className=" mt-4">
          <h1 className="font-bold text-title">
            Create Home For Your Projects
          </h1>
          <p className="text-gray-600 text-body">
            Create projects, invite your team, and keep everything related to
            your work organized in one shared workspace.
          </p>
        </div>
      </div>
      <div className="h-80 p-4 border border-border rounded-xl">
        <KanBanBoard />
        <div className=" mt-4">
          <h1 className="font-bold text-title">Let Your Team Builds Boards</h1>
          <p className="text-gray-600 text-body">
            Project members can create boards and organize tasks into clear
            stages such as Todo, Doing, and Done
          </p>
        </div>
        
      </div>
         <div className="h-80 p-4 border border-border rounded-xl">
        <KanBanBoard />
        <div className=" mt-4">
          <h1 className="font-bold text-title">Let Your Team Builds Boards</h1>
          <p className="text-gray-600 text-body">
            Project members can create boards and organize tasks into clear
            stages such as Todo, Doing, and Done
          </p>
        </div>
        
      </div>
      <div className="h-80 border flex flex-col  border-border rounded-xl bg-primary/5 overflow-hidden">
      <div className="p-2">

        <KanBanBoard />
      </div>

      <div className="p-4 bg-white shrink-0 flex-1">

       
          <h1 className="font-bold text-title">Track Progress</h1>
          <p className="text-gray-600 text-body">
         Keep projects on track with clear tasks, progress indicators, and simple workflows.
          </p>
       
      </div>
        
      </div>
    </div>
  );
};
const Todos = [
  {
    title: "Mobile App Development",
    description: "6 members 4 boards",
    task: "18 Tasks",
  },
  {
    title: "Marketing Campaign",
    description: "3 members 2 boards",
    task: "9 Tasks",
  },
  {
    title: "Dashboard UI Design",
    description: "5 members 3 boards",
    task: "15 Tasks",
  },
];

const ProjectView = () => {
  return (
    <div className="h-50 p-4 border  border-border rounded-xl ">
      <div className="w-full flex justify-between">
        <div className=" flex gap-2 items-center ">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          <p className="font-semibold text-xs text-muted">Your Project</p>
        </div>
        <p className="text-feature px-2 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-700">
          + New Project
        </p>
      </div>

      <div className="h-full w-full  mt-2  flex gap-3 flex-col items-center px-1 text-text-muted ">
        {Todos.map((item) => (
          <div
            key={item.title}
            className="h-10 w-full rounded-md  border-border border flex items-center px-1 hover:ml-1 duration-200"
          >
            <div className="h-6 w-10 text-md text-primary font-bold text-center bg-primary-light/20 rounded-md">
              {item.title.charAt(0)}
            </div>

            <div className="ml-2 w-full flex justify-between items-center ">
              <div>
                <p className="text-feature font-semibold">{item.title}</p>
                <p className="text-small font-bold">{item.description}</p>
              </div>
              <div className="text-feature font-semibold">{item.task}</div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

const KanBanBoard = () => {
  return (
    <div className="h-50 border bg-white border-border rounded-xl p-4">
      <div className="w-full flex justify-between">
        <p className="text-xs font-semibold">Manage Baord</p>
        <p className="px-3 border border-primary/20 text-feature text-primary hover:bg-primary hover:text-white transition-all duration-700">
          + Invite
        </p>
      </div>
      <div className="grid grid-cols-3 bg-primary/20 mt-2 gap-2">
        <div className="w-full h-full border rounded-md border-border bg-white">
          <div className="w-full flex justify-between text-feature items-center px-1 ">
            <p>Todo</p>
            <p>X</p>
          </div>
          <div className="w-full border border-border p-2 text-feature hover:border-primary/20 hover:mb-1 transition-all duration-400">
            <p>Research users</p>
            <p className="px-1 rounded-full border border-primary/20 bg-primary/10 text-center">Research</p>
          </div>
             <div className="w-full border border-border p-2 text-feature hover:border-primary/20 hover:mb-1 transition-all duration-400 ">
            <p>Add Component</p>
            <p className="px-1 rounded-full border border-primary/20 bg-primary/10 text-center">React</p>
          </div>
        </div>
        <div className="w-full h-full border-border border  bg-white">
          <div className="w-full flex justify-between text-feature items-center px-1 ">
            <p>Running</p>
            <p>X</p>
          </div>
           <div className="w-full border border-border p-2 text-feature ">
            <p>Research users</p>
            <p className="px-1 rounded-full border border-primary/20 bg-primary/10 text-center">Research</p>
          </div>
             <div className="w-full border border-border p-2 text-feature hover:border-primary/20 hover:mb-1 transition-all duration-400 ">
            <p>Add Component</p>
            <p className="px-1 rounded-full border border-primary/20 bg-primary/10 text-center">React</p>
          </div>
        </div>
        <div className="w-full h-full border-border border bg-white">
          <div className="w-full flex justify-between text-feature items-center px-1 ">
            <p>Completed</p>
            <p>X</p>
          </div>
           <div className="w-full border border-border p-2 text-feature ">
            <p>Research users</p>
            <p className="px-1 rounded-full border border-primary/20 bg-primary/10 text-center">Research</p>
          </div>
             <div className="w-full border border-border p-2 text-feature hover:border-primary/20 hover:mb-1 transition-all duration-400 ">
            <p>Add Component</p>
            <p className="px-1 rounded-full border border-primary/20 bg-primary/10 text-center">React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
