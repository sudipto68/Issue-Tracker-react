import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  issues: JSON.parse(localStorage.getItem("issue")) ?? [],
};

const issueSlice = createSlice({
  name: "issue",
  initialState,
  reducers: {
    addIssue: (state, action) => {
      if (
        state.issues.some(
          (issue) =>
            issue.userEmail.toLowerCase() ===
              action.payload.userEmail.toLowerCase() && issue.status !== "done"
        )
      ) {
        alert(
          'You cannot post another issue until the previous one is marked as "Done".'
        );
        return;
      } else {
        state.issues.push({
          ...action.payload,
          id: Date.now(),
          status: "Pending",
        });
      }

      localStorage.setItem("issue", JSON.stringify(state.issues));
    },

    changeIssueStatus: (state, action) => {
      const { id, newStatus } = action.payload;
      state.issues = state.issues.map((issue) =>
        issue.id === id ? { ...issue, status: newStatus } : issue
      );
      localStorage.setItem("issue", JSON.stringify(state.issues));
    },

    deleteIssue: (state, action) => {
      state.issues = state.issues.filter(
        (issue) => issue.id !== action.payload
      );
      localStorage.setItem("issue", JSON.stringify(state.issues));
    },

    updateIssue: (state, action) => {
      const { id, issueDescription } = action.payload;
      const issueToUpdate = state.issues.find((issue) => issue.id === id);
      if (issueToUpdate) {
        issueToUpdate.issueDescription = issueDescription;
      }
      localStorage.setItem("issue", JSON.stringify(state.issues));
    },
  },
});

export const { addIssue, changeIssueStatus, deleteIssue, updateIssue } =
  issueSlice.actions;

export default issueSlice.reducer;
