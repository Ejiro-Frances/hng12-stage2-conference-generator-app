import ImageUpload from "./ImageUpload";

const ProfilePhoto = () => {
  return (
    <section className="profile-container">
      <p className="profile-text">Upload Profile Photo</p>

      <ImageUpload />
    </section>
  );
};

export default ProfilePhoto;
