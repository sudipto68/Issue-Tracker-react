import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterType: "",
  searchValue: "",
};

const filterIssueSlice = createSlice({
  name: "filterIssue",
  initialState,
  reducers: {
    filterByType: (state, action) => {
      state.filterType = action.payload;
    },
    setSearch: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { filterByType, setSearch } = filterIssueSlice.actions;

export default filterIssueSlice.reducer;
