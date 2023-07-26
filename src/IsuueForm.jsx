import { useState } from "react";
import { useDispatch } from "react-redux";
import { addIssue } from "./Redux/features/issue/issueSlice";

// eslint-disable-next-line react/prop-types
const IssueForm = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [issueType, setIssueType] = useState("Bug");
  const dispatch = useDispatch();

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
      <div>
        <label className="form-label">User name:</label>
        <input
          className="form-control"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="form-label">User email:</label>
        <input
          className="form-control"
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="form-label">Issue Description:</label>
        <textarea
          className="form-control"
          value={issueDescription}
          onChange={(e) => setIssueDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="form-label">Issue Type:</label>
        <select
          className="form-select"
          value={issueType}
          onChange={(e) => setIssueType(e.target.value)}
        >
          <option value="bug">Bug</option>
          <option value="feature-request">Feature Request</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button className="btn btn-primary mt-3" type="submit">
        Submit Issue
      </button>
    </form>
  );
};

export default IssueForm;
