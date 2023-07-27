import { useState } from "react";
import { useDispatch } from "react-redux";
import { addIssue } from "./Redux/features/issue/issueSlice";
import Button from "./components/Button/Button";
import Select from "./components/Select/Select";

// eslint-disable-next-line react/prop-types
const IssueForm = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [issueType, setIssueType] = useState("Bug");
  const dispatch = useDispatch();

  const IssueType = [
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addIssue({
        userName,
        userEmail,
        issueDescription,
        issueType,
      })
    );
    setUserName("");
    setUserEmail("");
    setIssueDescription("");
    setIssueType("Bug");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label className="form-label">User name:</label>
        <input
          className="form-control"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="form-label">User email:</label>
        <input
          className="form-control"
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Issue Description:</label>
        <textarea
          className="form-control"
          value={issueDescription}
          onChange={(e) => setIssueDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Issue Type:</label>
        <Select
          value={issueType}
          categories={IssueType}
          onChange={(e) => setIssueType(e.target.value)}
        />
      </div>
      <Button className="btn-primary mt-3" type="submit" title="Submit Issue" />
    </form>
  );
};

export default IssueForm;
