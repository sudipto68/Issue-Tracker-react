import IssueTable from "./IssueTable";
import IssueForm from "./IsuueForm";
import {
  filterByType,
  setSearch,
} from "./Redux/features/filterIssue/filterIssueSlice";
import { useDispatch } from "react-redux";
import Select from "./components/Select/Select";

const Issue = () => {
  const dispatch = useDispatch();

  const IssueType = [
    {
      value: "all",
      name: "All",
    },
    {
      value: "bug",
      name: "Bug",
    },
    {
      value: "feature-request",
      name: "Feature Request",
    },

    {
      value: "other",
      name: "Other",
    },
  ];

  return (
    <div>
      <IssueForm />
      <hr />
      <h2>Issue List</h2>
      <div className="row">
        <div className="col">
          <input
            className="form-control"
            type="text"
            placeholder="Search by user name or email"
            onChange={(e) => {
              dispatch(setSearch(e.target.value));
            }}
          />
        </div>
        <div className="col">
          <Select
            onChange={(e) => dispatch(filterByType(e.target.value))}
            categories={IssueType}
          />
        </div>
      </div>
      <IssueTable />
    </div>
  );
};

export default Issue;
