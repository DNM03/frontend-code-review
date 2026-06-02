type ArticleProps = {
  body: string;
};

export function Article({ body }: ArticleProps) {
  return <article dangerouslySetInnerHTML={{ __html: body }} />;
}
