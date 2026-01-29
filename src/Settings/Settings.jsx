import { useState } from "react";

const Settings = () => {
  const [tab, setTab] = useState("profile");
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Alex Morgan",
    email: "alex@ubreakfix.com",
    store: "Ubreakfix Downtown",
    address: "123 Main Street, NY",
  });

  return (
    <div className="space-y-6 max-w-4xl">
      {/* TABS */}
      <div className="tabs tabs-boxed bg-base-200 w-fit">
        <button
          className={`tab ${tab === "profile" ? "tab-active" : ""}`}
          onClick={() => setTab("profile")}
        >
          Profile
        </button>
        <button
          className={`tab ${tab === "password" ? "tab-active" : ""}`}
          onClick={() => setTab("password")}
        >
          Password
        </button>
      </div>

      {/* PROFILE TAB */}
      {tab === "profile" && (
        <div className="bg-base-200 rounded-xl p-6 space-y-6">
          {/* HEADER */}
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src="https://i.pravatar.cc/100" />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="font-semibold text-lg">Profile Information</h2>
              <p className="text-sm text-gray-400">
                Manage your store and account details
              </p>
            </div>

            <button
              className="btn btn-sm btn-outline"
              onClick={() => setEditing(!editing)}
            >
              {editing ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                <ProfileRow
                  label="Full Name"
                  value={profile.name}
                  editing={editing}
                  onChange={(v) => setProfile({ ...profile, name: v })}
                />
                <ProfileRow
                  label="Email"
                  value={profile.email}
                  editing={editing}
                  onChange={(v) => setProfile({ ...profile, email: v })}
                />
                <ProfileRow
                  label="Store Name"
                  value={profile.store}
                  editing={editing}
                  onChange={(v) => setProfile({ ...profile, store: v })}
                />
                <ProfileRow
                  label="Store Address"
                  value={profile.address}
                  editing={editing}
                  onChange={(v) => setProfile({ ...profile, address: v })}
                />
              </tbody>
            </table>
          </div>

          {editing && (
            <div className="flex justify-end gap-2">
              <button
                className="btn btn-primary"
                onClick={() => setEditing(false)}
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      )}

      {/* PASSWORD TAB */}
      {tab === "password" && (
        <div className="bg-base-200 rounded-xl p-6 max-w-lg space-y-4">
          <h2 className="font-semibold text-lg">Change Password</h2>

          <input
            type="password"
            placeholder="Current Password"
            className="input input-bordered w-full bg-base-100"
          />
          <input
            type="password"
            placeholder="New Password"
            className="input input-bordered w-full bg-base-100"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="input input-bordered w-full bg-base-100"
          />

          <div className="flex justify-end">
            <button className="btn btn-primary">Update Password</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
