import React from "react";

import { Tab } from "src/ui/molecules";
import { departmentsDictionary } from "src/shared/constants";

import departmentTabsStyles from "./department-tabs.module.css";

interface Departments {
  departmentList: string[];
  currentDepartment: string;
  setCurrentDepartment: React.Dispatch<React.SetStateAction<string>>;
}

const tabList = Object.keys(departmentsDictionary);

export const DepartmentTabs: React.FC<Departments> = ({
  departmentList = tabList,
  currentDepartment,
  setCurrentDepartment,
}) => {
  return (
    <div className={departmentTabsStyles["department-tabs-wrapper"]}>
      {departmentList.map((departament) => (
        <Tab
          name={departmentsDictionary[departament] ?? departament}
          key={departament}
          isActive={currentDepartment === departament}
          onClick={() => setCurrentDepartment(departament)}
        />
      ))}
    </div>
  );
};
