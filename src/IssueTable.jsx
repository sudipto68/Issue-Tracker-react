/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import {
  changeIssueStatus,
  deleteIssue,
} from "./Redux/features/issue/issueSlice";

// eslint-disable-next-line react/prop-types
const IssueTable = () => {
  const { issues } = useSelector((state) => state.issue);
  const { filterType, searchValue } = useSelector((state) => state.filterIssue);
  const dispatch = useDispatch();

  let issueData;

  if (searchValue.length > 0) {
    issueData = issues.filter(
      (issue) =>
        issue.userName.toLowerCase().includes(searchValue.toLowerCase()) ||
        issue.userEmail.toLowerCase().includes(searchValue.toLowerCase())
    );
  } else if (filterType) {
    if (filterType.toLowerCase() === "all") {
      issueData = issues;
    } else {
      issueData = issues?.filter((issue) =>
        issue.issueType.toLowerCase().includes(filterType.toLowerCase())
      );
    }
  } else {
    issueData = issues;
  }

  return (
    <table className="table mt-3">
      <thead>
        <tr>
          <th>User name</th>
          <th>User email</th>
          <th>Issue Description</th>
          <th>Issue Type</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {issueData?.map((issue) => (
          <tr key={issue.id}>
            <td>{issue.userName}</td>
            <td>{issue.userEmail}</td>
            <td>{issue.issueDescription}</td>
            <td>{issue.issueType}</td>
            <td>
              <select
                value={issue.status}
                onChange={(e) =>
                  dispatch(
                    changeIssueStatus({
                      id: issue.id,
                      newStatus: e.target.value,
                    })
                  )
                }
              >
                <option value="pending">Pending</option>
                <option value="done">Done</option>
              </select>
            </td>
            <td className="d-flex gap-3">
              <button className="btn btn-info">Edit</button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  dispatch(deleteIssue(issue.id));
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IssueTable;
