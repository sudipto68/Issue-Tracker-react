import IssueTable from "./IssueTable";
import IssueForm from "./IsuueForm";
import {
  filterByType,
  setSearch,
} from "./Redux/features/filterIssue/filterIssueSlice";
import { useDispatch } from "react-redux";

const Issue = () => {
  const dispatch = useDispatch();

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
          <select
            className="form-select"
            onChange={(e) => dispatch(filterByType(e.target.value))}
          >
            <option value="all">All</option>
            <option value="bug">Bug</option>
            <option value="feature-request">Feature Request</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <IssueTable />
    </div>
  );
};

export default Issue;
