import style from "../Achievements/style.module.css";
import { Award, Trophy, BadgeCheck } from "lucide-react";
const Achievements = () => {
  return (
    <div className={style.component_container}>
      <div className={style.title}>Our Achievements</div>
      <div className={style.sub_title}>
        Milestones that reflect our commitment to quality and consistency.
      </div>
      <div className={style.card_container}>
        <div className={style.card}>
          <div className={style.card_img}>
            <Award />
          </div>
          <div className={style.card_title}>Quality First</div>
          <div className={style.card_info}>
            Sourced from trusted growers and refiners.
          </div>
        </div>
        <div className={style.card}>
          <div className={style.card_img}>
            <Trophy />
          </div>
          <div className={style.card_title}>50+ Years</div>
          <div className={style.card_info}>
            Serving premium products with pride for generations.
          </div>
        </div>
        <div className={style.card}>
          <div className={style.card_img}>
            <BadgeCheck />
          </div>
          <div className={style.card_title}>Trusted by 200+ Partners</div>
          <div className={style.card_info}>
            Specialty retailers and wholesale worldwide.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
