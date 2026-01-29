

const ProfileRow = ({ label, value, editing, onChange }) => {
  return (
    <tr>
      <th className="w-48 text-gray-400">{label}</th>
      <td>
        {editing ? (
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="input input-sm input-bordered bg-base-100 w-full"
          />
        ) : (
          <span>{value}</span>
        )}
      </td>
    </tr>
  );
};

export default ProfileRow;
