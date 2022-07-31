import React from "react";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProfileDetails(props) {
  const { user } = props;
  const navigate = useNavigate();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="d-flex flex-row border-bottom p-5">
        <Image
          src={user.avatar}
          roundedCircle
          width={120}
          height={120}
          className="me-5 border border-primary border-2"
        />
        <div className="d-flex flex-column justify-content-start align-self-center mt-2">
          <p className="fs-4 m-0">{user.name}</p>
          <p className="fs-5">
            <small>{user.posts_count} posts</small>
          </p>
          <Button
            variant="primary"
            size="sm"
            className="w-25"
            onClick={() => navigate(`/profile/${user.id}/edit/`)}
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
