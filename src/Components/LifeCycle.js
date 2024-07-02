import React from "react";

const AddProject = () => {
  return (
    <section className="add-project">
      <h2>Add Project</h2>
      {/* Form to add a new project */}
      <LifeCycle />
    </section>
  );
};

class LifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentA",
    };
  }
  render() {
    return <h1>{this.state.name}</h1>;
  }
}

export { AddProject, LifeCycle };
