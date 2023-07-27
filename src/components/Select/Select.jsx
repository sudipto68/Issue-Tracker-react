/* eslint-disable react/prop-types */
const Select = ({ categories, value, onChange }) => {
  return (
    <select className="form-select" value={value} onChange={onChange}>
      {categories.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
