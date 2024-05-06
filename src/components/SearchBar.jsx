import {
  BasePay,
  Experience,
  NumberOfEmployees,
  jobRoles,
} from "../api/DemoDb";
import MultiSelect from "./MultipleSelect";

export default function SearchBar() {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <MultiSelect
        placeholder="Roles"
        options={jobRoles}
        groupBy={(option) => option.category}
      />
      <MultiSelect
        placeholder="Number Of Employees"
        options={NumberOfEmployees}
        // groupBy={(option) => option.category}
      />
      <MultiSelect
        placeholder="Experience"
        options={Experience}
        groupBy={(option) => option.category}
      />
      <MultiSelect
        placeholder="Base Pay"
        options={BasePay}
        groupBy={(option) => option.category}
      />
    </div>
  );
}
