import { FC } from "react";
import { Link } from "react-router-dom";

interface PageChapterProps {
  navigateTo?: string;
  title?: string;
}

const PageChapter: FC<PageChapterProps> = ({
  navigateTo = "/",
  title = "",
}) => {
  return (
    <div className="page-chapter">
      {title.length && <Link to={navigateTo}>back</Link>}
      <h3>{title}</h3>
    </div>
  );
};

export default PageChapter;
