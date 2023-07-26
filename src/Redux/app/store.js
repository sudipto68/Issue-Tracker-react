import { configureStore } from "@reduxjs/toolkit";
import IssueReducer from "../features/issue/issueSlice";
import FilterIssueReducer from "../features/filterIssue/filterIssueSlice";

export const store = configureStore({
  reducer: {
    issue: IssueReducer,
    filterIssue: FilterIssueReducer,
  },
});
