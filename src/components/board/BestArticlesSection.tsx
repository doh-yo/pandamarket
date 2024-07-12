import { Article, ArticleListResponse } from "@/types/articleTypes";
import Image from "next/image";
import { format } from "date-fns";
import { MedalIcon } from "@/lib/Icon";

const BestArticleCard = ({ article }: { article: Article }) => {
  const dateString = format(article.createdAt, "yyyy, MM. dd");
  const { id, title, image, writer, likeCount } = article;

  return (
    <div>
      <div>
        <MedalIcon />
        Best
      </div>
      <div>
        <h2>{title}</h2>
        {image && (
          <div>
            <Image fill src={image} alt={`${id}번 게시글 이미지`} />
          </div>
        )}
      </div>
      <div>
        {writer.nickname}
        <div>{likeCount}</div>
        {dateString}
      </div>
    </div>
  );
};
