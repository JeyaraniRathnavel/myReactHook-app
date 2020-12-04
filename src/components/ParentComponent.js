import React, { useState, useCallback } from "react";
import Count from "./Count";
import Button from "./Button";
import Title from "./Title";

function ParentComponent() {
  const [age, setAge] = useState(23);
  const [salary, setSalary] = useState(17000);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  const incrementAge = useCallback(() => {
    setAge(age + 10);
  }, [age]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>IncrementAge</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>IncrementSalary</Button>
    </div>
  );
}

export default ParentComponent;
