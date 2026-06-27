import React from "react";

const AddTeamMemberHeader77 = () => {
  return (
    <div
      style={{
        background: "#111C33",
        padding: "20px",
        borderRadius: "0 0 16px 16px",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "6px",
        }}
      >
        <span
          style={{
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          ←
        </span>

        <h2
          style={{
            margin: 0,
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          Add Team Member
        </h2>
      </div>

      <p
        style={{
          margin: 0,
          marginLeft: "28px",
          color: "#A5B4D4",
          fontSize: "12px",
        }}
      >
        Invite talented students to your team
      </p>
    </div>
  );
};

export default AddTeamMemberHeader77;