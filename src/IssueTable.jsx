/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import {
  changeIssueStatus,
  deleteIssue,
} from "./Redux/features/issue/issueSlice";
import Button from "./components/Button/Button";
import Select from "./components/Select/Select";

// eslint-disable-next-line react/prop-types
const IssueTable = () => {
  const { issues } = useSelector((state) => state.issue);
  const { filterType, searchValue } = useSelector((state) => state.filterIssue);
  const dispatch = useDispatch();

  let issueData;

  const IssueType = [
    {
      value: "pending",
      name: "Pending",
    },
    {
      value: "done",
      name: "Done",
    },
  ];

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
              <Select
                value={issue.status}
                categories={IssueType}
                onChange={(e) =>
                  dispatch(
                    changeIssueStatus({
                      id: issue.id,
                      newStatus: e.target.value,
                    })
                  )
                }
              />
            </td>
            <td className="d-flex gap-3">
              <Button className="btn btn-info" title="Edit" />
              <Button
                className="btn btn-danger"
                onClick={() => {
                  dispatch(deleteIssue(issue.id));
                }}
                title="Delete"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IssueTable;
