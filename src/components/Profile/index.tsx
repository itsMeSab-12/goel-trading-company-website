import style from "./style.module.css";

const Profile = () => {
  return (
    <div className={style.component_container}>
      <h1 className={style.title}>Our Company</h1>
      <div className={style.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nemo
          voluptates ducimus, ex nonOptio esse quas nulla!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nihil in
          cumque veritatis dolorum ut totam officiis officia facere, nostrum
          laborum. Nostrum, reiciendis unde! Aut unde amet laboriosam
          repudiandae quam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nemo
          voluptates ducimus, ex nonOptio esse quas nulla!
        </p>
      </div>
    </div>
  );
};

export default Profile;
